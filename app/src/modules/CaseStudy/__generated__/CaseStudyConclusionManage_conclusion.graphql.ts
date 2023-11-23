/**
 * @generated SignedSource<<ac03755500046ea54fc48a222028f596>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionManage_conclusion$data = {
  readonly concludedAt: string;
  readonly description: string;
  readonly privateDescription: string | null | undefined;
  readonly rowId: string;
  readonly type: CaseStudyConclusionType;
  readonly " $fragmentType": "CaseStudyConclusionManage_conclusion";
};
export type CaseStudyConclusionManage_conclusion$key = {
  readonly " $data"?: CaseStudyConclusionManage_conclusion$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyConclusionManage_conclusion",
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
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "privateDescription",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "concludedAt",
      "storageKey": null
    }
  ],
  "type": "CaseStudyConclusion",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "d7a6534d157a20bcf0a3d68a5eecad4e";
}

export default node;
