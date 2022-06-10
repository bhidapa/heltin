/**
 * @generated SignedSource<<b6ec5205bbf9a8e4f3c927479dea4442>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientManage_viewer$data = {
  readonly canInsertClient: boolean;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canInsertClient",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "34f6722db5f60d0b9fd34dba34772bc5";
}

export default node;
