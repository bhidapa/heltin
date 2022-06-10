/**
 * @generated SignedSource<<b6a795d277d18c8fc8d1484e9f736e41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCreatePageQuery$variables = {};
export type ClientsCreatePageQuery$data = {
  readonly nextAvailableClientNumber: number;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ClientManage_viewer">;
  };
};
export type ClientsCreatePageQuery = {
  response: ClientsCreatePageQuery$data;
  variables: ClientsCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nextAvailableClientNumber",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCreatePageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "viewer",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ClientManage_viewer"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "viewer"
      },
      (v0/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isTherapist",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v0/*: any*/)
    ]
  },
  "params": {
    "cacheID": "eb3f3f8d5a268d66a4a4c3d25c07721b",
    "id": null,
    "metadata": {},
    "name": "ClientsCreatePageQuery",
    "operationKind": "query",
    "text": "query ClientsCreatePageQuery {\n  viewer {\n    ...ClientManage_viewer\n    id\n  }\n  nextAvailableClientNumber\n}\n\nfragment ClientManage_viewer on User {\n  isAdmin\n  isTherapist\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "ade09c7fbb4109a15c8d4ae39da04182";
}

export default node;
