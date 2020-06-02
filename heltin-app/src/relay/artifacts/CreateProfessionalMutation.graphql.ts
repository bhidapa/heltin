/* tslint:disable */
/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateMentalHealthProfessionalInput!"
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
    "name": "CreateProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createMentalHealthProfessional",
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
    "name": "CreateProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createMentalHealthProfessional",
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
    "name": "CreateProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProfessionalMutation(\n  $input: CreateMentalHealthProfessionalInput!\n) {\n  createMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c55821b22f338a8c23dd4e8d9a45807c';
export default node;
