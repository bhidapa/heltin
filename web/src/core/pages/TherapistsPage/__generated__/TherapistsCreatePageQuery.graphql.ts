/**
 * @generated SignedSource<<59c42b425ac721ef00ea6fc8669be277>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistsCreatePageQuery$variables = {};
export type TherapistsCreatePageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_query">;
};
export type TherapistsCreatePageQuery = {
  response: TherapistsCreatePageQuery$data;
  variables: TherapistsCreatePageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TherapistsCreatePageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TherapistManage_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TherapistsCreatePageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          }
        ],
        "concreteType": "UsersConnection",
        "kind": "LinkedField",
        "name": "filterUsers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
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
                "name": "rowId",
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
        ],
        "storageKey": "filterUsers(first:10)"
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canViewerInsertTherapist",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3916cf4e30044651faa357538f4e603",
    "id": null,
    "metadata": {},
    "name": "TherapistsCreatePageQuery",
    "operationKind": "query",
    "text": "query TherapistsCreatePageQuery {\n  ...TherapistManage_query\n}\n\nfragment AutocompleteUser_query on Query {\n  filterUsers(first: 10) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n\nfragment TherapistManage_query on Query {\n  ...AutocompleteUser_query\n  canViewerInsertTherapist\n}\n"
  }
};

if (import.meta.env.DEV) {
  (node as any).hash = "2745f8ff51d46dc305df763fd3eb50d8";
}

export default node;
