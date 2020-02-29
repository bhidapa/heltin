/**
 *
 * relay/environment
 *
 * Reference: https://facebook.github.io/relay/docs/en/runtime-architecture.html#data-types
 *
 */

import { Environment, RecordSource, Store } from 'relay-runtime';
import { network } from './network';

// A collection of records keyed by their data ID, used both to represent the cache and updates to it.
const recordSource = new RecordSource();

// The source of truth for an instance of `RelayRuntime`, holding the canonical set of records in the form of a `RecordSource`.
const store = new Store(recordSource, { gcReleaseBufferSize: 10 });

// Environment providing a high-level API for interacting with both the `Store` and the `Network`.
export const environment = new Environment({
  store,
  network,
});

// Initialization of client side states.
import { init as sessionInit } from './client/session';
sessionInit(environment);
