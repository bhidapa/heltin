/**
 * @generated SignedSource<<5dc89d6a558e97d05879cbd7f998bebd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SetPrimaryCaseStudyTherapistInput = {
  clientMutationId?: string | null;
  caseStudyRowId: string;
  therapistRowId: string;
};
export type CaseStudyAssignedTherapistsManageSetPrimaryMutation$variables = {
  input: SetPrimaryCaseStudyTherapistInput;
};
export type CaseStudyAssignedTherapistsManageSetPrimaryMutation$data = {
  readonly setPrimaryCaseStudyTherapist: {
    readonly caseStudyByCaseStudyRowId: {
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_casyStudy">;
    } | null;
  } | null;
};
export type CaseStudyAssignedTherapistsManageSetPrimaryMutation = {
  variables: CaseStudyAssignedTherapistsManageSetPrimaryMutation$variables;
  response: CaseStudyAssignedTherapistsManageSetPrimaryMutation$data;
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
    "name": "CaseStudyAssignedTherapistsManageSetPrimaryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SetPrimaryCaseStudyTherapistPayload",
        "kind": "LinkedField",
        "name": "setPrimaryCaseStudyTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyAssignedTherapistsManage_casyStudy"
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
    "name": "CaseStudyAssignedTherapistsManageSetPrimaryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SetPrimaryCaseStudyTherapistPayload",
        "kind": "LinkedField",
        "name": "setPrimaryCaseStudyTherapist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "assignedTherapists",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": [
                      "CREATED_AT_ASC"
                    ]
                  }
                ],
                "concreteType": "CaseStudyTherapistsConnection",
                "kind": "LinkedField",
                "name": "caseStudyTherapistsByCaseStudyRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudyTherapist",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "primary",
                        "storageKey": null
                      },
                      {
                        "alias": "therapist",
                        "args": null,
                        "concreteType": "Therapist",
                        "kind": "LinkedField",
                        "name": "therapistByTherapistRowId",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "caseStudyTherapistsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
              },
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
    "cacheID": "c4576fd384e6899355f821ce40dbf4a9",
    "id": null,
    "metadata": {},
    "name": "CaseStudyAssignedTherapistsManageSetPrimaryMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyAssignedTherapistsManageSetPrimaryMutation(\n  $input: SetPrimaryCaseStudyTherapistInput!\n) {\n  setPrimaryCaseStudyTherapist(input: $input) {\n    caseStudyByCaseStudyRowId {\n      ...CaseStudyAssignedTherapistsManage_casyStudy\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "902b7d6d19b3db60445c9e167bd99b99";
}

export default node;
