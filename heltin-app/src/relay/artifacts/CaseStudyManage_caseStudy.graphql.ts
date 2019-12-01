/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyManage_caseStudy = {
    readonly rowId: string;
    readonly description: string;
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '63e84acf1eb0c445502bf8372d1950fc';
export default node;
