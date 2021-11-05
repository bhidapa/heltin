/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBar_viewer = {
    readonly isAdmin: boolean;
    readonly " $fragmentRefs": FragmentRefs<"AppBarActions_viewer">;
    readonly " $refType": "AppBar_viewer";
};
export type AppBar_viewer$data = AppBar_viewer;
export type AppBar_viewer$key = {
    readonly " $data"?: AppBar_viewer$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBar_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBar_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAdmin",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBarActions_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '33e0da9c3f2e4d365b0f7a5438a1eb1e';
export default node;
