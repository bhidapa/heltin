/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "CLINICAL_PSYCHOLOGIST" | "DEFECTOLOGIST" | "LOGOPED" | "NEUROLOGIST" | "NEUROPSYCHIATRIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER" | "SUPERVISOR";
export type UpdateMentalHealthProfessionalInput = {
    clientMutationId?: string | null | undefined;
    dateOfBirth: string;
    disabled: boolean;
    email: string;
    firstName: string;
    gender: Gender;
    lastName: string;
    rowId: string;
    title?: string | null | undefined;
    type: MentalHealthProfessionalType;
    userRowId?: string | null | undefined;
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
  disabled
  user: userByUserRowId {
    id
    rowId
    email
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
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateOfBirth",
                "storageKey": null
              },
              (v3/*: any*/),
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
                "name": "disabled",
                "storageKey": null
              },
              {
                "alias": "user",
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "userByUserRowId",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e35a32ffed616c429ab0c17dba5277fb",
    "id": null,
    "metadata": {},
    "name": "ProfessionalEditUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ProfessionalEditUpdateMutation(\n  $input: UpdateMentalHealthProfessionalInput!\n) {\n  updateMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      ...ProfessionalEdit_professional\n      id\n    }\n  }\n}\n\nfragment ProfessionalEdit_professional on MentalHealthProfessional {\n  rowId\n  dateOfBirth\n  email\n  title\n  firstName\n  gender\n  lastName\n  fullName\n  type\n  disabled\n  user: userByUserRowId {\n    id\n    rowId\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '0138c344d73574cade901088967dbe30';
export default node;
