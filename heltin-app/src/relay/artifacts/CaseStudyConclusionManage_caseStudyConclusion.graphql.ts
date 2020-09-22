/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CaseStudyConclusionManage_caseStudyConclusion = {
    readonly rowId: string;
    readonly type: CaseStudyConclusionType;
    readonly concludedAt: string;
    readonly description: string;
    readonly " $refType": "CaseStudyConclusionManage_caseStudyConclusion";
};
export type CaseStudyConclusionManage_caseStudyConclusion$data = CaseStudyConclusionManage_caseStudyConclusion;
export type CaseStudyConclusionManage_caseStudyConclusion$key = {
    readonly " $data"?: CaseStudyConclusionManage_caseStudyConclusion$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudyConclusion">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyConclusionManage_caseStudyConclusion",
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
      "name": "concludedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "CaseStudyConclusion",
  "abstractKey": null
};
(node as any).hash = '649cd3b916073591050767f944794beb';
export default node;
