/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type sessionLookupQueryVariables = {};
export type sessionLookupQueryResponse = {
    readonly __typename: string;
    readonly session: {
        readonly token: string;
        readonly expiresAt: number;
    } | null;
};
export type sessionLookupQuery = {
    readonly response: sessionLookupQueryResponse;
    readonly variables: sessionLookupQueryVariables;
};



/*
query sessionLookupQuery {
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
    "name": "sessionLookupQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "sessionLookupQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "sessionLookupQuery",
    "operationKind": "query",
    "text": "query sessionLookupQuery {\n  __typename\n}\n"
  }
};
})();
(node as any).hash = '22cb49c906f584f48c49e62699b36ccc';
export default node;
