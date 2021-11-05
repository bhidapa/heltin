/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyTreatmentFileInput = {
    caseStudyTreatmentRowId: string;
    clientMutationId?: string | null | undefined;
    fileData: string;
    fileName: string;
};
export type CreateCaseStudyTreatmentFileMutationVariables = {
    input: CreateCaseStudyTreatmentFileInput;
};
export type CreateCaseStudyTreatmentFileMutationResponse = {
    readonly createCaseStudyTreatmentFile: {
        readonly caseStudyTreatmentByCaseStudyTreatmentRowId: {
            readonly caseStudyTreatmentFilesByCaseStudyTreatmentRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
                }>;
            };
        };
    } | null;
};
export type CreateCaseStudyTreatmentFileMutation = {
    readonly response: CreateCaseStudyTreatmentFileMutationResponse;
    readonly variables: CreateCaseStudyTreatmentFileMutationVariables;
};



/*
mutation CreateCaseStudyTreatmentFileMutation(
  $input: CreateCaseStudyTreatmentFileInput!
) {
  createCaseStudyTreatmentFile(input: $input) {
    caseStudyTreatmentByCaseStudyTreatmentRowId {
      caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles
          id
        }
      }
      id
    }
  }
}

fragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {
  id
  rowId
  file: fileByFileRowId {
    rowId
    name
    id
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
v2 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCaseStudyTreatmentFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentFilePayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatmentFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
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
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "CreateCaseStudyTreatmentFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentFilePayload",
        "kind": "LinkedField",
        "name": "createCaseStudyTreatmentFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": "file",
                        "args": null,
                        "concreteType": "File",
                        "kind": "LinkedField",
                        "name": "fileByFileRowId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "cacheID": "acdc3668cb0d0dc9ca3c01f49e707010",
    "id": null,
    "metadata": {},
    "name": "CreateCaseStudyTreatmentFileMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseStudyTreatmentFileMutation(\n  $input: CreateCaseStudyTreatmentFileInput!\n) {\n  createCaseStudyTreatmentFile(input: $input) {\n    caseStudyTreatmentByCaseStudyTreatmentRowId {\n      caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e1fc5354958d214ae4d2f063a6ab3e5c';
export default node;
