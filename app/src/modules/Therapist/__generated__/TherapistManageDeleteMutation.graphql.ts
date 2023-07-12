/**
 * @generated SignedSource<<30b2ce01f0b237e4e2836bce10501fc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTherapistInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type TherapistManageDeleteMutation$variables = {
  input: DeleteTherapistInput;
};
export type TherapistManageDeleteMutation$data = {
  readonly deleteTherapist: {
    readonly therapist: {
      readonly id: string;
    } | null;
  } | null;
};
export type TherapistManageDeleteMutation = {
  response: TherapistManageDeleteMutation$data;
  variables: TherapistManageDeleteMutation$variables;
};

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
    "concreteType": "DeleteTherapistPayload",
    "kind": "LinkedField",
    "name": "deleteTherapist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Therapist",
        "kind": "LinkedField",
        "name": "therapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "TherapistManageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TherapistManageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ee8674b7d73fcea11bdcd48feccdac26",
    "id": null,
    "metadata": {},
    "name": "TherapistManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TherapistManageDeleteMutation(\n  $input: DeleteTherapistInput!\n) {\n  deleteTherapist(input: $input) {\n    therapist {\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "327a0f08bf9777871bf4f2ed1f530a1e";
}

export default node;
