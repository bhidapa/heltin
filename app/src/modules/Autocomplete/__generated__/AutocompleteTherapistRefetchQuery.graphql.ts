/**
 * @generated SignedSource<<462e65f1729f156cffcbdf7651bd597a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteTherapistRefetchQuery$variables = {
  q?: string | null | undefined;
};
export type AutocompleteTherapistRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteTherapist_query">;
};
export type AutocompleteTherapistRefetchQuery = {
  response: AutocompleteTherapistRefetchQuery$data;
  variables: AutocompleteTherapistRefetchQuery$variables;
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
    "name": "AutocompleteTherapistRefetchQuery",
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
        "name": "AutocompleteTherapist_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AutocompleteTherapistRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "disabled",
            "value": false
          },
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
        "concreteType": "TherapistsConnection",
        "kind": "LinkedField",
        "name": "filterTherapists",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Therapist",
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
                "name": "fullName",
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
    "cacheID": "7967c1a958158ce3d61031b4e097597f",
    "id": null,
    "metadata": {},
    "name": "AutocompleteTherapistRefetchQuery",
    "operationKind": "query",
    "text": "query AutocompleteTherapistRefetchQuery(\n  $q: String\n) {\n  ...AutocompleteTherapist_query_2KyZVN\n}\n\nfragment AutocompleteTherapist_query_2KyZVN on Query {\n  filterTherapists(first: 10, searchText: $q, disabled: false) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "64608a322ef42f5e375aaf6967079681";
}

export default node;
