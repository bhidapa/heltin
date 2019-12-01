/* tslint:disable */
/* @relayHash 789d21d7614ec372d0b9d6e6ac60113f */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyTreatmentInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyTreatmentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCaseStudyTreatment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCaseStudyTreatmentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCaseStudyTreatmentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCaseStudyTreatmentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCaseStudyTreatmentMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyTreatmentMutation(\n  $input: DeleteCaseStudyTreatmentInput!\n) {\n  deleteCaseStudyTreatment(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0797d1580cadf3b78ca2fbb08ca5bfc8';
export default node;
