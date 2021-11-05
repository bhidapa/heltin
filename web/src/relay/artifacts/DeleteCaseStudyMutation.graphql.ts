/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteCaseStudyInput = {
    clientMutationId?: string | null | undefined;
    rowId: string;
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
  "kind": "LinkedField",
  "name": "caseStudiesByClientRowId",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CaseStudy",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudy",
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
              (v4/*: any*/)
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
    "name": "DeleteCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudy",
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
              (v4/*: any*/),
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
    "cacheID": "1293d28aa7f1886788009af963539b20",
    "id": null,
    "metadata": {},
    "name": "DeleteCaseStudyMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyMutation(\n  $input: DeleteCaseStudyInput!\n) {\n  deleteCaseStudy(input: $input) {\n    clientByClientRowId {\n      rowId\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6d9424032e086bef7003d668c0ad440b';
export default node;
