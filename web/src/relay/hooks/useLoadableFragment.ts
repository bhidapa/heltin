/**
 *
 * relay/useLoadableFragment
 *
 */

import { unstable_useTransition } from 'react';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import { useRefetchableFragment, usePaginationFragment } from 'react-relay/hooks';

interface KeyType {
  readonly ' $data'?: unknown;
}

export function useLoadableRefetchableFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [startTransition, isRefetching] = unstable_useTransition({ timeoutMs: Infinity });
  const [data, refetch] = useRefetchableFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    data,
    isRefetching,
    refetch: (((...args: any[]) =>
      startTransition(() => (refetch as any)(...args))) as any) as typeof refetch,
  };
}

export function useLoadablePaginationFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [startTransition, isRefetching] = unstable_useTransition({ timeoutMs: Infinity });
  const { refetch, ...fragment } = usePaginationFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    ...fragment,
    isRefetching,
    refetch: ((...args: any[]) => {
      startTransition(() => {
        (refetch as any)(...args);
      });
    }) as typeof refetch,
  };
}
