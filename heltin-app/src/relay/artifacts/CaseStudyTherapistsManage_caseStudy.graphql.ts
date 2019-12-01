/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CaseStudyTherapistsManage_caseStudy = {
    readonly rowId: string;
    readonly caseStudyProfessionals: {
        readonly nodes: ReadonlyArray<{
            readonly rowId: string;
            readonly professional: {
                readonly rowId: string;
                readonly type: MentalHealthProfessionalType;
                readonly fullName: string;
            };
            readonly primary: boolean;
        }>;
    };
    readonly " $refType": "CaseStudyTherapistsManage_caseStudy";
};
export type CaseStudyTherapistsManage_caseStudy$data = CaseStudyTherapistsManage_caseStudy;
export type CaseStudyTherapistsManage_caseStudy$key = {
    readonly " $data"?: CaseStudyTherapistsManage_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTherapistsManage_caseStudy">;
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
  "name": "CaseStudyTherapistsManage_caseStudy",
  "type": "CaseStudy",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": "caseStudyProfessionals",
      "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
      "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "CREATED_AT_ASC"
          ]
        }
      ],
      "concreteType": "CaseStudyMentalHealthProfessionalsConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "nodes",
          "storageKey": null,
          "args": null,
          "concreteType": "CaseStudyMentalHealthProfessional",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "LinkedField",
              "alias": "professional",
              "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
              "storageKey": null,
              "args": null,
              "concreteType": "MentalHealthProfessional",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "type",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "fullName",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "primary",
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
(node as any).hash = '7fdc42c1caa6725233167659dc291bcf';
export default node;
