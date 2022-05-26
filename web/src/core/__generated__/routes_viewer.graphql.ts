/**
 * @generated SignedSource<<248df768ce7fe369a59f2a3da12162b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type routes_viewer$data = {
  readonly isAdmin: boolean;
  readonly isTherapist: boolean;
  readonly " $fragmentType": "routes_viewer";
};
export type routes_viewer$key = {
  readonly " $data"?: routes_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"routes_viewer">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "routes_viewer"
};

if (import.meta.env.DEV) {
  (node as any).hash = "51615793d79f1a5c918e026b14d21fae";
}

export default node;
