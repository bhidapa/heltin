/**
 *
 * useSubscription
 *
 */

import { useSubscription as rUseSubscription } from 'react-relay/hooks';
import { GraphQLSubscriptionConfig, OperationType } from 'relay-runtime';
import { useDeepMemoOnValue } from '@domonda/react-plumb';
import { usePanic } from 'lib/usePanic';

export function useSubscription<O extends OperationType>({
  onError,
  ...config
}: GraphQLSubscriptionConfig<O>) {
  const [panic] = usePanic();
  const memoConfig = useDeepMemoOnValue({
    ...config,
    onError: onError || panic,
  });
  return rUseSubscription(memoConfig);
}
