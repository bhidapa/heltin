/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CaseStudyEdit_caseStudy = {
    readonly rowId: string;
    readonly description: string;
    readonly client: {
        readonly fullName: string;
    } | null;
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
    readonly " $refType": "CaseStudyEdit_caseStudy";
};
export type CaseStudyEdit_caseStudy$data = CaseStudyEdit_caseStudy;
export type CaseStudyEdit_caseStudy$key = {
    readonly " $data"?: CaseStudyEdit_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyEdit_caseStudy">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CaseStudyEdit_caseStudy",
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
        (v1/*: any*/)
      ]
    },
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
                (v1/*: any*/)
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
(node as any).hash = '57b77cf4a8ce11c35af199dc303cbec0';
export default node;
