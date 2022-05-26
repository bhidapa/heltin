/**
 * @generated SignedSource<<30ee67b4878a6cf109d77a4d665bfa1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type TherapistType = "PSYCHOTHERAPIST" | "PSYCHOLOGIST" | "PSYCHIATRIST" | "NEUROLOGIST" | "PEDIATRIST" | "SOCIAL_WORKER" | "PEDAGOGUE" | "DEFECTOLOGIST" | "PHONETICIAN" | "NEUROPSYCHIATRIST" | "CLINICAL_PSYCHOLOGIST" | "SUPERVISOR" | "LOGOPED" | "OTHER";
import { FragmentRefs } from "relay-runtime";
export type TherapistsTable_query$data = {
  readonly filterTherapists: {
    readonly totalCount: number;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly rowId: string;
        readonly type: TherapistType;
        readonly fullName: string;
        readonly enabled: boolean;
      };
    }>;
  };
  readonly " $fragmentType": "TherapistsTable_query";
};
export type TherapistsTable_query$key = {
  readonly " $data"?: TherapistsTable_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"TherapistsTable_query">;
};

import TherapistsTableRefetchQuery_graphql from './TherapistsTableRefetchQuery.graphql';
const node: ReaderFragment = (function(){
var v0 = [
  "filterTherapists"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": TherapistsTableRefetchQuery_graphql
    }
  },
  "name": "TherapistsTable_query",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": "filterTherapists",
        "args": [
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "q"
          }
        ],
        "concreteType": "TherapistsConnection",
        "kind": "LinkedField",
        "name": "__TherapistsTable_filterTherapists_connection",
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
      "action": "THROW",
      "path": "filterTherapists"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "3ca6a2af6305566de66b9310f0cd1604";
}

export default node;
