/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type UpdateCaseStudyConclusionInput = {
    clientMutationId?: string | null | undefined;
    concludedAt: string;
    description: string;
    rowId: string;
    type: CaseStudyConclusionType;
};
export type CaseStudyConclusionManageUpdateMutationVariables = {
    input: UpdateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageUpdateMutationResponse = {
    readonly updateCaseStudyConclusion: {
        readonly caseStudyConclusion: {
            readonly rowId: string;
            readonly type: CaseStudyConclusionType;
            readonly concludedAt: string;
            readonly description: string;
        } | null;
    } | null;
};
export type CaseStudyConclusionManageUpdateMutation = {
    readonly response: CaseStudyConclusionManageUpdateMutationResponse;
    readonly variables: CaseStudyConclusionManageUpdateMutationVariables;
};



/*
mutation CaseStudyConclusionManageUpdateMutation(
  $input: UpdateCaseStudyConclusionInput!
) {
  updateCaseStudyConclusion(input: $input) {
    caseStudyConclusion {
      rowId
      type
      concludedAt
      description
      id
    }
  }
}
*/

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
  "name": "type",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concludedAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
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
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
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
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b5f36c9fc2be33ce92f7d872c47024ff",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageUpdateMutation(\n  $input: UpdateCaseStudyConclusionInput!\n) {\n  updateCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      type\n      concludedAt\n      description\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e3365607ac5e54c0c9276b68e9a70dad';
export default node;
