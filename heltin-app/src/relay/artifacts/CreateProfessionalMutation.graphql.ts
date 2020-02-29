/* tslint:disable */
/* eslint-disable */
/* @relayHash f53e92af4b6849f1cf74e72244aca731 */

import { ConcreteRequest } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CreateMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    dateOfBirth: string;
    email: string;
    firstName: string;
    gender: Gender;
    lastName: string;
    title?: string | null;
    type: MentalHealthProfessionalType;
    userRowId?: string | null;
};
export type CreateProfessionalMutationVariables = {
    input: CreateMentalHealthProfessionalInput;
};
export type CreateProfessionalMutationResponse = {
    readonly createMentalHealthProfessional: {
        readonly mentalHealthProfessional: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CreateProfessionalMutation = {
    readonly response: CreateProfessionalMutationResponse;
    readonly variables: CreateProfessionalMutationVariables;
};



/*
mutation CreateProfessionalMutation(
  $input: CreateMentalHealthProfessionalInput!
) {
  createMentalHealthProfessional(input: $input) {
    mentalHealthProfessional {
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
    "type": "CreateMentalHealthProfessionalInput!",
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
    "name": "CreateProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMentalHealthProfessionalPayload",
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMentalHealthProfessionalPayload",
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
    "name": "CreateProfessionalMutation",
    "id": null,
    "text": "mutation CreateProfessionalMutation(\n  $input: CreateMentalHealthProfessionalInput!\n) {\n  createMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      rowId\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c55821b22f338a8c23dd4e8d9a45807c';
export default node;
