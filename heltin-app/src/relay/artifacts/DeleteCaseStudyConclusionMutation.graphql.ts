/* tslint:disable */
/* @relayHash 28a3b7fa63e865ac4c2af3eb47740583 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyConclusionInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
};
export type DeleteCaseStudyConclusionMutationVariables = {
    input: DeleteCaseStudyConclusionInput;
};
export type DeleteCaseStudyConclusionMutationResponse = {
    readonly deleteCaseStudyConclusion: {
        readonly clientMutationId: string | null;
    } | null;
};
export type DeleteCaseStudyConclusionMutation = {
    readonly response: DeleteCaseStudyConclusionMutationResponse;
    readonly variables: DeleteCaseStudyConclusionMutationVariables;
};



/*
mutation DeleteCaseStudyConclusionMutation(
  $input: DeleteCaseStudyConclusionInput!
) {
  deleteCaseStudyConclusion(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyConclusionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCaseStudyConclusion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCaseStudyConclusionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCaseStudyConclusionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCaseStudyConclusionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCaseStudyConclusionMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyConclusionMutation(\n  $input: DeleteCaseStudyConclusionInput!\n) {\n  deleteCaseStudyConclusion(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ca06210c15f6bef82c8774d315ee1453';
export default node;
