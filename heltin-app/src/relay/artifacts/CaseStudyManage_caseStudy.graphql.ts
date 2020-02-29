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
  "kind": "Fragment",
  "name": "CaseStudyManage_caseStudy",
  "type": "CaseStudy",
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
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '91171833afeda8e58ee33fbe9dfee9c1';
export default node;
