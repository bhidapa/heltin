/**
 *
 * relay
 *
 */
import { useCallback } from 'react';
import { useMutation, UseMutationConfig } from 'react-relay';
import { GraphQLTaggedNode, MutationParameters } from 'relay-runtime';

export { graphql } from 'react-relay';

export type WithoutFragmentType<T> = Omit<T, ' $fragmentType'>;

export type UsePromiseMutationConfig<M extends MutationParameters> = Omit<
  UseMutationConfig<M>,
  'onError' | 'onCompleted'
>;

export function usePromiseMutation<M extends MutationParameters>(
  mutation: GraphQLTaggedNode,
): [commit: (config: UsePromiseMutationConfig<M>) => Promise<M['response']>, isInFlight: boolean] {
  const [commit, isInFlight] = useMutation<M>(mutation);
  return [
    useCallback(
      (commitConfig) =>
        new Promise<M['response']>((resolve, reject) => {
          commit({
            ...commitConfig,
            onError: reject,
            onCompleted: (response) => resolve(response),
          });
        }),
      [commit],
    ),
    isInFlight,
  ];
}
