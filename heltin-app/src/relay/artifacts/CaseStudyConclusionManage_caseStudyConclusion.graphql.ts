/* tslint:disable */
/* eslint-disable */

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
  "kind": "Fragment",
  "name": "CaseStudyConclusionManage_caseStudyConclusion",
  "type": "CaseStudyConclusion",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rowId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "concludedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '649cd3b916073591050767f944794beb';
export default node;
