/**
 * @generated SignedSource<<cbc5174212e50cec8ab0bfe4bbb042a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientAssignedTherapistsManage_query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteTherapist_query">;
  readonly " $fragmentType": "ClientAssignedTherapistsManage_query";
};
export type ClientAssignedTherapistsManage_query$key = {
  readonly " $data"?: ClientAssignedTherapistsManage_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientAssignedTherapistsManage_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AutocompleteTherapist_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "b012c408263dacf1d489da83816fc80a";
}

export default node;
