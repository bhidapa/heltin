/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyConclusionInput = {
    caseStudyRowId: string;
    clientMutationId?: string | null;
    concludedAt: string;
    description: string;
    type: CaseStudyConclusionType;
};
export type CreateCaseStudyConclusionMutationVariables = {
    input: CreateCaseStudyConclusionInput;
};
export type CreateCaseStudyConclusionMutationResponse = {
    readonly createCaseStudyConclusion: {
        readonly caseStudyConclusion: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CreateCaseStudyConclusionMutation = {
    readonly response: CreateCaseStudyConclusionMutationResponse;
    readonly variables: CreateCaseStudyConclusionMutationVariables;
};



/*
mutation CreateCaseStudyConclusionMutation(
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
    "name": "input",
    "type": "CreateCaseStudyConclusionInput!"
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
    "name": "CreateCaseStudyConclusionMutation",
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
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCaseStudyConclusionMutation",
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
    "id": null,
    "metadata": {},
    "name": "CreateCaseStudyConclusionMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseStudyConclusionMutation(\n  $input: CreateCaseStudyConclusionInput!\n) {\n  createCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '74c24540619beee134e58d2791ac10e9';
export default node;
