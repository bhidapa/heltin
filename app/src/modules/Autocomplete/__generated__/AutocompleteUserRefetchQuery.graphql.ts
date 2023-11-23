/**
 * @generated SignedSource<<98878e0c85b5f2988924a5287c846566>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteUserRefetchQuery$variables = {
  q?: string | null | undefined;
};
export type AutocompleteUserRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteUser_query">;
};
export type AutocompleteUserRefetchQuery = {
  response: AutocompleteUserRefetchQuery$data;
  variables: AutocompleteUserRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "q"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AutocompleteUserRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "q",
            "variableName": "q"
          }
        ],
        "kind": "FragmentSpread",
        "name": "AutocompleteUser_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AutocompleteUserRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "q"
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b5c072230e3fa25e28a8a021a18cf939",
    "id": null,
    "metadata": {},
    "name": "AutocompleteUserRefetchQuery",
    "operationKind": "query",
    "text": "query AutocompleteUserRefetchQuery(\n  $q: String\n) {\n  ...AutocompleteUser_query_2KyZVN\n}\n\nfragment AutocompleteUser_query_2KyZVN on Query {\n  filterUsers(first: 10, searchText: $q) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "201f8f6aff8eeb84b0e74ae5461baad8";
}

export default node;
