/**
 * @generated SignedSource<<6b2c3c9145f309df45c51e637d37bb1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type UpdateClientInput = {
  address: string;
  city: string;
  clientMutationId?: string | null;
  dateOfBirth: string;
  discrete?: boolean | null;
  email?: string | null;
  firstName: string;
  gender: Gender;
  lastName: string;
  note?: string | null;
  number: number;
  rowId: string;
  telephone: string;
};
export type ClientManageUpdateMutation$variables = {
  input: UpdateClientInput;
};
export type ClientManageUpdateMutation$data = {
  readonly updateClient: {
    readonly client: {
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"ClientManage_client" | "ClientsTable_client">;
    } | null;
  } | null;
};
export type ClientManageUpdateMutation = {
  response: ClientManageUpdateMutation$data;
  variables: ClientManageUpdateMutation$variables;
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
  "name": "fullName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  {
    "alias": "therapist",
    "args": null,
    "concreteType": "Therapist",
    "kind": "LinkedField",
    "name": "therapistByUserRowId",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "kind": "LinkedField",
        "name": "updateClient",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientManage_client"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientsTable_client"
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
    "name": "ClientManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "kind": "LinkedField",
        "name": "updateClient",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "city",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
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
                "name": "note",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "discrete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              },
              {
                "alias": "updatedBy",
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "userByUpdatedBy",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": "createdBy",
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "userByCreatedBy",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "canViewerDelete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ClientAssignedTherapist",
                "kind": "LinkedField",
                "name": "latestAssignedTherapist",
                "plural": false,
                "selections": [
                  {
                    "alias": "therapist",
                    "args": null,
                    "concreteType": "Therapist",
                    "kind": "LinkedField",
                    "name": "therapistByTherapistRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": "treatments",
                "args": null,
                "concreteType": "CaseStudyTreatmentsConnection",
                "kind": "LinkedField",
                "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
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
    "cacheID": "deaac7866acf709eb8541df52a640daf",
    "id": null,
    "metadata": {},
    "name": "ClientManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ClientManageUpdateMutation(\n  $input: UpdateClientInput!\n) {\n  updateClient(input: $input) {\n    client {\n      rowId\n      ...ClientManage_client\n      ...ClientsTable_client\n      id\n    }\n  }\n}\n\nfragment ClientManage_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  email\n  note\n  discrete\n  updatedAt\n  updatedBy: userByUpdatedBy {\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n  createdBy: userByCreatedBy {\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n  canViewerDelete\n}\n\nfragment ClientsTable_client on Client {\n  rowId\n  number\n  fullName\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      rowId\n      fullName\n      id\n    }\n    id\n  }\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "adeb7c8cfca0a9bc5662ffacb30e5217";
}

export default node;
