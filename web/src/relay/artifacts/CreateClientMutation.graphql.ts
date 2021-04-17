/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type CreateClientInput = {
    clientMutationId?: string | null;
    number: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    telephone: string;
    gender: Gender;
    city: string;
    address: string;
    sentBy: ClientSentBy;
    email?: string | null;
    discrete?: boolean | null;
};
export type CreateClientMutationVariables = {
    input: CreateClientInput;
};
export type CreateClientMutationResponse = {
    readonly createClient: {
        readonly client: {
            readonly rowId: string;
        } | null;
        readonly clientEdge: {
            readonly node: {
                readonly rowId: string;
                readonly " $fragmentRefs": FragmentRefs<"ClientsTableRow_item">;
            };
        } | null;
    } | null;
};
export type CreateClientMutation = {
    readonly response: CreateClientMutationResponse;
    readonly variables: CreateClientMutationVariables;
};



/*
mutation CreateClientMutation(
  $input: CreateClientInput!
) {
  createClient(input: $input) {
    client {
      rowId
      id
    }
    clientEdge {
      node {
        rowId
        ...ClientsTableRow_item
        id
      }
    }
  }
}

fragment ClientsTableRow_item on Client {
  rowId
  number
  firstName
  lastName
  latestAssignedTherapist: latestAssignedMentalHealthProfessional {
    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
      fullName
      id
    }
    id
  }
  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {
    totalCount
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateClientMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
        "kind": "LinkedField",
        "name": "createClient",
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
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "kind": "LinkedField",
            "name": "clientEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ClientsTableRow_item"
                  }
                ],
                "storageKey": null
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
    "name": "CreateClientMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
        "kind": "LinkedField",
        "name": "createClient",
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "kind": "LinkedField",
            "name": "clientEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
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
                  (v3/*: any*/)
                ],
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
    "cacheID": "6b53b163e74b4287ccd85eacf5e1914c",
    "id": null,
    "metadata": {},
    "name": "CreateClientMutation",
    "operationKind": "mutation",
    "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      rowId\n      id\n    }\n    clientEdge {\n      node {\n        rowId\n        ...ClientsTableRow_item\n        id\n      }\n    }\n  }\n}\n\nfragment ClientsTableRow_item on Client {\n  rowId\n  number\n  firstName\n  lastName\n  latestAssignedTherapist: latestAssignedMentalHealthProfessional {\n    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n      fullName\n      id\n    }\n    id\n  }\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '3726eb376c8fcdc1278729aa34625fab';
export default node;
