/**
 * @generated SignedSource<<7286ac143f633b3acfb118a0fc5921ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyConclusionInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type CaseStudyConclusionManageDeleteMutation$variables = {
  input: DeleteCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageDeleteMutation$data = {
  readonly deleteCaseStudyConclusion: {
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
export type CaseStudyConclusionManageDeleteMutation = {
  variables: CaseStudyConclusionManageDeleteMutation$variables;
  response: CaseStudyConclusionManageDeleteMutation$data;
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
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusion",
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
                "path": "deleteCaseStudyConclusion.conclusion.caseStudy"
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
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusion",
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
    "cacheID": "455c8b514e57a84aa6feb6a3ca1b2d1e",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageDeleteMutation(\n  $input: DeleteCaseStudyConclusionInput!\n) {\n  deleteCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        concluded\n        ...CaseStudyConclusionManage_caseStudy\n        id\n      }\n      ...CaseStudyConclusionManage_conclusion\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "8be954746c7983547f9108886e71f73a";
}

export default node;
