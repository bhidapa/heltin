/**
 * @generated SignedSource<<673fc02482a16ae4034ec16b0fe01ac3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyManage_client$data = {
  readonly fullName: string;
  readonly rowId: string;
  readonly " $fragmentType": "CaseStudyManage_client";
};
export type CaseStudyManage_client$key = {
  readonly " $data"?: CaseStudyManage_client$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_client">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyManage_client",
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
      "name": "fullName",
      "storageKey": null
    }
  ],
  "type": "Client",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "7d8ef04fa5a1019b39bc954fbf933917";
}

export default node;
