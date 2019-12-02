/* tslint:disable */
/* @relayHash f2b9a719d82f6bbb4948e80ddc297a93 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyConclusionFileInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyConclusionFileInput!",
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
    "name": "DeleteCaseStudyConclusionFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyConclusionFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
                "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyConclusionFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyConclusionFile",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles",
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
    "name": "DeleteCaseStudyConclusionFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyConclusionFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
                "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseStudyConclusionFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyConclusionFile",
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
    "name": "DeleteCaseStudyConclusionFileMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyConclusionFileMutation(\n  $input: DeleteCaseStudyConclusionFileInput!\n) {\n  deleteCaseStudyConclusionFile(input: $input) {\n    caseStudyConclusionByCaseStudyConclusionRowId {\n      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '404809c5b58b2bc47787fca6352acc18';
export default node;
