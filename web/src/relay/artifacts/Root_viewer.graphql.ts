/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Root_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"AppBar_viewer">;
    readonly " $refType": "Root_viewer";
};
export type Root_viewer$data = Root_viewer;
export type Root_viewer$key = {
    readonly " $data"?: Root_viewer$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Root_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Root_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBar_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'ed0e26c0fd37af616497bde9b92a975e';
export default node;
