/**
 *
 * relay/useSubscription
 *
 */

import { useEffect, DependencyList, useCallback, useRef } from 'react';
import { Environment, requestSubscription } from 'react-relay';
import { OperationType, GraphQLTaggedNode, Disposable } from 'relay-runtime';
import { useSafeState } from '@domonda/react-plumb';

export interface UseSubscriptionProps<O extends OperationType> {
  environment: Environment;
  subscription: GraphQLTaggedNode;
  variables: O['variables'];
}

// NOTE: superficial implementation, use with caution
export function useSubscription<O extends OperationType>(
  props: UseSubscriptionProps<O>,
  deps: DependencyList,
): [Error | null, () => void] {
  const { environment, subscription, variables } = props;
  const [error, setError] = useSafeState<Error | null>(null);

  const subRef = useRef<Disposable | null>(null);
  const subscribe = useCallback(() => {
    setError(null);
    if (subRef.current) {
      subRef.current.dispose();
      subRef.current = null;
    }
    subRef.current = requestSubscription<O['response']>(environment, {
      subscription,
      variables,
      onError: (error) => setError(error),
      onCompleted: () => (subRef.current = null),
    });
  }, deps);

  useEffect(() => {
    subscribe();
    return () => {
      if (subRef.current) {
        subRef.current.dispose();
        subRef.current = null;
      }
    };
  }, [subscribe]);

  return [error, subscribe];
}
