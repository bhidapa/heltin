/* tslint:disable */
/* eslint-disable */
/* @relayHash 94ad59f8ef1088411be4cdaf38984885 */

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
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateClientInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "ClientsTableRow_item",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateClientMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "number",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "firstName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lastName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "treatments",
                    "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyTreatmentsConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "totalCount",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateClientMutation",
    "id": null,
    "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      rowId\n      id\n    }\n    clientEdge {\n      node {\n        rowId\n        ...ClientsTableRow_item\n        id\n      }\n    }\n  }\n}\n\nfragment ClientsTableRow_item on Client {\n  rowId\n  number\n  firstName\n  lastName\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3726eb376c8fcdc1278729aa34625fab';
export default node;
