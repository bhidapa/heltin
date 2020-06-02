/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type sessionRetainQueryVariables = {};
export type sessionRetainQueryResponse = {
    readonly __typename: string;
    readonly session: {
        readonly " $fragmentRefs": FragmentRefs<"session">;
    } | null;
};
export type sessionRetainQuery = {
    readonly response: sessionRetainQueryResponse;
    readonly variables: sessionRetainQueryVariables;
};



/*
query sessionRetainQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "sessionRetainQuery",
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Session",
            "kind": "LinkedField",
            "name": "session",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "session"
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "sessionRetainQuery",
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Session",
            "kind": "LinkedField",
            "name": "session",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "token",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "expiresAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "sessionRetainQuery",
    "operationKind": "query",
    "text": "query sessionRetainQuery {\n  __typename\n}\n"
  }
};
})();
(node as any).hash = 'f69f5552ccdca02bfb974c336e653b43';
export default node;
