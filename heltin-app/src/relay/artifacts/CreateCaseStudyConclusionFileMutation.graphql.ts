/* tslint:disable */
/* @relayHash a04df3d1d3a1f9be2e511004ab04c3bd */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyConclusionFileInput = {
    readonly caseStudyConclusionRowId: string;
    readonly clientMutationId?: string | null;
    readonly fileData: string;
    readonly fileName: string;
};
export type CreateCaseStudyConclusionFileMutationVariables = {
    input: CreateCaseStudyConclusionFileInput;
};
export type CreateCaseStudyConclusionFileMutationResponse = {
    readonly createCaseStudyConclusionFile: {
        readonly caseStudyConclusionByCaseStudyConclusionRowId: {
            readonly caseStudyConclusionFilesByCaseStudyConclusionRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
                }>;
            };
        };
    } | null;
};
export type CreateCaseStudyConclusionFileMutation = {
    readonly response: CreateCaseStudyConclusionFileMutationResponse;
    readonly variables: CreateCaseStudyConclusionFileMutationVariables;
};



/*
mutation CreateCaseStudyConclusionFileMutation(
  $input: CreateCaseStudyConclusionFileInput!
) {
  createCaseStudyConclusionFile(input: $input) {
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
    "type": "CreateCaseStudyConclusionFileInput!",
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
    "name": "CreateCaseStudyConclusionFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyConclusionFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionFilePayload",
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
    "name": "CreateCaseStudyConclusionFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyConclusionFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionFilePayload",
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
    "name": "CreateCaseStudyConclusionFileMutation",
    "id": null,
    "text": "mutation CreateCaseStudyConclusionFileMutation(\n  $input: CreateCaseStudyConclusionFileInput!\n) {\n  createCaseStudyConclusionFile(input: $input) {\n    caseStudyConclusionByCaseStudyConclusionRowId {\n      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e60fa8b9a76876073ebdac53c25290dd';
export default node;
