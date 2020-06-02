/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type UpdateMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    dateOfBirth: string;
    email: string;
    firstName: string;
    gender: Gender;
    lastName: string;
    rowId: string;
    title?: string | null;
    type: MentalHealthProfessionalType;
    userRowId?: string | null;
};
export type UpdateProfessionalMutationVariables = {
    input: UpdateMentalHealthProfessionalInput;
};
export type UpdateProfessionalMutationResponse = {
    readonly updateMentalHealthProfessional: {
        readonly mentalHealthProfessional: {
            readonly rowId: string;
            readonly dateOfBirth: string;
            readonly email: string;
            readonly title: string | null;
            readonly firstName: string;
            readonly gender: Gender;
            readonly lastName: string;
            readonly fullName: string;
            readonly type: MentalHealthProfessionalType;
        } | null;
    } | null;
};
export type UpdateProfessionalMutation = {
    readonly response: UpdateProfessionalMutationResponse;
    readonly variables: UpdateProfessionalMutationVariables;
};



/*
mutation UpdateProfessionalMutation(
  $input: UpdateMentalHealthProfessionalInput!
) {
  updateMentalHealthProfessional(input: $input) {
    mentalHealthProfessional {
      rowId
      dateOfBirth
      email
      title
      firstName
      gender
      lastName
      fullName
      type
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
    "type": "UpdateMentalHealthProfessionalInput!"
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfBirth",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "updateMentalHealthProfessional",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
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
    "name": "UpdateProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "updateMentalHealthProfessional",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
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
    "name": "UpdateProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProfessionalMutation(\n  $input: UpdateMentalHealthProfessionalInput!\n) {\n  updateMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      rowId\n      dateOfBirth\n      email\n      title\n      firstName\n      gender\n      lastName\n      fullName\n      type\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4d7902f719ba7e9703437d3e05d9353b';
export default node;
