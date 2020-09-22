/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsTableRefetchQueryVariables = {
    count: number;
    cursor?: unknown | null;
    searchText?: string | null;
};
export type ProfessionalsTableRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalsTable_professionalsQuery">;
};
export type ProfessionalsTableRefetchQuery = {
    readonly response: ProfessionalsTableRefetchQueryResponse;
    readonly variables: ProfessionalsTableRefetchQueryVariables;
};



/*
query ProfessionalsTableRefetchQuery(
  $count: Int!
  $cursor: Cursor
  $searchText: String
) {
  ...ProfessionalsTable_professionalsQuery_4CrFSY
}

fragment ProfessionalsTableRow_item on MentalHealthProfessional {
  rowId
  type
  title
  firstName
  lastName
}

fragment ProfessionalsTable_professionalsQuery_4CrFSY on Query {
  filterMentalHealthProfessionals(first: $count, after: $cursor, searchText: $searchText) {
    totalCount
    edges {
      node {
        rowId
        ...ProfessionalsTableRow_item
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
    "name": "searchText"
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfessionalsTableRefetchQuery",
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
        "name": "ProfessionalsTable_professionalsQuery"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfessionalsTableRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MentalHealthProfessionalsConnection",
        "kind": "LinkedField",
        "name": "filterMentalHealthProfessionals",
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
            "concreteType": "MentalHealthProfessionalsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MentalHealthProfessional",
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
                    "name": "title",
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
        "key": "ProfessionalsTable_filterMentalHealthProfessionals",
        "kind": "LinkedHandle",
        "name": "filterMentalHealthProfessionals"
      }
    ]
  },
  "params": {
    "cacheID": "ef1f9544da9580ed5c7010d468347055",
    "id": null,
    "metadata": {},
    "name": "ProfessionalsTableRefetchQuery",
    "operationKind": "query",
    "text": "query ProfessionalsTableRefetchQuery(\n  $count: Int!\n  $cursor: Cursor\n  $searchText: String\n) {\n  ...ProfessionalsTable_professionalsQuery_4CrFSY\n}\n\nfragment ProfessionalsTableRow_item on MentalHealthProfessional {\n  rowId\n  type\n  title\n  firstName\n  lastName\n}\n\nfragment ProfessionalsTable_professionalsQuery_4CrFSY on Query {\n  filterMentalHealthProfessionals(first: $count, after: $cursor, searchText: $searchText) {\n    totalCount\n    edges {\n      node {\n        rowId\n        ...ProfessionalsTableRow_item\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8a3e6dc603b0a8dbe2d0dca0ff440599';
export default node;
