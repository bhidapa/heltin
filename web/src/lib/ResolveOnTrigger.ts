/**
 *
 * ResolveOnTrigger
 *
 */
import { useCallback, useMemo } from 'react';
import { useDeepMemoOnValue, useSafeState } from '@domonda/react-plumb';

export interface UseResolveOnTriggerOptions<T> {
  onResolve?: (result: T) => void;
  onCatch?: (error: Error) => void;
  onFinally?: () => void;
}

export interface UseResolveOnTriggerState<T> {
  trigger: () => void;
  loading: boolean;
  result: T | undefined;
  error: Error | null;
  clearError: () => void;
}

export function useResolveOnTrigger<T, P>(
  promise: (params: P) => Promise<T>,
  params: P,
  options: UseResolveOnTriggerOptions<T> = {},
): UseResolveOnTriggerState<T> {
  const [loading, setLoading] = useSafeState<boolean>(false);
  const [result, setResult] = useSafeState<T | undefined>(undefined);
  const [error, setError] = useSafeState<Error | null>(null);

  const memoParams = useDeepMemoOnValue(params);
  const perform = useCallback(() => {
    setLoading(true);
    setResult(undefined);
    setError(null);

    promise(memoParams)
      .then((result) => {
        setResult(result);
        if (options.onResolve) {
          options.onResolve(result);
        }
      })
      .catch((error) => {
        setError(error);
        if (options.onCatch) {
          options.onCatch(error);
        }
      })
      .finally(() => {
        setLoading(false);
        if (options.onFinally) {
          options.onFinally();
        }
      });
  }, [memoParams]);

  return useMemo(
    () => ({
      trigger: perform,
      loading,
      result,
      error,
      clearError: () => setError(null),
    }),
    [result, loading, error, perform],
  );
}

export interface ResolveOnTriggerProps<T, P> extends UseResolveOnTriggerOptions<T> {
  params: P;
  promise: (params: P) => Promise<T>;
  children: (payload: UseResolveOnTriggerState<T>) => React.ReactElement | null;
}

export function ResolveOnTrigger<T, P>(
  props: ResolveOnTriggerProps<T, P>,
): React.ReactElement | null {
  const { params, promise, children, ...options } = props;
  const state = useResolveOnTrigger<T, P>(promise, params, options);
  return children(state);
}
