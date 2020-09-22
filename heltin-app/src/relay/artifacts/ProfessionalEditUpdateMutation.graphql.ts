/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
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
export type ProfessionalEditUpdateMutationVariables = {
    input: UpdateMentalHealthProfessionalInput;
};
export type ProfessionalEditUpdateMutationResponse = {
    readonly updateMentalHealthProfessional: {
        readonly mentalHealthProfessional: {
            readonly " $fragmentRefs": FragmentRefs<"ProfessionalEdit_professional">;
        } | null;
    } | null;
};
export type ProfessionalEditUpdateMutation = {
    readonly response: ProfessionalEditUpdateMutationResponse;
    readonly variables: ProfessionalEditUpdateMutationVariables;
};



/*
mutation ProfessionalEditUpdateMutation(
  $input: UpdateMentalHealthProfessionalInput!
) {
  updateMentalHealthProfessional(input: $input) {
    mentalHealthProfessional {
      ...ProfessionalEdit_professional
      id
    }
  }
}

fragment ProfessionalEdit_professional on MentalHealthProfessional {
  rowId
  dateOfBirth
  email
  title
  firstName
  gender
  lastName
  fullName
  type
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfessionalEditUpdateMutation",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProfessionalEdit_professional"
              }
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
    "name": "ProfessionalEditUpdateMutation",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rowId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateOfBirth",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gender",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
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
    "cacheID": "0bcf5aa8da1abcd21a3530dff12df288",
    "id": null,
    "metadata": {},
    "name": "ProfessionalEditUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ProfessionalEditUpdateMutation(\n  $input: UpdateMentalHealthProfessionalInput!\n) {\n  updateMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      ...ProfessionalEdit_professional\n      id\n    }\n  }\n}\n\nfragment ProfessionalEdit_professional on MentalHealthProfessional {\n  rowId\n  dateOfBirth\n  email\n  title\n  firstName\n  gender\n  lastName\n  fullName\n  type\n}\n"
  }
};
})();
(node as any).hash = '0138c344d73574cade901088967dbe30';
export default node;
