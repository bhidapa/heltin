/* tslint:disable */
/* @relayHash f270aacf598aebf9887be8d5b09c0adb */

import { ConcreteRequest } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyConclusionInput = {
    readonly caseStudyRowId: string;
    readonly clientMutationId?: string | null;
    readonly concludedAt: string;
    readonly description: string;
    readonly type: CaseStudyConclusionType;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseStudyConclusionInput!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCaseStudyConclusionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyConclusion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyConclusion",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCaseStudyConclusionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyConclusion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyConclusion",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCaseStudyConclusionMutation",
    "id": null,
    "text": "mutation CreateCaseStudyConclusionMutation(\n  $input: CreateCaseStudyConclusionInput!\n) {\n  createCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '74c24540619beee134e58d2791ac10e9';
export default node;
