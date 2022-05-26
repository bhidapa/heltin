/**
 * @generated SignedSource<<bd7e8b713973c8040c1e91d7eeebfe90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManageAfterBuildReportQuery$variables = {
  treatmentRowId: string;
};
export type CaseStudyTreatmentManageAfterBuildReportQuery$data = {
  readonly caseStudyTreatmentByRowId: {
    readonly caseStudyTreatmentFilesByCaseStudyTreatmentRowId: {
      readonly __id: string;
      readonly nodes: ReadonlyArray<{
        readonly file: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        };
      }>;
    };
  } | null;
};
export type CaseStudyTreatmentManageAfterBuildReportQuery = {
  variables: CaseStudyTreatmentManageAfterBuildReportQuery$variables;
  response: CaseStudyTreatmentManageAfterBuildReportQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
    "variableName": "treatmentRowId"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT_DESC"
  }
],
v3 = {
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageAfterBuildReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                    "path": "caseStudyTreatmentByRowId.caseStudyTreatmentFilesByCaseStudyTreatmentRowId.nodes.file"
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:\"CREATED_AT_DESC\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyTreatmentManageAfterBuildReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                      (v4/*: any*/),
                      (v5/*: any*/),
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
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isTherapist",
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:\"CREATED_AT_DESC\")"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4f25eccee9003792b94f22a0fd1eb0ef",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageAfterBuildReportQuery",
    "operationKind": "query",
    "text": "query CaseStudyTreatmentManageAfterBuildReportQuery(\n  $treatmentRowId: UUID!\n) {\n  caseStudyTreatmentByRowId(rowId: $treatmentRowId) {\n    caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: CREATED_AT_DESC) {\n      nodes {\n        file: fileByFileRowId {\n          ...Files_files\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    isTherapist\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b658cdad41be72ebff9e47228805b42c";
}

export default node;
