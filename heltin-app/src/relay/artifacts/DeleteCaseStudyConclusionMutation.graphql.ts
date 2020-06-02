/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyConclusionInput = {
    clientMutationId?: string | null;
    rowId: string;
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyConclusionInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCaseStudyConclusionPayload",
    "kind": "LinkedField",
    "name": "deleteCaseStudyConclusion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteCaseStudyConclusionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteCaseStudyConclusionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteCaseStudyConclusionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyConclusionMutation(\n  $input: DeleteCaseStudyConclusionInput!\n) {\n  deleteCaseStudyConclusion(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ca06210c15f6bef82c8774d315ee1453';
export default node;
