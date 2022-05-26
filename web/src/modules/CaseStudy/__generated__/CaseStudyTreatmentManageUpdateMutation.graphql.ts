/**
 * @generated SignedSource<<1a2ad828a7f374838caac66741838c0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateCaseStudyTreatmentInput = {
  clientMutationId?: string | null;
  rowId: string;
  external: boolean;
  startedAt: string;
  endedAt: string;
  title: string;
  description?: string | null;
  privateDescription?: string | null;
  score?: number | null;
};
export type CaseStudyTreatmentManageUpdateMutation$variables = {
  input: UpdateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageUpdateMutation$data = {
  readonly updateCaseStudyTreatment: {
    readonly treatment: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
    } | null;
  } | null;
};
export type CaseStudyTreatmentManageUpdateMutation = {
  variables: CaseStudyTreatmentManageUpdateMutation$variables;
  response: CaseStudyTreatmentManageUpdateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "RequiredField",
                "field": {
                  "alias": "caseStudy",
                  "args": null,
                  "concreteType": "CaseStudy",
                  "kind": "LinkedField",
                  "name": "caseStudyByCaseStudyRowId",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyTreatmentManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "updateCaseStudyTreatment.treatment.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_treatment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "caseStudy",
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": "client",
                    "args": null,
                    "concreteType": "Client",
                    "kind": "LinkedField",
                    "name": "clientByClientRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullName",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "external",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "privateDescription",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "score",
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0098bb067efb18cf3b0754360d8461f3",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageUpdateMutation(\n  $input: UpdateCaseStudyTreatmentInput!\n) {\n  updateCaseStudyTreatment(input: $input) {\n    treatment: caseStudyTreatment {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        ...CaseStudyTreatmentManage_caseStudy\n        id\n      }\n      ...CaseStudyTreatmentManage_treatment\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "d40cd38e4df6467ec1fb5a55431b98c5";
}

export default node;
