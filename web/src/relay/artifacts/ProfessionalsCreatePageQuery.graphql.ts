/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ProfessionalsCreatePageQueryVariables = {};
export type ProfessionalsCreatePageQueryResponse = {
    readonly viewer: {
        readonly isAdmin: boolean;
    } | null;
};
export type ProfessionalsCreatePageQuery = {
    readonly response: ProfessionalsCreatePageQueryResponse;
    readonly variables: ProfessionalsCreatePageQueryVariables;
};



/*
query ProfessionalsCreatePageQuery {
  viewer {
    isAdmin
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAdmin",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfessionalsCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProfessionalsCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "91c38b0519a179419d5452988c433ae8",
    "id": null,
    "metadata": {},
    "name": "ProfessionalsCreatePageQuery",
    "operationKind": "query",
    "text": "query ProfessionalsCreatePageQuery {\n  viewer {\n    isAdmin\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '5c769fbdb6c9dfe61967a5cd9784d88f';
export default node;
