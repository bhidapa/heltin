/**
 *
 * useSuspendMutation
 *
 */

import { unstable_useTransition, useCallback, DependencyList } from 'react';
import { GraphQLTaggedNode, MutationParameters, Disposable, commitMutation } from 'relay-runtime';
import { useMutation } from 'react-relay/hooks';
import { UseMutationConfig } from 'react-relay';
import { useSuspend } from 'lib/useSuspend';

const noop = () => {
  /**/
};

export type UseSuspendMutationConfig<M extends MutationParameters> = Omit<
  UseMutationConfig<M>,
  'onError' | 'onUnsubscribe'
>;

export function useSuspendMutation<M extends MutationParameters>(
  mutation: GraphQLTaggedNode,
  config?: Omit<UseSuspendMutationConfig<M>, 'variables'>,
): (config: UseSuspendMutationConfig<M>) => Disposable {
  const suspend = useSuspend();
  const [commit] = useMutation<M>(mutation, (environment, commitConfig) => {
    let disposed = false,
      inFlightDisposable: Disposable,
      inFlightResolve: () => void;

    suspend(({ resolve, reject }) => {
      const sink = {
        onError: disposed ? noop : reject,
        onCompleted: (result: M['response'], error: unknown) => {
          if (commitConfig.onCompleted) {
            commitConfig.onCompleted(result, error as any);
          }
          if (config?.onCompleted) {
            config?.onCompleted(result, error as any);
          }
          disposed ? noop : error ? reject(error as any) : resolve();
        },
      };

      inFlightResolve = resolve;
      inFlightDisposable = commitMutation(
        environment,
        config
          ? {
              ...config,
              ...commitConfig,
              ...sink,
            }
          : {
              ...commitConfig,
              ...sink,
            },
      );
    });

    return {
      dispose: () => {
        disposed = true;
        if (inFlightDisposable) {
          inFlightDisposable.dispose();
        }
        if (inFlightResolve) {
          inFlightResolve();
        }
      },
    };
  });
  return commit;
}

export function useTransitionMutation<M extends MutationParameters>(
  mutation: GraphQLTaggedNode,
  config?: Omit<UseSuspendMutationConfig<M>, 'variables'>,
  deps?: DependencyList,
): [(config: UseSuspendMutationConfig<M>) => Disposable, boolean] {
  const [startTransition, isInFlight] = unstable_useTransition({ busyMinDurationMs: Infinity });
  const commit = useSuspendMutation<M>(mutation, config);
  const transitionCommit = useCallback<(config: UseSuspendMutationConfig<M>) => Disposable>(
    (commitConfig) => {
      const disposableRef = { current: null as Disposable | null };
      startTransition(() => {
        disposableRef.current = commit(commitConfig);
      });
      return {
        dispose: () => {
          if (disposableRef.current) {
            disposableRef.current.dispose();
          }
        },
      };
    },
    [commit, ...(deps ?? [])],
  );
  return [transitionCommit, isInFlight];
}

export function usePromiseMutation<M extends MutationParameters>(
  mutation: GraphQLTaggedNode,
  config?: Omit<UseMutationConfig<M>, 'variables' | 'onError' | 'onUnsubscribe' | 'onCompleted'>,
  deps?: DependencyList,
): (
  config: Omit<UseMutationConfig<M>, 'onError' | 'onUnsubscribe' | 'onCompleted'>,
) => Promise<M['response']> {
  const [commit] = useMutation<M>(mutation);
  return useCallback(
    (commitConfig: Omit<UseMutationConfig<M>, 'onError' | 'onUnsubscribe' | 'onCompleted'>) =>
      new Promise<M['response']>((resolve, reject) => {
        commit({
          ...config,
          ...commitConfig,
          onError: reject,
          onCompleted: (response) => resolve(response),
        });
      }),
    [commit, ...(deps ?? [])],
  );
}
