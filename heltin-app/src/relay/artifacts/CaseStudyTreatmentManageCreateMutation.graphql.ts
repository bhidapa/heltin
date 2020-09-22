/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateCaseStudyTreatmentInput = {
    clientMutationId?: string | null;
    caseStudyRowId: string;
    external: boolean;
    startedAt: string;
    endedAt: string;
    title: string;
    description?: string | null;
    score?: number | null;
};
export type CaseStudyTreatmentManageCreateMutationVariables = {
    input: CreateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageCreateMutationResponse = {
    readonly createCaseStudyTreatment: {
        readonly caseStudyTreatment: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CaseStudyTreatmentManageCreateMutation = {
    readonly response: CaseStudyTreatmentManageCreateMutationResponse;
    readonly variables: CaseStudyTreatmentManageCreateMutationVariables;
};



/*
mutation CaseStudyTreatmentManageCreateMutation(
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
    "name": "CaseStudyTreatmentManageCreateMutation",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyTreatmentManageCreateMutation",
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
    "cacheID": "ef9a47e3e6a251bd37dd7e36dced8f72",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageCreateMutation(\n  $input: CreateCaseStudyTreatmentInput!\n) {\n  createCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a91c8b6a7e4b11324ae787dc4188e7d1';
export default node;
