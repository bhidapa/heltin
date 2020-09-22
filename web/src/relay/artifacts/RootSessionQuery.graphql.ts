/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RootSessionQueryVariables = {};
export type RootSessionQueryResponse = {
    readonly __typename: string;
    readonly session: {
        readonly token: string;
        readonly expiresAt: number;
    } | null;
};
export type RootSessionQuery = {
    readonly response: RootSessionQueryResponse;
    readonly variables: RootSessionQueryVariables;
};



/*
query RootSessionQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RootSessionQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RootSessionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1ec9fba06c1ba43f18b58b6066ab466a",
    "id": null,
    "metadata": {},
    "name": "RootSessionQuery",
    "operationKind": "query",
    "text": "query RootSessionQuery {\n  __typename\n}\n"
  }
};
})();
(node as any).hash = '878c60fcb8e58b60bf44a7bfe89fdac2';
export default node;
