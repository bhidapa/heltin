/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ClientsTableRow_item$ref } from "./ClientsTableRow_item.graphql";
declare const _ClientsTable_clientsQuery$ref: unique symbol;
export type ClientsTable_clientsQuery$ref = typeof _ClientsTable_clientsQuery$ref;
export type ClientsTable_clientsQuery = {
    readonly filterClients: {
        readonly totalCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly rowId: string;
                readonly " $fragmentRefs": ClientsTableRow_item$ref;
            };
        }>;
    };
    readonly " $refType": ClientsTable_clientsQuery$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ClientsTable_clientsQuery",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "filterClients"
        ]
      }
    ]
  },
  "argumentDefinitions": [
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
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "filterClients",
      "name": "__ClientsTable_filterClients_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "searchText",
          "variableName": "searchText"
        }
      ],
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ClientsTableRow_item",
                  "args": null
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
    }
  ]
};
(node as any).hash = '485628a8fe6049cc905873f2ed2323f8';
export default node;
