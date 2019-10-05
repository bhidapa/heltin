/**
 *
 * session
 *
 */

import { graphql, commitLocalUpdate, Environment, WithoutRefType } from 'relay-runtime';
import { populateRecordValues, lookup } from '../utils';
import { loadSession, saveSession } from './storage';

// type
import { session } from 'relay/artifacts/session.graphql';
import { sessionLookupQuery } from 'relay/artifacts/sessionLookupQuery.graphql';

export type Session = WithoutRefType<session>;
graphql`
  fragment session on Session {
    token
    expiresAt
  }
`;
const __typename = 'Session';
const fieldKey = 'session';
const dataID = `client:${__typename}`;

// local environment, helps guarantee that the env is set
let environment: Environment;

export function init(_environment: Environment) {
  environment = _environment;

  setSession(loadSession());

  // keep in memory
  const retainLock = environment.retain({
    dataID,
    variables: {},
    node: { selections: [] } as any,
  });

  return () => {
    retainLock.dispose();
  };
}

export function lookupSession(): Session | null {
  const { data } = lookup<sessionLookupQuery>(
    environment,
    graphql`
      query sessionLookupQuery {
        __typename
        session {
          ...session @relay(mask: false)
        }
      }
    `,
    {},
  );
  return (data && data.session) || null;
}

export function setSession(session: Session | null) {
  commitLocalUpdate(environment, (store) => {
    if (session) {
      let record = store.get(dataID);
      if (!record) {
        record = store.create(dataID, __typename);
      }

      populateRecordValues(record, session);
      store.getRoot().setLinkedRecord(record, fieldKey);
    } else {
      store.getRoot().setValue(null, fieldKey);
      store.delete(dataID);
    }
  });

  // save in storage
  saveSession(session);
}
