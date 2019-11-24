/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCaseStudyInput = {
    readonly clientMutationId?: string | null;
    readonly description: string;
    readonly rowId: string;
};
export type UpdateCaseStudyMutationVariables = {
    input: UpdateCaseStudyInput;
};
export type UpdateCaseStudyMutationResponse = {
    readonly updateCaseStudy: {
        readonly caseStudy: {
            readonly rowId: string;
            readonly description: string;
            readonly client: {
                readonly fullName: string;
            } | null;
        } | null;
    } | null;
};
export type UpdateCaseStudyMutation = {
    readonly response: UpdateCaseStudyMutationResponse;
    readonly variables: UpdateCaseStudyMutationVariables;
};



/*
mutation UpdateCaseStudyMutation(
  $input: UpdateCaseStudyInput!
) {
  updateCaseStudy(input: $input) {
    caseStudy {
      rowId
      description
      client: clientByClientRowId {
        fullName
        id
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseStudyInput!",
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v5 = {
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
    "name": "UpdateCaseStudyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
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
    "name": "UpdateCaseStudyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCaseStudyMutation",
    "id": null,
    "text": "mutation UpdateCaseStudyMutation(\n  $input: UpdateCaseStudyInput!\n) {\n  updateCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      description\n      client: clientByClientRowId {\n        fullName\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f1ad0b481eb389fa5a2b8d803268173e';
export default node;
