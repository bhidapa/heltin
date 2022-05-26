/**
 * @generated SignedSource<<c1d3db323ca2dad5295a9308a736258c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistManage_query$data = {
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "8db98c32eef0a8fdd07bc97099d2af70";
}

export default node;
