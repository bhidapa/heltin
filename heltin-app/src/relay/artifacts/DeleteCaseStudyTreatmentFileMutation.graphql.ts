/* tslint:disable */
/* @relayHash c599d8e33d934eab6cd5533a4d97899e */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyTreatmentFileInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyTreatmentFileInput!",
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
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyTreatmentFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentFilePayload",
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
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyTreatmentFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyTreatmentFilePayload",
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
    "name": "DeleteCaseStudyTreatmentFileMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyTreatmentFileMutation(\n  $input: DeleteCaseStudyTreatmentFileInput!\n) {\n  deleteCaseStudyTreatmentFile(input: $input) {\n    caseStudyTreatmentByCaseStudyTreatmentRowId {\n      caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '15de1a83e026ff1329d7b55dcd91c4ee';
export default node;
