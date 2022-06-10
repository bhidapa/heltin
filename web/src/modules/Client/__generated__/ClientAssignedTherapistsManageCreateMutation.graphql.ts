/**
 * @generated SignedSource<<03445ee5fd66152594dcc4456482fe06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateClientAssignedTherapistInput = {
  clientMutationId?: string | null;
  clientRowId: string;
  therapistRowId: string;
};
export type ClientAssignedTherapistsManageCreateMutation$variables = {
  input: CreateClientAssignedTherapistInput;
};
export type ClientAssignedTherapistsManageCreateMutation$data = {
  readonly createClientAssignedTherapist: {
    readonly clientByClientRowId: {
      readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_client">;
    } | null;
  } | null;
};
export type ClientAssignedTherapistsManageCreateMutation = {
  response: ClientAssignedTherapistsManageCreateMutation$data;
  variables: ClientAssignedTherapistsManageCreateMutation$variables;
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientAssignedTherapistsManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientAssignedTherapistPayload",
        "kind": "LinkedField",
        "name": "createClientAssignedTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientAssignedTherapistsManage_client"
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
    "name": "ClientAssignedTherapistsManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientAssignedTherapistPayload",
        "kind": "LinkedField",
        "name": "createClientAssignedTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "assignedTherapists",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": [
                      "CREATED_AT_ASC"
                    ]
                  }
                ],
                "concreteType": "ClientAssignedTherapistsConnection",
                "kind": "LinkedField",
                "name": "clientAssignedTherapistsByClientRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClientAssignedTherapist",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": "therapist",
                        "args": null,
                        "concreteType": "Therapist",
                        "kind": "LinkedField",
                        "name": "therapistByTherapistRowId",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "clientAssignedTherapistsByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
                      (v4/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "57cfb0e5798daa4fa428b1401a20fb15",
    "id": null,
    "metadata": {},
    "name": "ClientAssignedTherapistsManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ClientAssignedTherapistsManageCreateMutation(\n  $input: CreateClientAssignedTherapistInput!\n) {\n  createClientAssignedTherapist(input: $input) {\n    clientByClientRowId {\n      ...ClientAssignedTherapistsManage_client\n      id\n    }\n  }\n}\n\nfragment ClientAssignedTherapistsManage_client on Client {\n  rowId\n  assignedTherapists: clientAssignedTherapistsByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      fullName\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b57184414d11ad759782b85e73ede927";
}

export default node;
