/* tslint:disable */
/* @relayHash 8f8f37694e5efd7cf16617ef998a42eb */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsOverviewPageQueryVariables = {
    count: number;
    cursor?: unknown | null;
    searchText?: string | null;
};
export type ProfessionalsOverviewPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalsTable_professionalsQuery">;
};
export type ProfessionalsOverviewPageQuery = {
    readonly response: ProfessionalsOverviewPageQueryResponse;
    readonly variables: ProfessionalsOverviewPageQueryVariables;
};



/*
query ProfessionalsOverviewPageQuery(
  $count: Int!
  $cursor: Cursor
  $searchText: String
) {
  ...ProfessionalsTable_professionalsQuery_4CrFSY
}

fragment ProfessionalsTableRow_item on MentalHealthProfessional {
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
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "searchText",
    "type": "String",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfessionalsOverviewPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProfessionalsTable_professionalsQuery",
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
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfessionalsOverviewPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filterMentalHealthProfessionals",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "MentalHealthProfessionalsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MentalHealthProfessionalsEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "MentalHealthProfessional",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "rowId",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "firstName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lastName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "filterMentalHealthProfessionals",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ProfessionalsTable_filterMentalHealthProfessionals",
        "filters": [
          "searchText"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfessionalsOverviewPageQuery",
    "id": null,
    "text": "query ProfessionalsOverviewPageQuery(\n  $count: Int!\n  $cursor: Cursor\n  $searchText: String\n) {\n  ...ProfessionalsTable_professionalsQuery_4CrFSY\n}\n\nfragment ProfessionalsTableRow_item on MentalHealthProfessional {\n  type\n  title\n  firstName\n  lastName\n}\n\nfragment ProfessionalsTable_professionalsQuery_4CrFSY on Query {\n  filterMentalHealthProfessionals(first: $count, after: $cursor, searchText: $searchText) {\n    totalCount\n    edges {\n      node {\n        rowId\n        ...ProfessionalsTableRow_item\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bede0c9a0665c14acac7910855ba6da5';
export default node;
