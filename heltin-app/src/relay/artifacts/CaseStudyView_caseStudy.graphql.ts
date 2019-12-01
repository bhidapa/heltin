/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyView_caseStudy = {
    readonly rowId: string;
    readonly description: string;
    readonly caseStudyTreatments: {
        readonly nodes: ReadonlyArray<{
            readonly rowId: string;
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentRow_item">;
        }>;
    };
    readonly " $refType": "CaseStudyView_caseStudy";
};
export type CaseStudyView_caseStudy$data = CaseStudyView_caseStudy;
export type CaseStudyView_caseStudy$key = {
    readonly " $data"?: CaseStudyView_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyView_caseStudy">;
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
  "name": "CaseStudyView_caseStudy",
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
      "alias": "caseStudyTreatments",
      "name": "caseStudyTreatmentsByCaseStudyRowId",
      "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "STARTED_AT_DESC"
          ]
        }
      ],
      "concreteType": "CaseStudyTreatmentsConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "nodes",
          "storageKey": null,
          "args": null,
          "concreteType": "CaseStudyTreatment",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "FragmentSpread",
              "name": "CaseStudyTreatmentRow_item",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'f6d7629432dae52c51c2b6623272e612';
export default node;
