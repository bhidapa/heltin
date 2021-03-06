/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  "name": "CaseStudyProfessionalsManage_caseStudy",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "caseStudyProfessionals",
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
      "kind": "LinkedField",
      "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudyMentalHealthProfessional",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": "professional",
              "args": null,
              "concreteType": "MentalHealthProfessional",
              "kind": "LinkedField",
              "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "fullName",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "primary",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};
})();
(node as any).hash = '510468170c17c69ad2a52de820ad447b';
export default node;
