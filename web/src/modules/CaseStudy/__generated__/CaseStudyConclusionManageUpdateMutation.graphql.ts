/**
 * @generated SignedSource<<915c7c58c4f0d4889c421882d464e15d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "TREATMENT_COMPLETION" | "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL";
export type UpdateCaseStudyConclusionInput = {
  clientMutationId?: string | null;
  rowId: string;
  type: CaseStudyConclusionType;
  concludedAt: string;
  description: string;
  privateDescription?: string | null;
};
export type CaseStudyConclusionManageUpdateMutation$variables = {
  input: UpdateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageUpdateMutation$data = {
  readonly updateCaseStudyConclusion: {
    readonly conclusion: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly concluded: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
    } | null;
  } | null;
};
export type CaseStudyConclusionManageUpdateMutation = {
  variables: CaseStudyConclusionManageUpdateMutation$variables;
  response: CaseStudyConclusionManageUpdateMutation$data;
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
  "name": "concluded",
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
    "name": "CaseStudyConclusionManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyConclusion",
        "plural": false,
        "selections": [
          {
            "alias": "conclusion",
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
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
                    (v3/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyConclusionManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "updateCaseStudyConclusion.conclusion.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyConclusionManage_conclusion"
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
    "name": "CaseStudyConclusionManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyConclusion",
        "plural": false,
        "selections": [
          {
            "alias": "conclusion",
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
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
                "name": "type",
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
                "name": "concludedAt",
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
    "cacheID": "1f117aa8fc416e3f5de89ac537220783",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageUpdateMutation(\n  $input: UpdateCaseStudyConclusionInput!\n) {\n  updateCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        concluded\n        ...CaseStudyConclusionManage_caseStudy\n        id\n      }\n      ...CaseStudyConclusionManage_conclusion\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "30960e2b88c94c84a78b0796b4cfa6e9";
}

export default node;
