/**
 *
 * relay/hooks
 *
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { RelayRefetchProp, RelayPaginationProp } from 'react-relay';
import { useDeepMemoOnValue } from 'lib/useDeepMemoOnValue';

/** Paginates relay when the `value` changes. */
export function useValueForRefetch<T>(value: T, relay: RelayRefetchProp): [boolean, Error | null] {
  const memoValue = useDeepMemoOnValue(value);
  const [{ loading, error }, setState] = useState<{ loading: boolean; error: Error | null }>({
    loading: false,
    error: null,
  });

  let mounted = true;
  useEffect(
    () => () => {
      mounted = false;
    },
    [],
  );

  // we ignore refetching on init because that is handled by the `QueryRenderer`
  const initRef = useRef(true);
  useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
      return;
    }

    setState({ loading: true, error: null });

    const disposable = relay.refetch(memoValue, undefined, (err) => {
      if (mounted) {
        setState({ loading: false, error: err || null });
      }
    });

    return () => {
      if (disposable) {
        disposable.dispose();
      }
    };
  }, [memoValue]);

  return [loading, error];
}

/** Paginates relay when the `value` changes. */
export function useValueForPagination<T extends { count: number }>(
  value: T,
  relay: RelayPaginationProp,
): [() => void, boolean, Error | null] {
  const memoValue = useDeepMemoOnValue(value);
  const [{ loading, error }, setState] = useState<{ loading: boolean; error: Error | null }>({
    loading: false,
    error: null,
  });

  let mounted = true;
  useEffect(
    () => () => {
      mounted = false;
    },
    [],
  );

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
      (err) => {
        if (mounted) {
          setState({ loading: false, error: err || null });
        }
      },
      memoValue,
    );

    return () => {
      if (disposable) {
        disposable.dispose();
      }
    };
  }, [memoValue]);

  const loadMore = useCallback(() => {
    if (relay.hasMore() && !relay.isLoading()) {
      setState({ loading: true, error: null });
      relay.loadMore(memoValue.count, (err) => {
        if (mounted) {
          setState({ loading: false, error: err || null });
        }
      });
    }
  }, [memoValue]);

  return [loadMore, loading, error];
}
