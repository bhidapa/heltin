/**
 *
 * relay/useValueForPagination
 *
 */

import { useEffect, useRef, useCallback } from 'react';
import { RelayPaginationProp } from 'react-relay';
import { useDeepMemoOnValue, useSafeState } from '@domonda/react-plumb';

/** Paginates relay when the `value` changes. */
export function useValueForPagination<T extends { count: number }>(
  value: T,
  relay: RelayPaginationProp,
  options: {
    onRefetch?: (value: T) => void;
    onLoadMore?: () => void;
  } = {},
): [() => void, boolean, Error | null] {
  const memoValue = useDeepMemoOnValue(value);
  const [{ loading, error }, setState] = useSafeState<{ loading: boolean; error: Error | null }>({
    loading: false,
    error: null,
  });
  const onRefetchRef = useRef(options.onRefetch);
  const onLoadMoreRef = useRef(options.onLoadMore);

  // we ignore refetching on init because that is handled by the `QueryRenderer`
  const initRef = useRef(true);
  useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
      return;
    }

    setState({ loading: true, error: null });

    const disposable = relay.refetchConnection(
      memoValue.count,
      (err) => setState({ loading: false, error: err || null }),
      memoValue,
    );

    if (onRefetchRef.current) {
      onRefetchRef.current(memoValue);
    }

    return () => {
      if (disposable) {
        disposable.dispose();
      }
    };
  }, [memoValue]);

  const loadMore = useCallback(() => {
    if (relay.hasMore() && !relay.isLoading()) {
      setState({ loading: true, error: null });
      relay.loadMore(memoValue.count, (err) => setState({ loading: false, error: err || null }));
      if (onLoadMoreRef.current) {
        onLoadMoreRef.current();
      }
    }
  }, [memoValue]);

  return [loadMore, loading, error];
}
