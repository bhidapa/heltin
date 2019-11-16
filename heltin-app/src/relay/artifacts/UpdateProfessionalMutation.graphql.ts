/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type UpdateMentalHealthProfessionalInput = {
    readonly clientMutationId?: string | null;
    readonly dateOfBirth: string;
    readonly email: string;
    readonly firstName: string;
    readonly gender: Gender;
    readonly lastName: string;
    readonly rowId: string;
    readonly title?: string | null;
    readonly type: MentalHealthProfessionalType;
    readonly userRowId?: string | null;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMentalHealthProfessionalInput!",
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateOfBirth",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gender",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMentalHealthProfessionalPayload",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMentalHealthProfessionalPayload",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
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
    "name": "UpdateProfessionalMutation",
    "id": null,
    "text": "mutation UpdateProfessionalMutation(\n  $input: UpdateMentalHealthProfessionalInput!\n) {\n  updateMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      rowId\n      dateOfBirth\n      email\n      title\n      firstName\n      gender\n      lastName\n      fullName\n      type\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4d7902f719ba7e9703437d3e05d9353b';
export default node;
