/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { ClientsTable_clientsQuery$ref } from "./ClientsTable_clientsQuery.graphql";
export type ClientsTablePaginationQueryVariables = {
    count: number;
    cursor?: unknown | null;
    searchText?: string | null;
};
export type ClientsTablePaginationQueryResponse = {
    readonly " $fragmentRefs": ClientsTable_clientsQuery$ref;
};
export type ClientsTablePaginationQuery = {
    readonly response: ClientsTablePaginationQueryResponse;
    readonly variables: ClientsTablePaginationQueryVariables;
};



/*
query ClientsTablePaginationQuery(
  $count: Int!
  $cursor: Cursor
  $searchText: String
) {
  ...ClientsTable_clientsQuery_4CrFSY
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

fragment ClientsTableRow_item on Client {
  number
  firstName
  lastName
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
    "name": "ClientsTablePaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ClientsTable_clientsQuery",
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
    "name": "ClientsTablePaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filterClients",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ClientsConnection",
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
            "concreteType": "ClientsEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
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
                    "name": "number",
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
        "name": "filterClients",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ClientsTable_filterClients",
        "filters": [
          "searchText"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientsTablePaginationQuery",
    "id": null,
    "text": "query ClientsTablePaginationQuery(\n  $count: Int!\n  $cursor: Cursor\n  $searchText: String\n) {\n  ...ClientsTable_clientsQuery_4CrFSY\n}\n\nfragment ClientsTable_clientsQuery_4CrFSY on Query {\n  filterClients(first: $count, after: $cursor, searchText: $searchText) {\n    totalCount\n    edges {\n      node {\n        rowId\n        ...ClientsTableRow_item\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ClientsTableRow_item on Client {\n  number\n  firstName\n  lastName\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd15b72639a90a3561a91ff0169d7bab7';
export default node;
