/**
 * @generated SignedSource<<f2a6afaa6b27f510fc34fe116b5fe895>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "TREATMENT_COMPLETION" | "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL";
export type CreateCaseStudyConclusionInput = {
  clientMutationId?: string | null;
  caseStudyRowId: string;
  type: CaseStudyConclusionType;
  concludedAt: string;
  description: string;
  privateDescription?: string | null;
};
export type CaseStudyConclusionManageCreateMutation$variables = {
  input: CreateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageCreateMutation$data = {
  readonly createCaseStudyConclusion: {
    readonly conclusion: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly rowId: string;
        readonly clientRowId: string | null;
        readonly concluded: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
    } | null;
  } | null;
};
export type CaseStudyConclusionManageCreateMutation = {
  variables: CaseStudyConclusionManageCreateMutation$variables;
  response: CaseStudyConclusionManageCreateMutation$data;
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
  "name": "concluded",
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
    "name": "CaseStudyConclusionManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusion",
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
                    (v2/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyConclusionManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "createCaseStudyConclusion.conclusion.caseStudy"
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
    "name": "CaseStudyConclusionManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusion",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
    "cacheID": "f583b31763ef51be4d081e7b01f42612",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageCreateMutation(\n  $input: CreateCaseStudyConclusionInput!\n) {\n  createCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        rowId\n        clientRowId\n        concluded\n        ...CaseStudyConclusionManage_caseStudy\n        id\n      }\n      ...CaseStudyConclusionManage_conclusion\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "a89f8c45ccdf2c7e97800ff596a468ac";
}

export default node;
