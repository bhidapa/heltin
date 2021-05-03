/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ClientsPageQueryVariables = {};
export type ClientsPageQueryResponse = {
    readonly viewer: {
        readonly isAdmin: boolean;
        readonly isMentalHealthProfessional: boolean;
    } | null;
};
export type ClientsPageQuery = {
    readonly response: ClientsPageQueryResponse;
    readonly variables: ClientsPageQueryVariables;
};



/*
query ClientsPageQuery {
  viewer {
    isAdmin
    isMentalHealthProfessional
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMentalHealthProfessional",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsPageQuery",
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
          (v1/*: any*/)
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
    "name": "ClientsPageQuery",
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
          (v1/*: any*/),
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
    "cacheID": "e9ede3f857477a917ff595241f7478b4",
    "id": null,
    "metadata": {},
    "name": "ClientsPageQuery",
    "operationKind": "query",
    "text": "query ClientsPageQuery {\n  viewer {\n    isAdmin\n    isMentalHealthProfessional\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e65c3e194031309011197a27d35c0bb6';
export default node;
