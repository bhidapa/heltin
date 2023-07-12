/**
 * @generated SignedSource<<9076061e1704ebc36938cc18d0a35e48>>
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
            "name": "disabled",
            "value": false
          },
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
  (node as any).hash = "64608a322ef42f5e375aaf6967079681";
}

export default node;
