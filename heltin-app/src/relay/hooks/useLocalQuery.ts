/**
 *
 * useLocalQuery
 *
 */

import { useMemo, useRef, useLayoutEffect } from 'react';
import {
  getRequest,
  createOperationDescriptor,
  Environment,
  GraphQLTaggedNode,
  OperationType,
} from 'relay-runtime';
import { useForceUpdate, useDeepMemoOnValue } from '@domonda/react-plumb';

export interface UseLocalQueryProps<O extends OperationType> {
  environment: Environment;
  query: GraphQLTaggedNode;
  variables: O['variables'];
}

export function useLocalQuery<O extends OperationType>({
  environment,
  query,
  variables,
}: UseLocalQueryProps<O>) {
  const latestVariables = useDeepMemoOnValue(variables);
  const operation = useMemo(() => {
    const request = getRequest(query);
    return createOperationDescriptor(request, latestVariables);
  }, [query, latestVariables]);

  const dataRef = useRef<O['response']>(null);
  const forceUpdate = useForceUpdate();
  const cleanupFnRef = useRef<(() => void) | null>(null);

  const snapshot = useMemo(() => {
    const response = environment.lookup(operation.fragment);
    dataRef.current = response.data;

    const retainDisposable = environment.retain(operation.root);
    const subscribeDisposable = environment.subscribe(response, (newSnapshot) => {
      dataRef.current = newSnapshot.data;
      forceUpdate();
    });

    let disposed = false;
    function nextCleanupFn() {
      if (!disposed) {
        disposed = true;
        cleanupFnRef.current = null;
        retainDisposable.dispose();
        subscribeDisposable.dispose();
      }
    }
    if (cleanupFnRef.current) {
      cleanupFnRef.current();
    }
    cleanupFnRef.current = nextCleanupFn;

    return response;
  }, [environment, operation]);

  useLayoutEffect(() => {
    const cleanupFn = cleanupFnRef.current;
    return () => {
      cleanupFn && cleanupFn();
    };
  }, [snapshot]);

  return dataRef.current;
}
