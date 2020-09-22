/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyConclusionFileInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteCaseStudyConclusionFileMutationVariables = {
    input: DeleteCaseStudyConclusionFileInput;
};
export type DeleteCaseStudyConclusionFileMutationResponse = {
    readonly deleteCaseStudyConclusionFile: {
        readonly caseStudyConclusionByCaseStudyConclusionRowId: {
            readonly caseStudyConclusionFilesByCaseStudyConclusionRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
                }>;
            };
        };
    } | null;
};
export type DeleteCaseStudyConclusionFileMutation = {
    readonly response: DeleteCaseStudyConclusionFileMutationResponse;
    readonly variables: DeleteCaseStudyConclusionFileMutationVariables;
};



/*
mutation DeleteCaseStudyConclusionFileMutation(
  $input: DeleteCaseStudyConclusionFileInput!
) {
  deleteCaseStudyConclusionFile(input: $input) {
    caseStudyConclusionByCaseStudyConclusionRowId {
      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
          id
        }
      }
      id
    }
  }
}

fragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {
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
    "name": "DeleteCaseStudyConclusionFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusionFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyConclusionFilesConnection",
                "kind": "LinkedField",
                "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudyConclusionFile",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "DeleteCaseStudyConclusionFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusionFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyConclusionFilesConnection",
                "kind": "LinkedField",
                "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudyConclusionFile",
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
                "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "cacheID": "4a084683c7e64c2f38670fb502fe0b81",
    "id": null,
    "metadata": {},
    "name": "DeleteCaseStudyConclusionFileMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyConclusionFileMutation(\n  $input: DeleteCaseStudyConclusionFileInput!\n) {\n  deleteCaseStudyConclusionFile(input: $input) {\n    caseStudyConclusionByCaseStudyConclusionRowId {\n      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '404809c5b58b2bc47787fca6352acc18';
export default node;
