/* tslint:disable */
/* eslint-disable */
/* @relayHash 62e94a79e3dc760d7fafba7c020174c0 */

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
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseStudyTreatmentInput!",
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
    "name": "CreateCaseStudyTreatmentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyTreatment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCaseStudyTreatmentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyTreatment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentPayload",
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
    "name": "CreateCaseStudyTreatmentMutation",
    "id": null,
    "text": "mutation CreateCaseStudyTreatmentMutation(\n  $input: CreateCaseStudyTreatmentInput!\n) {\n  createCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      rowId\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '03822924a30e6c66e6113189d0441ec5';
export default node;
