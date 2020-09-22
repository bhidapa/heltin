/**
 *
 * relay/environment
 *
 * Reference: https://facebook.github.io/relay/docs/en/runtime-architecture.html#data-types
 *
 */

import { Environment, RecordSource, Store, ROOT_TYPE } from 'relay-runtime';
import { network } from './network';

// A collection of records keyed by their data ID, used both to represent the cache and updates to it.
const recordSource = new RecordSource();

// The source of truth for an instance of `RelayRuntime`, holding the canonical set of records in the form of a `RecordSource`.
const store = new Store(recordSource, { gcReleaseBufferSize: 25 });

// Environment providing a high-level API for interacting with both the `Store` and the `Network`.
export const environment = new Environment({
  store,
  network,
  missingFieldHandlers: [
    {
      /**
       *
       * We know for a fact that when the user requests something like this:
       *
       * ```gql
       *query {
       *  node(id: "globallyUniqueID") {
       *    ... on Type {
       *      typeField
       *    }
       *  }
       *# or #
       *  type(id: "globallyUniqueID") {
       *    typeField
       *  }
       *}
       * ```
       *
       * we want a node of the concrete type `Type` with the globally unique ID
       * behind the `id` argument. This missing field handler allows such queries
       * to get resolved locally.
       *
       */
      kind: 'linked',
      handle: function handle(field, record, variables) {
        if (
          // originates from root
          record?.__typename === ROOT_TYPE &&
          // name of the field equals to `node` or the concrete type
          (field.name === 'node' ||
            field.name.toLowerCase() === field.concreteType?.toLowerCase()) &&
          // requests the record by ID
          field.args[0]?.name === 'id'
        ) {
          const arg = field.args[0];
          if (arg.kind === 'Literal') {
            return (arg as any).value; // value does exist on literal arguments
          }

          return variables[(arg as any).variableName]; // variableName does exist on variable arguments
        }
        return undefined;
      },
    },
  ],
});

// Enable the "precise type refinement" feature flag. Relay v10+ only.
require('relay-runtime').RelayFeatureFlags.ENABLE_PRECISE_TYPE_REFINEMENT = true;

// Initialization of client side states.
import { init as sessionInit } from './client/session';
sessionInit(environment);
