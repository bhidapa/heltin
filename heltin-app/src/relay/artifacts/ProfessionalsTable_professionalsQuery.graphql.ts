/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsTable_professionalsQuery = {
    readonly filterMentalHealthProfessionals: {
        readonly totalCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly rowId: string;
                readonly " $fragmentRefs": FragmentRefs<"ProfessionalsTableRow_item">;
            };
        }>;
    };
    readonly " $refType": "ProfessionalsTable_professionalsQuery";
};
export type ProfessionalsTable_professionalsQuery$data = ProfessionalsTable_professionalsQuery;
export type ProfessionalsTable_professionalsQuery$key = {
    readonly " $data"?: ProfessionalsTable_professionalsQuery$data;
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalsTable_professionalsQuery">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProfessionalsTable_professionalsQuery",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "filterMentalHealthProfessionals"
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
      "alias": "filterMentalHealthProfessionals",
      "name": "__ProfessionalsTable_filterMentalHealthProfessionals_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "searchText",
          "variableName": "searchText"
        }
      ],
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ProfessionalsTableRow_item",
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
(node as any).hash = 'dc0d422f6bbc7850847c55e07b79f6f1';
export default node;
