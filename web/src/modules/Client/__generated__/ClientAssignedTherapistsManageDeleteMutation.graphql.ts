/**
 * @generated SignedSource<<2273b665f152032194da417d0f37b255>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteClientAssignedTherapistInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type ClientAssignedTherapistsManageDeleteMutation$variables = {
  input: DeleteClientAssignedTherapistInput;
};
export type ClientAssignedTherapistsManageDeleteMutation$data = {
  readonly deleteClientAssignedTherapist: {
    readonly clientByClientRowId: {
      readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_client">;
    } | null;
  } | null;
};
export type ClientAssignedTherapistsManageDeleteMutation = {
  variables: ClientAssignedTherapistsManageDeleteMutation$variables;
  response: ClientAssignedTherapistsManageDeleteMutation$data;
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
    "name": "ClientAssignedTherapistsManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteClientAssignedTherapistPayload",
        "kind": "LinkedField",
        "name": "deleteClientAssignedTherapist",
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
    "name": "ClientAssignedTherapistsManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteClientAssignedTherapistPayload",
        "kind": "LinkedField",
        "name": "deleteClientAssignedTherapist",
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
    "cacheID": "2e6bed9f4f96b0aeac08f9d61bd18b37",
    "id": null,
    "metadata": {},
    "name": "ClientAssignedTherapistsManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ClientAssignedTherapistsManageDeleteMutation(\n  $input: DeleteClientAssignedTherapistInput!\n) {\n  deleteClientAssignedTherapist(input: $input) {\n    clientByClientRowId {\n      ...ClientAssignedTherapistsManage_client\n      id\n    }\n  }\n}\n\nfragment ClientAssignedTherapistsManage_client on Client {\n  rowId\n  assignedTherapists: clientAssignedTherapistsByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      fullName\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b757be130ff9afe12120036319e9b044";
}

export default node;
