/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyTreatmentInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type CaseStudyTreatmentManageDeleteMutationVariables = {
    input: DeleteCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageDeleteMutationResponse = {
    readonly deleteCaseStudyTreatment: {
        readonly clientMutationId: string | null;
    } | null;
};
export type CaseStudyTreatmentManageDeleteMutation = {
    readonly response: CaseStudyTreatmentManageDeleteMutationResponse;
    readonly variables: CaseStudyTreatmentManageDeleteMutationVariables;
};



/*
mutation CaseStudyTreatmentManageDeleteMutation(
  $input: DeleteCaseStudyTreatmentInput!
) {
  deleteCaseStudyTreatment(input: $input) {
    clientMutationId
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCaseStudyTreatmentPayload",
    "kind": "LinkedField",
    "name": "deleteCaseStudyTreatment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3a995f88e6383cc8f7b82b8507c1728d",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageDeleteMutation(\n  $input: DeleteCaseStudyTreatmentInput!\n) {\n  deleteCaseStudyTreatment(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aefc6027258a607d8665a842c069ae8d';
export default node;
