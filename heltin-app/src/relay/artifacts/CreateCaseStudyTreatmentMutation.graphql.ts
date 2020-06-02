/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateCaseStudyTreatmentInput = {
    caseStudyRowId: string;
    clientMutationId?: string | null;
    description?: string | null;
    endedAt: string;
    external: boolean;
    score?: number | null;
    startedAt: string;
    title: string;
};
export type CreateCaseStudyTreatmentMutationVariables = {
    input: CreateCaseStudyTreatmentInput;
};
export type CreateCaseStudyTreatmentMutationResponse = {
    readonly createCaseStudyTreatment: {
        readonly caseStudyTreatment: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CreateCaseStudyTreatmentMutation = {
    readonly response: CreateCaseStudyTreatmentMutationResponse;
    readonly variables: CreateCaseStudyTreatmentMutationVariables;
};



/*
mutation CreateCaseStudyTreatmentMutation(
  $input: CreateCaseStudyTreatmentInput!
) {
  createCaseStudyTreatment(input: $input) {
    caseStudyTreatment {
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
    "type": "CreateCaseStudyTreatmentInput!"
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
    "name": "CreateCaseStudyTreatmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
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
    "name": "CreateCaseStudyTreatmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatment",
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
    "name": "CreateCaseStudyTreatmentMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseStudyTreatmentMutation(\n  $input: CreateCaseStudyTreatmentInput!\n) {\n  createCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '03822924a30e6c66e6113189d0441ec5';
export default node;
