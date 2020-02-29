/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
    };
    readonly " $refType": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles";
}>;
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$data = CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles;
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$key = ReadonlyArray<{
    readonly " $data"?: CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles",
  "type": "CaseStudyTreatmentFile",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": "file",
      "name": "fileByFileRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "File",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'b4618c17e520b8590d81b3cf17e09e7a';
export default node;
