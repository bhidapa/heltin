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
  "name": "CaseStudyView_caseStudy",
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
      "alias": "caseStudyTreatments",
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
      "kind": "LinkedField",
      "name": "caseStudyTreatmentsByCaseStudyRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudyTreatment",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CaseStudyTreatmentRow_item"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])"
    },
    {
      "alias": "caseStudyConclusions",
      "args": null,
      "concreteType": "CaseStudyConclusionsConnection",
      "kind": "LinkedField",
      "name": "caseStudyConclusionsByCaseStudyRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudyConclusion",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudy"
};
})();
(node as any).hash = 'c48b96a278eec19e7404693027fa9a2b';
export default node;
