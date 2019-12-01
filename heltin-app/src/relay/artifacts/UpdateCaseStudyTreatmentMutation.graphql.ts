/* tslint:disable */
/* @relayHash a0923f72d56f42e6735ca7253338de15 */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCaseStudyTreatmentInput = {
    readonly clientMutationId?: string | null;
    readonly description?: string | null;
    readonly endedAt: string;
    readonly external: boolean;
    readonly rowId: string;
    readonly score?: number | null;
    readonly startedAt: string;
    readonly title: string;
};
export type UpdateCaseStudyTreatmentMutationVariables = {
    input: UpdateCaseStudyTreatmentInput;
};
export type UpdateCaseStudyTreatmentMutationResponse = {
    readonly updateCaseStudyTreatment: {
        readonly caseStudyTreatment: {
            readonly rowId: string;
            readonly title: string;
            readonly description: string | null;
            readonly score: number | null;
            readonly startedAt: string;
            readonly endedAt: string;
            readonly external: boolean;
        } | null;
    } | null;
};
export type UpdateCaseStudyTreatmentMutation = {
    readonly response: UpdateCaseStudyTreatmentMutationResponse;
    readonly variables: UpdateCaseStudyTreatmentMutationVariables;
};



/*
mutation UpdateCaseStudyTreatmentMutation(
  $input: UpdateCaseStudyTreatmentInput!
) {
  updateCaseStudyTreatment(input: $input) {
    caseStudyTreatment {
      rowId
      title
      description
      score
      startedAt
      endedAt
      external
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
    "type": "UpdateCaseStudyTreatmentInput!",
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
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "score",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "startedAt",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endedAt",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "external",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCaseStudyTreatmentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudyTreatment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyTreatment",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCaseStudyTreatmentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudyTreatment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyTreatment",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
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
    "name": "UpdateCaseStudyTreatmentMutation",
    "id": null,
    "text": "mutation UpdateCaseStudyTreatmentMutation(\n  $input: UpdateCaseStudyTreatmentInput!\n) {\n  updateCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      rowId\n      title\n      description\n      score\n      startedAt\n      endedAt\n      external\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '678480a3f39286b0a4d156cb00d13910';
export default node;
