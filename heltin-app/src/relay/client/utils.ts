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
  ReaderScalarField,
  ReaderLinkedField,
  OperationDescriptor,
  NormalizationSelector,
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

export type TypedSnapshot<T> = Omit<Snapshot, 'data'> & { data: T };

export type Selections = ReadonlyArray<ReaderLinkedField | ReaderScalarField>;

export function normalizationSelector({
  dataID,
  selections,
}: {
  dataID: string;
  selections: Selections;
}): NormalizationSelector {
  return {
    dataID,
    variables: {},
    node: {
      kind: 'Operation',
      name: '', // appears to be unnecessary
      argumentDefinitions: [],
      selections,
    },
  };
}

export function querylessOperationDescriptor({
  identifier,
  dataID,
  selections,
}: {
  identifier: string;
  dataID: string;
  selections: Selections;
}) {
  return {
    request: { identifier },
    root: normalizationSelector({ dataID, selections }),
  } as OperationDescriptor;
}
