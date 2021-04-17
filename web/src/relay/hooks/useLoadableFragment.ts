/**
 *
 * relay/useLoadableFragment
 *
 */

import { unstable_useTransition } from 'react';
import { GraphQLTaggedNode, OperationType, FragmentReference } from 'relay-runtime';
import { useRefetchableFragment, usePaginationFragment, RefetchFnDynamic } from 'react-relay/hooks';

// copied from relay
type KeyType<TData = unknown> = Readonly<{
  ' $data'?: TData;
  ' $fragmentRefs': FragmentReference;
}>;

export function useLoadableRefetchableFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
): {
  data: NonNullable<K[' $data']>;
  isRefetching: boolean;
  refetch: RefetchFnDynamic<O, K>;
} {
  const [startTransition, isRefetching] = unstable_useTransition({ busyMinDurationMs: Infinity });
  const [data, refetch] = useRefetchableFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    data: data as any,
    isRefetching,
    refetch: (((...args: any[]) =>
      startTransition(() => (refetch as any)(...args))) as any) as typeof refetch,
  };
}

export function useLoadablePaginationFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [startTransition, isRefetching] = unstable_useTransition({ busyMinDurationMs: Infinity });
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
