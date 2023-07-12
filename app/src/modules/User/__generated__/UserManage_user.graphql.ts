/**
 * @generated SignedSource<<1d3d43f909aee1ae18002f866ec863e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserManage_user$data = {
  readonly canViewerDelete: boolean;
  readonly canViewerUpdate: boolean;
  readonly email: string;
  readonly enabled: boolean;
  readonly isAdmin: boolean;
  readonly rowId: string;
  readonly updatedAt: string;
  readonly " $fragmentType": "UserManage_user";
};
export type UserManage_user$key = {
  readonly " $data"?: UserManage_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserManage_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserManage_user",
  "selections": [
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
      "name": "enabled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
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
      "name": "canViewerUpdate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canViewerDelete",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "f3b372b7976deeadb3d5254ba96f04d5";
}

export default node;
