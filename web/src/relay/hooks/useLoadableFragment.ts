/**
 *
 * relay/useLoadableFragment
 *
 */

import { unstable_useTransition } from 'react';
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
  const [isRefetching, startTransition] = unstable_useTransition({ busyMinDurationMs: Infinity });
  const [data, refetch] = useRefetchableFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    data: data as any,
    // @ts-expect-error tuple order of useTransition has been flipped
    isRefetching: isRefetching as boolean,
    refetch: (((...args: any[]) =>
      // @ts-expect-error tuple order of useTransition has been flipped
      startTransition(() => (refetch as any)(...args))) as any) as typeof refetch,
  };
}

export function useLoadablePaginationFragment<O extends OperationType, K extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  parentFragmentRef: K,
) {
  const [isRefetching, startTransition] = unstable_useTransition({ busyMinDurationMs: Infinity });
  const { refetch, ...fragment } = usePaginationFragment<O, K>(fragmentInput, parentFragmentRef);
  return {
    ...fragment,
    // @ts-expect-error tuple order of useTransition has been flipped
    isRefetching: isRefetching as boolean,
    refetch: ((...args: any[]) => {
      // @ts-expect-error tuple order of useTransition has been flipped
      startTransition(() => {
        (refetch as any)(...args);
      });
    }) as typeof refetch,
  };
}
