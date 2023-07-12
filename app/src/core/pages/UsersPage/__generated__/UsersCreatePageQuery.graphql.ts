/**
 * @generated SignedSource<<80c0c5980da26b85bb48ba52759a2329>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersCreatePageQuery$variables = {};
export type UsersCreatePageQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"UserManage_viewer">;
  };
};
export type UsersCreatePageQuery = {
  response: UsersCreatePageQuery$data;
  variables: UsersCreatePageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersCreatePageQuery",
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
              "name": "UserManage_viewer"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersCreatePageQuery",
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
            "name": "canInsertUser",
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
      }
    ]
  },
  "params": {
    "cacheID": "265e2b2ddfa75c370d3f671ad296b5c4",
    "id": null,
    "metadata": {},
    "name": "UsersCreatePageQuery",
    "operationKind": "query",
    "text": "query UsersCreatePageQuery {\n  viewer {\n    ...UserManage_viewer\n    id\n  }\n}\n\nfragment UserManage_viewer on User {\n  canInsertUser\n}\n"
  }
};

if (import.meta.env.DEV) {
  (node as any).hash = "c30b2071e343d2919571b412536f1402";
}

export default node;
