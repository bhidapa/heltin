/* tslint:disable */
/* @relayHash 05bd97686cd9788c1d5733842dd289fd */

import { ConcreteRequest } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type UpdateCaseStudyConclusionInput = {
    readonly clientMutationId?: string | null;
    readonly concludedAt: string;
    readonly description: string;
    readonly rowId: string;
    readonly type: CaseStudyConclusionType;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseStudyConclusionInput!",
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "concludedAt",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCaseStudyConclusionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudyConclusion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCaseStudyConclusionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudyConclusion",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
    "name": "UpdateCaseStudyConclusionMutation",
    "id": null,
    "text": "mutation UpdateCaseStudyConclusionMutation(\n  $input: UpdateCaseStudyConclusionInput!\n) {\n  updateCaseStudyConclusion(input: $input) {\n    caseStudyConclusion {\n      rowId\n      type\n      concludedAt\n      description\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7c6848a3b10749d80ec5845b07184b39';
export default node;
