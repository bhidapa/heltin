/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
        readonly protected: boolean;
    };
    readonly " $refType": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles";
}>;
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$data = CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles;
export type CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$key = ReadonlyArray<{
    readonly " $data"?: CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": "file",
      "args": null,
      "concreteType": "File",
      "kind": "LinkedField",
      "name": "fileByFileRowId",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "protected",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudyTreatmentFile",
  "abstractKey": null
};
})();
(node as any).hash = '2cb99b90265174a0550bc8be9f42073a';
export default node;
