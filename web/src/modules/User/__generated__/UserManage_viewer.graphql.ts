/**
 * @generated SignedSource<<5a117853931d2750af294c637bfeee6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserManage_viewer$data = {
  readonly canInsertUser: boolean;
  readonly " $fragmentType": "UserManage_viewer";
};
export type UserManage_viewer$key = {
  readonly " $data"?: UserManage_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserManage_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserManage_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canInsertUser",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "98e60880f445b4b0942c90119aedf8b0";
}

export default node;
