/**
 * @generated SignedSource<<40b69401a83fed7aa22077ebcca58f99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientManage_viewer$data = {
  readonly isAdmin: boolean;
  readonly isTherapist: boolean;
  readonly " $fragmentType": "ClientManage_viewer";
};
export type ClientManage_viewer$key = {
  readonly " $data"?: ClientManage_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientManage_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientManage_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAdmin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isTherapist",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "611815effd9b11dc9d2c3d60ca78fb0f";
}

export default node;
