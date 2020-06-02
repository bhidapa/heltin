/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManage_caseStudy = {
    readonly rowId: string;
    readonly title: string;
    readonly client: {
        readonly rowId: string;
        readonly fullName: string;
    } | null;
    readonly " $refType": "CaseStudyTreatmentManage_caseStudy";
};
export type CaseStudyTreatmentManage_caseStudy$data = CaseStudyTreatmentManage_caseStudy;
export type CaseStudyTreatmentManage_caseStudy$key = {
    readonly " $data"?: CaseStudyTreatmentManage_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
};



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
  "metadata": null,
  "name": "CaseStudyTreatmentManage_caseStudy",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "client",
      "args": null,
      "concreteType": "Client",
      "kind": "LinkedField",
      "name": "clientByClientRowId",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudy"
};
})();
(node as any).hash = 'afc8a2fc81adb4fccea4fafd54c8244c';
export default node;
