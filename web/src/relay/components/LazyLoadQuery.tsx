/**
 *
 * LazyLoadQuery
 *
 */

import React from 'react';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import { useLazyLoadQuery } from 'react-relay/hooks';

export interface LazyLoadQueryProps<O extends OperationType> {
  query: GraphQLTaggedNode;
  variables: O['variables'];
  options?: Parameters<typeof useLazyLoadQuery>[2];
  children: (response: O['response']) => React.ReactElement | null;
}

export function LazyLoadQuery<O extends OperationType>(
  props: LazyLoadQueryProps<O>,
): React.ReactElement | null {
  const { children, query, variables, options } = props;
  const response = useLazyLoadQuery<O>(query, variables, options);
  return children(response);
}
