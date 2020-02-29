/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CaseStudyProfessionalsManage_caseStudy = {
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
    readonly " $refType": "CaseStudyProfessionalsManage_caseStudy";
};
export type CaseStudyProfessionalsManage_caseStudy$data = CaseStudyProfessionalsManage_caseStudy;
export type CaseStudyProfessionalsManage_caseStudy$key = {
    readonly " $data"?: CaseStudyProfessionalsManage_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyProfessionalsManage_caseStudy">;
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
  "name": "CaseStudyProfessionalsManage_caseStudy",
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
(node as any).hash = '510468170c17c69ad2a52de820ad447b';
export default node;
