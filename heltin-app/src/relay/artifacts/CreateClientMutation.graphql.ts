/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type CreateClientInput = {
    address: string;
    city: string;
    clientMutationId?: string | null;
    dateOfBirth: string;
    discrete?: boolean | null;
    email?: string | null;
    firstName: string;
    gender: Gender;
    lastName: string;
    number: number;
    sentBy: ClientSentBy;
    telephone: string;
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
    "name": "input",
    "type": "CreateClientInput!"
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
    "type": "Mutation"
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
    "id": null,
    "metadata": {},
    "name": "CreateClientMutation",
    "operationKind": "mutation",
    "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      rowId\n      id\n    }\n    clientEdge {\n      node {\n        rowId\n        ...ClientsTableRow_item\n        id\n      }\n    }\n  }\n}\n\nfragment ClientsTableRow_item on Client {\n  rowId\n  number\n  firstName\n  lastName\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '3726eb376c8fcdc1278729aa34625fab';
export default node;
