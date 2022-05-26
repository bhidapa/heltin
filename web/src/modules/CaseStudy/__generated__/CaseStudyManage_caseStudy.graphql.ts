/**
 * @generated SignedSource<<3b9bc27f95dc06776d4ece60e3fc835d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CaseStudyConclusionType = "TREATMENT_COMPLETION" | "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyManage_caseStudy$data = {
  readonly rowId: string;
  readonly title: string;
  readonly conclusion: {
    readonly type: CaseStudyConclusionType;
  } | null;
  readonly " $fragmentType": "CaseStudyManage_caseStudy";
};
export type CaseStudyManage_caseStudy$key = {
  readonly " $data"?: CaseStudyManage_caseStudy$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_caseStudy">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyManage_caseStudy",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "conclusion",
      "args": null,
      "concreteType": "CaseStudyConclusion",
      "kind": "LinkedField",
      "name": "caseStudyConclusionByCaseStudyRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "b3270ac8f9e708939107c0eb3712fcde";
}

export default node;
