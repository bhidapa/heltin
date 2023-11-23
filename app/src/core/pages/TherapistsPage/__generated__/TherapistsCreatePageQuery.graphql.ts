/**
 * @generated SignedSource<<38ac95ec9af70740209eda6f63744e43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistsCreatePageQuery$variables = Record<PropertyKey, never>;
export type TherapistsCreatePageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_query">;
};
export type TherapistsCreatePageQuery = {
  response: TherapistsCreatePageQuery$data;
  variables: TherapistsCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
              (v0/*: any*/),
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canInsertTherapist",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5cd5b986a725133255d668fc4dab866e",
    "id": null,
    "metadata": {},
    "name": "TherapistsCreatePageQuery",
    "operationKind": "query",
    "text": "query TherapistsCreatePageQuery {\n  ...TherapistManage_query\n}\n\nfragment AutocompleteUser_query on Query {\n  filterUsers(first: 10) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n\nfragment TherapistManage_query on Query {\n  ...AutocompleteUser_query\n  viewer {\n    canInsertTherapist\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "2745f8ff51d46dc305df763fd3eb50d8";
}

export default node;
