/**
 * @generated SignedSource<<0a491c9bad72e0cb830ffb498511a26b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientCaseStudies_forms$data = ReadonlyArray<{
  readonly rowId: string;
  readonly name: string;
  readonly " $fragmentType": "ClientCaseStudies_forms";
}>;
export type ClientCaseStudies_forms$key = ReadonlyArray<{
  readonly " $data"?: ClientCaseStudies_forms$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_forms">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ClientCaseStudies_forms",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Form",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "4578f79a1a2aaf91f0589f911f4dac66";
}

export default node;
