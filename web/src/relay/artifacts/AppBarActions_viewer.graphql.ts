/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBarActions_viewer = {
    readonly id: string;
    readonly email: string;
    readonly " $refType": "AppBarActions_viewer";
};
export type AppBarActions_viewer$data = AppBarActions_viewer;
export type AppBarActions_viewer$key = {
    readonly " $data"?: AppBarActions_viewer$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBarActions_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBarActions_viewer",
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '6388b3fe95a1c83261755b26c1dc6583';
export default node;
