/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteCaseStudyConclusionInput = {
    clientMutationId?: string | null | undefined;
    rowId: string;
};
export type CaseStudyConclusionManageDeleteMutationVariables = {
    input: DeleteCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageDeleteMutationResponse = {
    readonly deleteCaseStudyConclusion: {
        readonly clientMutationId: string | null;
    } | null;
};
export type CaseStudyConclusionManageDeleteMutation = {
    readonly response: CaseStudyConclusionManageDeleteMutationResponse;
    readonly variables: CaseStudyConclusionManageDeleteMutationVariables;
};



/*
mutation CaseStudyConclusionManageDeleteMutation(
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
    "name": "input"
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
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a74eda5fcb43728a360673c11da2d115",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageDeleteMutation(\n  $input: DeleteCaseStudyConclusionInput!\n) {\n  deleteCaseStudyConclusion(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '14768d6bb704731bf2ed0528308082da';
export default node;
