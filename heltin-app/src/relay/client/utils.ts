/**
 *
 * utils
 *
 * Helpful functions for managing client local store in Relay.
 *
 */

import {
  Environment,
  RecordProxy,
  GraphQLTaggedNode,
  createOperationDescriptor,
  getRequest,
  Snapshot,
  OperationType,
} from 'relay-runtime';

/** Loop through the object and `setValue` on the passed RecordProxy. */
export function populateRecordValues(
  record: RecordProxy,
  obj: { [key: string]: string | number | boolean | null },
) {
  Object.keys(obj).forEach((key) => {
    record.setValue(obj[key], key);
  });
}

export function lookup<O extends OperationType>(
  environment: Environment,
  query: GraphQLTaggedNode,
  variables: O['variables'],
): Omit<Snapshot, 'data'> & { data: O['response'] | undefined | null } {
  return environment.lookup(createOperationDescriptor(getRequest(query), variables).fragment);
}
