/**
 * @generated SignedSource<<304a914b1b955fdba56d4f403f625a0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistsTableRefetchQuery$variables = {
  count: number;
  cursor?: any | null;
  q?: string | null;
};
export type TherapistsTableRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TherapistsTable_query">;
};
export type TherapistsTableRefetchQuery = {
  response: TherapistsTableRefetchQuery$data;
  variables: TherapistsTableRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "q"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "searchText",
    "variableName": "q"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TherapistsTableRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          {
            "kind": "Variable",
            "name": "q",
            "variableName": "q"
          }
        ],
        "kind": "FragmentSpread",
        "name": "TherapistsTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TherapistsTableRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TherapistsConnection",
        "kind": "LinkedField",
        "name": "filterTherapists",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TherapistsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Therapist",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fullName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "enabled",
                    "storageKey": null
                  },
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
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "searchText"
        ],
        "handle": "connection",
        "key": "TherapistsTable_filterTherapists",
        "kind": "LinkedHandle",
        "name": "filterTherapists"
      }
    ]
  },
  "params": {
    "cacheID": "72e6d3de8f7103eed8d5fef14203395e",
    "id": null,
    "metadata": {},
    "name": "TherapistsTableRefetchQuery",
    "operationKind": "query",
    "text": "query TherapistsTableRefetchQuery(\n  $count: Int!\n  $cursor: Cursor\n  $q: String\n) {\n  ...TherapistsTable_query_XhAmI\n}\n\nfragment TherapistsTable_query_XhAmI on Query {\n  filterTherapists(first: $count, after: $cursor, searchText: $q) {\n    totalCount\n    edges {\n      node {\n        rowId\n        type\n        fullName\n        enabled\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "3ca6a2af6305566de66b9310f0cd1604";
}

export default node;
