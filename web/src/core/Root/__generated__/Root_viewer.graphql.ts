/**
 * @generated SignedSource<<eee62716d78492b48743ad4846efd0fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Root_viewer$data = {
  readonly id: string;
  readonly fullName: string;
  readonly firstName: string;
  readonly email: string;
  readonly isAdmin: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"routes_viewer">;
  readonly " $fragmentType": "Root_viewer";
};
export type Root_viewer$key = {
  readonly " $data"?: Root_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"Root_viewer">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAdmin",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Root_viewer",
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
      "name": "fullName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "InlineDataFragmentSpread",
      "name": "routes_viewer",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isTherapist",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "87c42ff274259537ff5fef751db2d6b4";
}

export default node;
