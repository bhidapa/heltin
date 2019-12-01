/* tslint:disable */
/* @relayHash 0540bf99d2a86c47c0cd50ee1dfaa347 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyTreatmentFileInput = {
    readonly caseStudyTreatmentRowId: string;
    readonly clientMutationId?: string | null;
    readonly fileData: string;
    readonly fileName: string;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseStudyTreatmentFileInput!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCaseStudyTreatmentFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyTreatmentFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
                "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyTreatmentFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyTreatmentFile",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCaseStudyTreatmentFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyTreatmentFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyTreatmentFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
                "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyTreatmentFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyTreatmentFile",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "file",
                        "name": "fileByFileRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "File",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCaseStudyTreatmentFileMutation",
    "id": null,
    "text": "mutation CreateCaseStudyTreatmentFileMutation(\n  $input: CreateCaseStudyTreatmentFileInput!\n) {\n  createCaseStudyTreatmentFile(input: $input) {\n    caseStudyTreatmentByCaseStudyTreatmentRowId {\n      caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e1fc5354958d214ae4d2f063a6ab3e5c';
export default node;
