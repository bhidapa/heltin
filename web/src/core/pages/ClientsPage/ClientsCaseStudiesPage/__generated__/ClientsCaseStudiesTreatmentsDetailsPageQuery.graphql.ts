/**
 * @generated SignedSource<<015e1ef0f67f43cf89fff89b942ff26e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesTreatmentsDetailsPageQuery$variables = {
  caseStudyRowId: string;
  treatmentRowId: string;
};
export type ClientsCaseStudiesTreatmentsDetailsPageQuery$data = {
  readonly caseStudy: {
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
  } | null;
  readonly treatment: {
    readonly id: string;
    readonly rowId: string;
    readonly title: string;
    readonly caseStudyRowId: string;
    readonly caseStudy: {
      readonly title: string;
      readonly client: {
        readonly fullName: string;
      };
    };
    readonly treatmentFiles: {
      readonly __id: string;
      readonly nodes: ReadonlyArray<{
        readonly file: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        };
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
  };
};
export type ClientsCaseStudiesTreatmentsDetailsPageQuery = {
  variables: ClientsCaseStudiesTreatmentsDetailsPageQuery$variables;
  response: ClientsCaseStudiesTreatmentsDetailsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "caseStudyRowId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "treatmentRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "caseStudyRowId"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "treatmentRowId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "caseStudyRowId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT_DESC"
  }
],
v9 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCaseStudiesTreatmentsDetailsPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyTreatmentManage_caseStudy"
          }
        ],
        "storageKey": null
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": "treatment",
          "args": (v2/*: any*/),
          "concreteType": "CaseStudyTreatment",
          "kind": "LinkedField",
          "name": "caseStudyTreatmentByRowId",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            {
              "kind": "RequiredField",
              "field": {
                "alias": "caseStudy",
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "RequiredField",
                    "field": {
                      "alias": "client",
                      "args": null,
                      "concreteType": "Client",
                      "kind": "LinkedField",
                      "name": "clientByClientRowId",
                      "plural": false,
                      "selections": [
                        (v7/*: any*/)
                      ],
                      "storageKey": null
                    },
                    "action": "THROW",
                    "path": "treatment.caseStudy.client"
                  }
                ],
                "storageKey": null
              },
              "action": "THROW",
              "path": "treatment.caseStudy"
            },
            {
              "alias": "treatmentFiles",
              "args": (v8/*: any*/),
              "concreteType": "CaseStudyTreatmentFilesConnection",
              "kind": "LinkedField",
              "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CaseStudyTreatmentFile",
                  "kind": "LinkedField",
                  "name": "nodes",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "RequiredField",
                      "field": {
                        "alias": "file",
                        "args": null,
                        "concreteType": "File",
                        "kind": "LinkedField",
                        "name": "fileByFileRowId",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "Files_files"
                          }
                        ],
                        "storageKey": null
                      },
                      "action": "THROW",
                      "path": "treatment.treatmentFiles.nodes.file"
                    }
                  ],
                  "storageKey": null
                },
                (v9/*: any*/)
              ],
              "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:\"CREATED_AT_DESC\")"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CaseStudyTreatmentManage_treatment"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "treatment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsCaseStudiesTreatmentsDetailsPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "treatment",
        "args": (v2/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": "caseStudy",
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "alias": "client",
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "clientByClientRowId",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "treatmentFiles",
            "args": (v8/*: any*/),
            "concreteType": "CaseStudyTreatmentFilesConnection",
            "kind": "LinkedField",
            "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyTreatmentFile",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": "file",
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "fileByFileRowId",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "link",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "protected",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": "createdBy",
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "userByCreatedBy",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isTherapist",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:\"CREATED_AT_DESC\")"
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
            "name": "privateDescription",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fe7980e08f953b40b21e15cd5a071aa9",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesTreatmentsDetailsPageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesTreatmentsDetailsPageQuery(\n  $caseStudyRowId: UUID!\n  $treatmentRowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    ...CaseStudyTreatmentManage_caseStudy\n    id\n  }\n  treatment: caseStudyTreatmentByRowId(rowId: $treatmentRowId) {\n    id\n    rowId\n    title\n    caseStudyRowId\n    caseStudy: caseStudyByCaseStudyRowId {\n      title\n      client: clientByClientRowId {\n        fullName\n        id\n      }\n      id\n    }\n    treatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: CREATED_AT_DESC) {\n      nodes {\n        file: fileByFileRowId {\n          ...Files_files\n          id\n        }\n        id\n      }\n    }\n    ...CaseStudyTreatmentManage_treatment\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    isTherapist\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "babf4ff5525096c265ce62ef2daa4549";
}

export default node;
