/**
 * @generated SignedSource<<442e608f6060296cb45af47a254d1fde>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsTableRefetchQuery$variables = {
  count: number;
  cursor?: any | null;
  q?: string | null;
};
export type ClientsTableRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ClientsTable_query">;
};
export type ClientsTableRefetchQuery = {
  variables: ClientsTableRefetchQuery$variables;
  response: ClientsTableRefetchQuery$data;
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
    "kind": "Literal",
    "name": "orderBy",
    "value": "NUMBER_DESC"
  },
  {
    "kind": "Variable",
    "name": "searchText",
    "variableName": "q"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsTableRefetchQuery",
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
        "name": "ClientsTable_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsTableRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientsConnection",
        "kind": "LinkedField",
        "name": "filterClients",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "number",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClientAssignedTherapist",
                    "kind": "LinkedField",
                    "name": "latestAssignedTherapist",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "therapist",
                        "args": null,
                        "concreteType": "Therapist",
                        "kind": "LinkedField",
                        "name": "therapistByTherapistRowId",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "treatments",
                    "args": null,
                    "concreteType": "CaseStudyTreatmentsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
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
          "orderBy",
          "searchText"
        ],
        "handle": "connection",
        "key": "ClientsTable_filterClients",
        "kind": "LinkedHandle",
        "name": "filterClients"
      }
    ]
  },
  "params": {
    "cacheID": "e6c93fb2746f8c87356cf18a9c81e53b",
    "id": null,
    "metadata": {},
    "name": "ClientsTableRefetchQuery",
    "operationKind": "query",
    "text": "query ClientsTableRefetchQuery(\n  $count: Int!\n  $cursor: Cursor\n  $q: String\n) {\n  ...ClientsTable_query_XhAmI\n}\n\nfragment ClientsTable_query_XhAmI on Query {\n  filterClients(first: $count, after: $cursor, orderBy: NUMBER_DESC, searchText: $q) {\n    totalCount\n    edges {\n      node {\n        rowId\n        number\n        fullName\n        latestAssignedTherapist {\n          therapist: therapistByTherapistRowId {\n            rowId\n            fullName\n            id\n          }\n          id\n        }\n        treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n          totalCount\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "05dbe8e95696f918557150810e7cdc2e";
}

export default node;
