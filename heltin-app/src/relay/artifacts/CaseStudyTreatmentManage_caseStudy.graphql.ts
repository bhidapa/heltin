/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManage_caseStudy = {
    readonly rowId: string;
    readonly description: string;
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
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CaseStudyTreatmentManage_caseStudy",
  "type": "CaseStudy",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "client",
      "name": "clientByClientRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "Client",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fullName",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'a86198095f36e1e9c68a5148e809e6b9';
export default node;
