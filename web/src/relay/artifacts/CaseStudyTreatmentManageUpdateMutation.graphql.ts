/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpdateCaseStudyTreatmentInput = {
    clientMutationId?: string | null;
    rowId: string;
    external: boolean;
    startedAt: string;
    endedAt: string;
    title: string;
    description?: string | null;
    score?: number | null;
};
export type CaseStudyTreatmentManageUpdateMutationVariables = {
    input: UpdateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageUpdateMutationResponse = {
    readonly updateCaseStudyTreatment: {
        readonly caseStudyTreatment: {
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudyTreatment">;
        } | null;
    } | null;
};
export type CaseStudyTreatmentManageUpdateMutation = {
    readonly response: CaseStudyTreatmentManageUpdateMutationResponse;
    readonly variables: CaseStudyTreatmentManageUpdateMutationVariables;
};



/*
mutation CaseStudyTreatmentManageUpdateMutation(
  $input: UpdateCaseStudyTreatmentInput!
) {
  updateCaseStudyTreatment(input: $input) {
    caseStudyTreatment {
      ...CaseStudyTreatmentManage_caseStudyTreatment
      id
    }
  }
}

fragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {
  rowId
  title
  description
  score
  startedAt
  endedAt
  external
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_caseStudyTreatment"
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
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rowId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "score",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "external",
                "storageKey": null
              },
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
    ]
  },
  "params": {
    "cacheID": "397459d9ae73ecf1d882f9011785f7d0",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageUpdateMutation(\n  $input: UpdateCaseStudyTreatmentInput!\n) {\n  updateCaseStudyTreatment(input: $input) {\n    caseStudyTreatment {\n      ...CaseStudyTreatmentManage_caseStudyTreatment\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {\n  rowId\n  title\n  description\n  score\n  startedAt\n  endedAt\n  external\n}\n"
  }
};
})();
(node as any).hash = 'cbb416b0807fbfa304d098b362818d8f';
export default node;
