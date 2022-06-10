/**
 * @generated SignedSource<<ba104071071d77c86c0c3703e0157e42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistManage_query$data = {
  readonly viewer: {
    readonly canInsertTherapist: boolean;
  };
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteUser_query">;
  readonly " $fragmentType": "TherapistManage_query";
};
export type TherapistManage_query$key = {
  readonly " $data"?: TherapistManage_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TherapistManage_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AutocompleteUser_query"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canInsertTherapist",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "viewer"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "ce1bd9d5f4d5f5adce5b90161c316cc4";
}

export default node;
