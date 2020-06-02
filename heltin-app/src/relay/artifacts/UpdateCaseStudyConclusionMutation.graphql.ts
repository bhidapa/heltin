/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type UpdateCaseStudyConclusionInput = {
    clientMutationId?: string | null;
    concludedAt: string;
    description: string;
    rowId: string;
    type: CaseStudyConclusionType;
};
export type UpdateCaseStudyConclusionMutationVariables = {
    input: UpdateCaseStudyConclusionInput;
};
export type UpdateCaseStudyConclusionMutationResponse = {
    readonly updateCaseStudyConclusion: {
        readonly caseStudyConclusion: {
            readonly rowId: string;
            readonly type: CaseStudyConclusionType;
            readonly concludedAt: string;
            readonly description: string;
        } | null;
    } | null;
};
export type UpdateCaseStudyConclusionMutation = {
    readonly response: UpdateCaseStudyConclusionMutationResponse;
    readonly variables: UpdateCaseStudyConclusionMutationVariables;
};



/*
mutation UpdateCaseStudyConclusionMutation(
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
    "name": "input",
    "type": "UpdateCaseStudyConclusionInput!"
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
    "name": "UpdateCaseStudyConclusionMutation",
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
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCaseStudyConclusionMutation",
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
    "id": null,
    "metadata": {},
    "name": "UpdateCaseStudyConclusionMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCaseStudyConclusionMutation(\n  $input: UpdateCaseStudyConclusionInput!\n) {\n  updateCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      type\n      concludedAt\n      description\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7c6848a3b10749d80ec5845b07184b39';
export default node;
