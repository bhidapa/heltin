/**
 * @generated SignedSource<<0e9994523dd216602b409ed4d3ede19f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Gender = "MALE" | "FEMALE";
export type TherapistType = "PSYCHOTHERAPIST" | "PSYCHOLOGIST" | "PSYCHIATRIST" | "NEUROLOGIST" | "PEDIATRIST" | "SOCIAL_WORKER" | "PEDAGOGUE" | "DEFECTOLOGIST" | "PHONETICIAN" | "NEUROPSYCHIATRIST" | "CLINICAL_PSYCHOLOGIST" | "SUPERVISOR" | "LOGOPED" | "OTHER";
export type UpdateTherapistInput = {
  clientMutationId?: string | null;
  rowId: string;
  type: TherapistType;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  disabled: boolean;
  telephone?: string | null;
  title?: string | null;
  userRowId?: string | null;
};
export type TherapistManageUpdateMutation$variables = {
  input: UpdateTherapistInput;
};
export type TherapistManageUpdateMutation$data = {
  readonly updateTherapist: {
    readonly therapist: {
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_therapist" | "TherapistsTable_therapist">;
    } | null;
  } | null;
};
export type TherapistManageUpdateMutation = {
  variables: TherapistManageUpdateMutation$variables;
  response: TherapistManageUpdateMutation$data;
};

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
    "name": "TherapistManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTherapistPayload",
        "kind": "LinkedField",
        "name": "updateTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Therapist",
            "kind": "LinkedField",
            "name": "therapist",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TherapistManage_therapist"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TherapistsTable_therapist"
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
    "name": "TherapistManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTherapistPayload",
        "kind": "LinkedField",
        "name": "updateTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Therapist",
            "kind": "LinkedField",
            "name": "therapist",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "enabled",
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
                "name": "title",
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
                "name": "firstName",
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
                "name": "dateOfBirth",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "telephone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gender",
                "storageKey": null
              },
              (v3/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
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
    "cacheID": "07a42c18d3845ceca18b8b679978779f",
    "id": null,
    "metadata": {},
    "name": "TherapistManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TherapistManageUpdateMutation(\n  $input: UpdateTherapistInput!\n) {\n  updateTherapist(input: $input) {\n    therapist {\n      rowId\n      ...TherapistManage_therapist\n      ...TherapistsTable_therapist\n      id\n    }\n  }\n}\n\nfragment TherapistManage_therapist on Therapist {\n  rowId\n  enabled\n  disabled\n  type\n  title\n  fullName\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  email\n  user: userByUserRowId {\n    id\n    rowId\n    email\n  }\n  updatedAt\n}\n\nfragment TherapistsTable_therapist on Therapist {\n  rowId\n  type\n  fullName\n  enabled\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "31aa54edc75e44922b23a29db18afaf8";
}

export default node;
