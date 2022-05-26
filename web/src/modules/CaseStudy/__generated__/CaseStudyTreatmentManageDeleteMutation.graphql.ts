/**
 * @generated SignedSource<<be1dcbb49093b50217dcab1a9df9a63d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyTreatmentInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type CaseStudyTreatmentManageDeleteMutation$variables = {
  input: DeleteCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageDeleteMutation$data = {
  readonly deleteCaseStudyTreatment: {
    readonly treatment: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
    } | null;
  } | null;
};
export type CaseStudyTreatmentManageDeleteMutation = {
  variables: CaseStudyTreatmentManageDeleteMutation$variables;
  response: CaseStudyTreatmentManageDeleteMutation$data;
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
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyTreatment",
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
                "path": "deleteCaseStudyTreatment.treatment.caseStudy"
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
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyTreatment",
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
    "cacheID": "21b09673657d4d6bcbed3f659602fa3d",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageDeleteMutation(\n  $input: DeleteCaseStudyTreatmentInput!\n) {\n  deleteCaseStudyTreatment(input: $input) {\n    treatment: caseStudyTreatment {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        ...CaseStudyTreatmentManage_caseStudy\n        id\n      }\n      ...CaseStudyTreatmentManage_treatment\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "4418472aa48a43721f47bda65f3f184b";
}

export default node;
