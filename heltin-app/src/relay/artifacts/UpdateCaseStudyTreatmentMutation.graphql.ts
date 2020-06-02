/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCaseStudyTreatmentInput = {
    clientMutationId?: string | null;
    description?: string | null;
    endedAt: string;
    external: boolean;
    rowId: string;
    score?: number | null;
    startedAt: string;
    title: string;
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseStudyTreatmentInput!"
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
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "score",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startedAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endedAt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "external",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCaseStudyTreatmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
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
    "name": "UpdateCaseStudyTreatmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
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
    "name": "UpdateCaseStudyTreatmentMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCaseStudyTreatmentMutation(\n  $input: UpdateCaseStudyTreatmentInput!\n) {\n  updateCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      rowId\n      title\n      description\n      score\n      startedAt\n      endedAt\n      external\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '678480a3f39286b0a4d156cb00d13910';
export default node;
