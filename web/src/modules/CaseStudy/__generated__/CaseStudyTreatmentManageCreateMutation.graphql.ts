/**
 * @generated SignedSource<<6a7b42447118c29c492a03967a4556c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyTreatmentInput = {
  clientMutationId?: string | null;
  caseStudyRowId: string;
  external: boolean;
  startedAt: string;
  endedAt: string;
  title: string;
  description?: string | null;
  privateDescription?: string | null;
  score?: number | null;
};
export type CaseStudyTreatmentManageCreateMutation$variables = {
  input: CreateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageCreateMutation$data = {
  readonly createCaseStudyTreatment: {
    readonly treatment: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly rowId: string;
        readonly clientRowId: string | null;
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
    } | null;
  } | null;
};
export type CaseStudyTreatmentManageCreateMutation = {
  variables: CaseStudyTreatmentManageCreateMutation$variables;
  response: CaseStudyTreatmentManageCreateMutation$data;
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
  "name": "clientRowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
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
    "name": "CaseStudyTreatmentManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
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
                    (v2/*: any*/),
                    (v3/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyTreatmentManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "createCaseStudyTreatment.treatment.caseStudy"
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
    "name": "CaseStudyTreatmentManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
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
                  (v4/*: any*/),
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
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
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
              (v4/*: any*/),
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
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "29529f3664dfed71f5b33ab3c811c86e",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageCreateMutation(\n  $input: CreateCaseStudyTreatmentInput!\n) {\n  createCaseStudyTreatment(input: $input) {\n    treatment: caseStudyTreatment {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        rowId\n        clientRowId\n        ...CaseStudyTreatmentManage_caseStudy\n        id\n      }\n      ...CaseStudyTreatmentManage_treatment\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "d1d9649a2c42fca24256fc8e9feca92d";
}

export default node;
