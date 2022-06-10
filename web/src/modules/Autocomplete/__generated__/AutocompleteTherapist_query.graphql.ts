/**
 * @generated SignedSource<<7f406ca1d1a09ca62f69642795351071>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteTherapist_query$data = {
  readonly filterTherapists: {
    readonly nodes: ReadonlyArray<{
      readonly fullName: string;
      readonly id: string;
      readonly rowId: string;
    }>;
  };
  readonly " $fragmentType": "AutocompleteTherapist_query";
};
export type AutocompleteTherapist_query$key = {
  readonly " $data"?: AutocompleteTherapist_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteTherapist_query">;
};

import AutocompleteTherapistRefetchQuery_graphql from './AutocompleteTherapistRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "q"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": AutocompleteTherapistRefetchQuery_graphql
    }
  },
  "name": "AutocompleteTherapist_query",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "q"
          }
        ],
        "concreteType": "TherapistsConnection",
        "kind": "LinkedField",
        "name": "filterTherapists",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Therapist",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
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
                "name": "rowId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
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

if (import.meta.env.DEV) {
  (node as any).hash = "f388a2b850bb826664b2c4b36b183ae0";
}

export default node;
