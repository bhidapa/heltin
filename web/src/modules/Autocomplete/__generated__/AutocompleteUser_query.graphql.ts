/**
 * @generated SignedSource<<923e6df7c497935d016e07b0b2864d26>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteUser_query$data = {
  readonly filterUsers: {
    readonly nodes: ReadonlyArray<{
      readonly email: string;
      readonly id: string;
      readonly rowId: string;
    }>;
  };
  readonly " $fragmentType": "AutocompleteUser_query";
};
export type AutocompleteUser_query$key = {
  readonly " $data"?: AutocompleteUser_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteUser_query">;
};

import AutocompleteUserRefetchQuery_graphql from './AutocompleteUserRefetchQuery.graphql';

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
      "operation": AutocompleteUserRefetchQuery_graphql
    }
  },
  "name": "AutocompleteUser_query",
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
        "concreteType": "UsersConnection",
        "kind": "LinkedField",
        "name": "filterUsers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
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
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "filterUsers"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "201f8f6aff8eeb84b0e74ae5461baad8";
}

export default node;
