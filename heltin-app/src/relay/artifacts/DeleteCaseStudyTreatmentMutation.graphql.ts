/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyTreatmentInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteCaseStudyTreatmentMutationVariables = {
    input: DeleteCaseStudyTreatmentInput;
};
export type DeleteCaseStudyTreatmentMutationResponse = {
    readonly deleteCaseStudyTreatment: {
        readonly clientMutationId: string | null;
    } | null;
};
export type DeleteCaseStudyTreatmentMutation = {
    readonly response: DeleteCaseStudyTreatmentMutationResponse;
    readonly variables: DeleteCaseStudyTreatmentMutationVariables;
};



/*
mutation DeleteCaseStudyTreatmentMutation(
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
    "name": "DeleteCaseStudyTreatmentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCaseStudyTreatmentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "91b58e3df62cac3bb99e6402c4627d83",
    "id": null,
    "metadata": {},
    "name": "DeleteCaseStudyTreatmentMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyTreatmentMutation(\n  $input: DeleteCaseStudyTreatmentInput!\n) {\n  deleteCaseStudyTreatment(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '0797d1580cadf3b78ca2fbb08ca5bfc8';
export default node;
