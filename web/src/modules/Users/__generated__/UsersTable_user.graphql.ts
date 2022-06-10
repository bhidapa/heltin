/**
 * @generated SignedSource<<02905afaf9ee1749c289279ab0443257>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersTable_user$data = {
  readonly email: string;
  readonly enabled: boolean;
  readonly isAdmin: boolean;
  readonly rowId: string;
  readonly " $fragmentType": "UsersTable_user";
};
export type UsersTable_user$key = {
  readonly " $data"?: UsersTable_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsersTable_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UsersTable_user",
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
      "name": "isAdmin",
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
      "name": "enabled",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "ca74221a60e22e55594b447a8b579cd1";
}

export default node;
