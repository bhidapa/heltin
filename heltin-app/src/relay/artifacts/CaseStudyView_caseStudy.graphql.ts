/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CaseStudyView_caseStudy = {
    readonly rowId: string;
    readonly title: string;
    readonly caseStudyTreatments: {
        readonly nodes: ReadonlyArray<{
            readonly rowId: string;
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentRow_item">;
        }>;
    };
    readonly caseStudyConclusions: {
        readonly nodes: ReadonlyArray<{
            readonly rowId: string;
            readonly type: CaseStudyConclusionType;
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
      "name": "title",
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
    },
    {
      "kind": "LinkedField",
      "alias": "caseStudyConclusions",
      "name": "caseStudyConclusionsByCaseStudyRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "CaseStudyConclusionsConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "nodes",
          "storageKey": null,
          "args": null,
          "concreteType": "CaseStudyConclusion",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'c48b96a278eec19e7404693027fa9a2b';
export default node;
