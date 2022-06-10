/**
 * @generated SignedSource<<f8beda97dfc684e094aeb6b42467b0c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistManage_query$data = {
  readonly canViewerInsertTherapist: boolean;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canViewerInsertTherapist",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "be2453516e94ad12ff86a6193b24e544";
}

export default node;
