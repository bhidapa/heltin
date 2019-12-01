/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyView_caseStudy = {
    readonly rowId: string;
    readonly description: string;
    readonly " $refType": "CaseStudyView_caseStudy";
};
export type CaseStudyView_caseStudy$data = CaseStudyView_caseStudy;
export type CaseStudyView_caseStudy$key = {
    readonly " $data"?: CaseStudyView_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyView_caseStudy">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CaseStudyView_caseStudy",
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
(node as any).hash = 'e6e554f12786e563d3d0b182662212d7';
export default node;
