/* tslint:disable */
/* @relayHash a195e3beabeef7a05a54ed144d9b00bc */

import { ConcreteRequest } from "relay-runtime";
export type DeleteMentalHealthProfessionalInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteMentalHealthProfessionalInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteMentalHealthProfessional",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteMentalHealthProfessionalPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "mentalHealthProfessional",
        "storageKey": null,
        "args": null,
        "concreteType": "MentalHealthProfessional",
        "plural": false,
        "selections": [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProfessionalMutation",
    "id": null,
    "text": "mutation DeleteProfessionalMutation(\n  $input: DeleteMentalHealthProfessionalInput!\n) {\n  deleteMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0d8c095eec73910d0e9c3fe91b555232';
export default node;
