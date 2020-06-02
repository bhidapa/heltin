/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteProfessionalMutationVariables = {
    input: DeleteMentalHealthProfessionalInput;
};
export type DeleteProfessionalMutationResponse = {
    readonly deleteMentalHealthProfessional: {
        readonly mentalHealthProfessional: {
            readonly id: string;
        } | null;
    } | null;
};
export type DeleteProfessionalMutation = {
    readonly response: DeleteProfessionalMutationResponse;
    readonly variables: DeleteProfessionalMutationVariables;
};



/*
mutation DeleteProfessionalMutation(
  $input: DeleteMentalHealthProfessionalInput!
) {
  deleteMentalHealthProfessional(input: $input) {
    mentalHealthProfessional {
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
    "type": "DeleteMentalHealthProfessionalInput!"
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
    "concreteType": "DeleteMentalHealthProfessionalPayload",
    "kind": "LinkedField",
    "name": "deleteMentalHealthProfessional",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessional",
        "plural": false,
        "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteProfessionalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteProfessionalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProfessionalMutation(\n  $input: DeleteMentalHealthProfessionalInput!\n) {\n  deleteMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0d8c095eec73910d0e9c3fe91b555232';
export default node;
