/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyTreatmentFileInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteCaseStudyTreatmentFileMutationVariables = {
    input: DeleteCaseStudyTreatmentFileInput;
};
export type DeleteCaseStudyTreatmentFileMutationResponse = {
    readonly deleteCaseStudyTreatmentFile: {
        readonly caseStudyTreatmentByCaseStudyTreatmentRowId: {
            readonly caseStudyTreatmentFilesByCaseStudyTreatmentRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
                }>;
            };
        };
    } | null;
};
export type DeleteCaseStudyTreatmentFileMutation = {
    readonly response: DeleteCaseStudyTreatmentFileMutationResponse;
    readonly variables: DeleteCaseStudyTreatmentFileMutationVariables;
};



/*
mutation DeleteCaseStudyTreatmentFileMutation(
  $input: DeleteCaseStudyTreatmentFileInput!
) {
  deleteCaseStudyTreatmentFile(input: $input) {
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
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyTreatmentFile",
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
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyTreatmentFile",
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
    "cacheID": "ed0e3270f3928277706b9ad38a07b982",
    "id": null,
    "metadata": {},
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyTreatmentFileMutation(\n  $input: DeleteCaseStudyTreatmentFileInput!\n) {\n  deleteCaseStudyTreatmentFile(input: $input) {\n    caseStudyTreatmentByCaseStudyTreatmentRowId {\n      caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '15de1a83e026ff1329d7b55dcd91c4ee';
export default node;
