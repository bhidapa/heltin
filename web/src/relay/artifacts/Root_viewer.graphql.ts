/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Root_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"AppBarActions_viewer">;
    readonly " $refType": "Root_viewer";
};
export type Root_viewer$data = Root_viewer;
export type Root_viewer$key = {
    readonly " $data"?: Root_viewer$data;
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
      "name": "AppBarActions_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'bce8fb822a9a167daf0a3e361c56c9b4';
export default node;
