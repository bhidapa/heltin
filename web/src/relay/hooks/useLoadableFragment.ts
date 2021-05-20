/**
 *
 * relay/useLoadableFragment
 *
 */

import { useTransition } from 'react';
import { GraphQLTaggedNode, OperationType, FragmentReference } from 'relay-runtime';
import { useRefetchableFragment, usePaginationFragment } from 'react-relay/hooks';

// copied from relay
type KeyType<TData = unknown> = Readonly<{
  ' $data'?: TData;
  ' $fragmentRefs': FragmentReference;
}>;

export function useLoadableRefetchableFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [isRefetching, startTransition] = useTransition();
  const [data, refetch] = useRefetchableFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    data: data as any,
    isRefetching: isRefetching as boolean,
    refetch: ((...args: any[]) =>
      startTransition(() => (refetch as any)(...args))) as any as typeof refetch,
  };
}

export function useLoadablePaginationFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [isRefetching, startTransition] = useTransition();
  const { refetch, ...fragment } = usePaginationFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    ...fragment,
    isRefetching: isRefetching as boolean,
    refetch: ((...args: any[]) => {
      startTransition(() => {
        (refetch as any)(...args);
      });
    }) as typeof refetch,
  };
}
