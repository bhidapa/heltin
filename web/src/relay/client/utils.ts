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
  Disposable,
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

export type TypedSnapshot<T> = Omit<Snapshot, 'data'> & { data: T };

export function lookupQuery<O extends OperationType>(
  environment: Environment,
  query: GraphQLTaggedNode,
  variables: O['variables'],
): Omit<Snapshot, 'data'> & { data: O['response'] | undefined | null } {
  const operation = createOperationDescriptor(getRequest(query), variables);
  environment.check(operation); // we dont care about the result, we just need the missingFieldsHandlers to get called
  return environment.lookup(operation.fragment);
}

export function retainQuery<O extends OperationType>(
  environment: Environment,
  query: GraphQLTaggedNode,
  variables: O['variables'],
): Disposable {
  const operation = createOperationDescriptor(getRequest(query), variables);
  environment.check(operation); // we dont care about the result, we just need the missingFieldsHandlers to get called
  return environment.retain(operation);
}
