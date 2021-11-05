/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RootQueryVariables = {};
export type RootQueryResponse = {
    readonly viewer: {
        readonly isAdmin: boolean;
        readonly isMentalHealthProfessional: boolean;
        readonly " $fragmentRefs": FragmentRefs<"AppBar_viewer">;
    } | null;
};
export type RootQuery = {
    readonly response: RootQueryResponse;
    readonly variables: RootQueryVariables;
};



/*
query RootQuery {
  viewer {
    isAdmin
    isMentalHealthProfessional
    ...AppBar_viewer
    id
  }
}

fragment AppBarActions_viewer on User {
  id
  email
}

fragment AppBar_viewer on User {
  isAdmin
  ...AppBarActions_viewer
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
    "name": "RootQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppBar_viewer"
          }
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
    "name": "RootQuery",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d7443857b999404d6a3ccd50d0c2f830",
    "id": null,
    "metadata": {},
    "name": "RootQuery",
    "operationKind": "query",
    "text": "query RootQuery {\n  viewer {\n    isAdmin\n    isMentalHealthProfessional\n    ...AppBar_viewer\n    id\n  }\n}\n\nfragment AppBarActions_viewer on User {\n  id\n  email\n}\n\nfragment AppBar_viewer on User {\n  isAdmin\n  ...AppBarActions_viewer\n}\n"
  }
};
})();
(node as any).hash = '2a7a7a198f1bda3816805b90cc3590d0';
export default node;
