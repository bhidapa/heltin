/* tslint:disable */
/* eslint-disable */
/* @relayHash 5e2ae35aaec733b9d2e74c683e20227b */

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
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "sessionRetainQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "session",
            "storageKey": null,
            "args": null,
            "concreteType": "Session",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "session",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "sessionRetainQuery",
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "session",
            "storageKey": null,
            "args": null,
            "concreteType": "Session",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "token",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expiresAt",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "sessionRetainQuery",
    "id": null,
    "text": "query sessionRetainQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '00d0f8a92980ff5a4e5af326d2b282fd';
export default node;
