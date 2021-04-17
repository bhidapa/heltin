/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateClientAssignedMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    clientRowId: string;
    mentalHealthProfessionalRowId: string;
};
export type ClientAssignedProfessionalsManageCreateMutationVariables = {
    input: CreateClientAssignedMentalHealthProfessionalInput;
};
export type ClientAssignedProfessionalsManageCreateMutationResponse = {
    readonly createClientAssignedMentalHealthProfessional: {
        readonly clientByClientRowId: {
            readonly " $fragmentRefs": FragmentRefs<"ClientAssignedProfessionalsManage_client">;
        };
    } | null;
};
export type ClientAssignedProfessionalsManageCreateMutation = {
    readonly response: ClientAssignedProfessionalsManageCreateMutationResponse;
    readonly variables: ClientAssignedProfessionalsManageCreateMutationVariables;
};



/*
mutation ClientAssignedProfessionalsManageCreateMutation(
  $input: CreateClientAssignedMentalHealthProfessionalInput!
) {
  createClientAssignedMentalHealthProfessional(input: $input) {
    clientByClientRowId {
      ...ClientAssignedProfessionalsManage_client
      id
    }
  }
}

fragment ClientAssignedProfessionalsManage_client on Client {
  rowId
  latestAssignedTherapist: latestAssignedMentalHealthProfessional {
    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
      fullName
      id
    }
    id
  }
  assignedTherapists: clientAssignedMentalHealthProfessionalsByClientRowId(orderBy: [CREATED_AT_ASC]) {
    nodes {
      id
      rowId
      therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
        rowId
        type
        fullName
        id
      }
      createdAt
    }
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
  "name": "fullName",
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
    "name": "ClientAssignedProfessionalsManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientAssignedMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createClientAssignedMentalHealthProfessional",
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
                "name": "ClientAssignedProfessionalsManage_client"
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
    "name": "ClientAssignedProfessionalsManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientAssignedMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createClientAssignedMentalHealthProfessional",
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
                "alias": "latestAssignedTherapist",
                "args": null,
                "concreteType": "ClientAssignedMentalHealthProfessional",
                "kind": "LinkedField",
                "name": "latestAssignedMentalHealthProfessional",
                "plural": false,
                "selections": [
                  {
                    "alias": "therapist",
                    "args": null,
                    "concreteType": "MentalHealthProfessional",
                    "kind": "LinkedField",
                    "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                    "plural": false,
                    "selections": [
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
                "concreteType": "ClientAssignedMentalHealthProfessionalsConnection",
                "kind": "LinkedField",
                "name": "clientAssignedMentalHealthProfessionalsByClientRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClientAssignedMentalHealthProfessional",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": "therapist",
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "kind": "LinkedField",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
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
                          (v3/*: any*/),
                          (v4/*: any*/)
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
                "storageKey": "clientAssignedMentalHealthProfessionalsByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "cacheID": "5eab07e7202930b6bd4159ac2660eea9",
    "id": null,
    "metadata": {},
    "name": "ClientAssignedProfessionalsManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ClientAssignedProfessionalsManageCreateMutation(\n  $input: CreateClientAssignedMentalHealthProfessionalInput!\n) {\n  createClientAssignedMentalHealthProfessional(input: $input) {\n    clientByClientRowId {\n      ...ClientAssignedProfessionalsManage_client\n      id\n    }\n  }\n}\n\nfragment ClientAssignedProfessionalsManage_client on Client {\n  rowId\n  latestAssignedTherapist: latestAssignedMentalHealthProfessional {\n    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n      fullName\n      id\n    }\n    id\n  }\n  assignedTherapists: clientAssignedMentalHealthProfessionalsByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'baa3fddfba30283eb85f92d8ba4e232c';
export default node;
