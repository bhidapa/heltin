/**
 * @generated SignedSource<<835dbbe45112edeae6e43a2c84d9f0b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyAssignedTherapistsManage_query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteTherapist_query">;
  readonly " $fragmentType": "CaseStudyAssignedTherapistsManage_query";
};
export type CaseStudyAssignedTherapistsManage_query$key = {
  readonly " $data"?: CaseStudyAssignedTherapistsManage_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyAssignedTherapistsManage_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AutocompleteTherapist_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "4b10ded0f5b602cd60a5629f2c1e95cb";
}

export default node;
