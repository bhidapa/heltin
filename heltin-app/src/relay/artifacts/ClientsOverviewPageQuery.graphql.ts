/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsOverviewPageQueryVariables = {
    count: number;
    cursor?: unknown | null;
    searchText?: string | null;
};
export type ClientsOverviewPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ClientsTable_clientsQuery">;
};
export type ClientsOverviewPageQuery = {
    readonly response: ClientsOverviewPageQueryResponse;
    readonly variables: ClientsOverviewPageQueryVariables;
};



/*
query ClientsOverviewPageQuery(
  $count: Int!
  $cursor: Cursor
  $searchText: String
) {
  ...ClientsTable_clientsQuery_4CrFSY
}

fragment ClientsTableRow_item on Client {
  rowId
  number
  firstName
  lastName
  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {
    totalCount
  }
}

fragment ClientsTable_clientsQuery_4CrFSY on Query {
  filterClients(first: $count, after: $cursor, searchText: $searchText) {
    totalCount
    edges {
      node {
        rowId
        ...ClientsTableRow_item
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchText",
    "type": "String"
  }
],
v1 = {
  "kind": "Variable",
  "name": "searchText",
  "variableName": "searchText"
},
v2 = [
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
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsOverviewPageQuery",
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
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ClientsTable_clientsQuery"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsOverviewPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ClientsConnection",
        "kind": "LinkedField",
        "name": "filterClients",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
                    "name": "number",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastName",
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
                      (v3/*: any*/)
                    ],
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
        "args": (v2/*: any*/),
        "filters": [
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
    "id": null,
    "metadata": {},
    "name": "ClientsOverviewPageQuery",
    "operationKind": "query",
    "text": "query ClientsOverviewPageQuery(\n  $count: Int!\n  $cursor: Cursor\n  $searchText: String\n) {\n  ...ClientsTable_clientsQuery_4CrFSY\n}\n\nfragment ClientsTableRow_item on Client {\n  rowId\n  number\n  firstName\n  lastName\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n\nfragment ClientsTable_clientsQuery_4CrFSY on Query {\n  filterClients(first: $count, after: $cursor, searchText: $searchText) {\n    totalCount\n    edges {\n      node {\n        rowId\n        ...ClientsTableRow_item\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1236e5829f74077348c7231abd7044b6';
export default node;
