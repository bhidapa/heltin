/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyConclusionInput = {
    caseStudyRowId: string;
    clientMutationId?: string | null | undefined;
    concludedAt: string;
    description: string;
    type: CaseStudyConclusionType;
};
export type CaseStudyConclusionManageCreateMutationVariables = {
    input: CreateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageCreateMutationResponse = {
    readonly createCaseStudyConclusion: {
        readonly caseStudyConclusion: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CaseStudyConclusionManageCreateMutation = {
    readonly response: CaseStudyConclusionManageCreateMutationResponse;
    readonly variables: CaseStudyConclusionManageCreateMutationVariables;
};



/*
mutation CaseStudyConclusionManageCreateMutation(
  $input: CreateCaseStudyConclusionInput!
) {
  createCaseStudyConclusion(input: $input) {
    caseStudyConclusion {
      rowId
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
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "cacheID": "f1fc5eb9052b022c1f9c42d2d9c10d1d",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageCreateMutation(\n  $input: CreateCaseStudyConclusionInput!\n) {\n  createCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '89c59f56143f7228e9a65c84f3dc7e7d';
export default node;
