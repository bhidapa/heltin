/**
 *
 * useSubscription
 *
 */

import { useSubscription as rUseSubscription } from 'react-relay/hooks';
import { GraphQLSubscriptionConfig, OperationType } from 'relay-runtime';
import { useDeepMemoOnValue } from '@domonda/react-plumb';

export function useSubscription<O extends OperationType>(config: GraphQLSubscriptionConfig<O>) {
  const memoConfig = useDeepMemoOnValue(config);
  return rUseSubscription(memoConfig);
}
