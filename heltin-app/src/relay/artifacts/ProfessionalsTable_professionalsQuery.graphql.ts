/* tslint:disable */
/* eslint-disable */

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
  "argumentDefinitions": [
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
  "kind": "Fragment",
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
  "name": "ProfessionalsTable_professionalsQuery",
  "selections": [
    {
      "alias": "filterMentalHealthProfessionals",
      "args": [
        {
          "kind": "Variable",
          "name": "searchText",
          "variableName": "searchText"
        }
      ],
      "concreteType": "MentalHealthProfessionalsConnection",
      "kind": "LinkedField",
      "name": "__ProfessionalsTable_filterMentalHealthProfessionals_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ProfessionalsTableRow_item"
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
    }
  ],
  "type": "Query"
};
(node as any).hash = 'dc0d422f6bbc7850847c55e07b79f6f1';
export default node;
