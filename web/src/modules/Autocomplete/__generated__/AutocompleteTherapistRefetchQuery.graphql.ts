/**
 * @generated SignedSource<<72ad2df275e15a7d65eafbe93bc2c24b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteTherapistRefetchQuery$variables = {
  q?: string | null;
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
    "cacheID": "b236fcf220301f75a4697a702a968fdb",
    "id": null,
    "metadata": {},
    "name": "AutocompleteTherapistRefetchQuery",
    "operationKind": "query",
    "text": "query AutocompleteTherapistRefetchQuery(\n  $q: String\n) {\n  ...AutocompleteTherapist_query_2KyZVN\n}\n\nfragment AutocompleteTherapist_query_2KyZVN on Query {\n  filterTherapists(first: 10, searchText: $q) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "f388a2b850bb826664b2c4b36b183ae0";
}

export default node;
