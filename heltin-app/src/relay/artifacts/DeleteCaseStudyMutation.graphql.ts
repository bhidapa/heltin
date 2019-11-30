/* tslint:disable */
/* @relayHash e9954d2b40ce1ce01283aac3b32f462c */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
};
export type DeleteCaseStudyMutationVariables = {
    input: DeleteCaseStudyInput;
};
export type DeleteCaseStudyMutationResponse = {
    readonly deleteCaseStudy: {
        readonly clientByClientRowId: {
            readonly rowId: string;
            readonly caseStudiesByClientRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly id: string;
                }>;
            };
        } | null;
    } | null;
};
export type DeleteCaseStudyMutation = {
    readonly response: DeleteCaseStudyMutationResponse;
    readonly variables: DeleteCaseStudyMutationVariables;
};



/*
mutation DeleteCaseStudyMutation(
  $input: DeleteCaseStudyInput!
) {
  deleteCaseStudy(input: $input) {
    clientByClientRowId {
      rowId
      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          id
        }
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
    "type": "DeleteCaseStudyInput!",
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
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "caseStudiesByClientRowId",
  "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
  "args": [
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": [
        "CREATED_AT_ASC"
      ]
    }
  ],
  "concreteType": "CaseStudiesConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nodes",
      "storageKey": null,
      "args": null,
      "concreteType": "CaseStudy",
      "plural": true,
      "selections": [
        (v3/*: any*/)
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCaseStudyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCaseStudyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCaseStudyMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyMutation(\n  $input: DeleteCaseStudyInput!\n) {\n  deleteCaseStudy(input: $input) {\n    clientByClientRowId {\n      rowId\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6d9424032e086bef7003d668c0ad440b';
export default node;
