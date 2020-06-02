/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyManage_caseStudy = {
    readonly rowId: string;
    readonly title: string;
    readonly " $refType": "CaseStudyManage_caseStudy";
};
export type CaseStudyManage_caseStudy$data = CaseStudyManage_caseStudy;
export type CaseStudyManage_caseStudy$key = {
    readonly " $data"?: CaseStudyManage_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyManage_caseStudy">;
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
    }
  ],
  "type": "CaseStudy"
};
(node as any).hash = '91171833afeda8e58ee33fbe9dfee9c1';
export default node;
