/**
 * @generated SignedSource<<e722d6dd973536843ec322de17063b38>>
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
  variables: TherapistsCreatePageQuery$variables;
  response: TherapistsCreatePageQuery$data;
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
      }
    ]
  },
  "params": {
    "cacheID": "55b735c79f281b317a951de7238b8190",
    "id": null,
    "metadata": {},
    "name": "TherapistsCreatePageQuery",
    "operationKind": "query",
    "text": "query TherapistsCreatePageQuery {\n  ...TherapistManage_query\n}\n\nfragment AutocompleteUser_query on Query {\n  filterUsers(first: 10) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n\nfragment TherapistManage_query on Query {\n  ...AutocompleteUser_query\n}\n"
  }
};

if (import.meta.env.DEV) {
  (node as any).hash = "2745f8ff51d46dc305df763fd3eb50d8";
}

export default node;
