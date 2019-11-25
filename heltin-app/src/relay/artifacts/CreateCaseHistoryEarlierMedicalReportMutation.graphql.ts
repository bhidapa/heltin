/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateCaseHistoryEarlierMedicalReportInput = {
    readonly caseHistoryRowId: string;
    readonly clientMutationId?: string | null;
    readonly fileData: string;
    readonly fileName: string;
};
export type CreateCaseHistoryEarlierMedicalReportMutationVariables = {
    input: CreateCaseHistoryEarlierMedicalReportInput;
};
export type CreateCaseHistoryEarlierMedicalReportMutationResponse = {
    readonly createCaseHistoryEarlierMedicalReport: {
        readonly caseHistoryByCaseHistoryRowId: {
            readonly caseHistoryEarlierMedicalReportsByCaseHistoryRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports">;
                }>;
            };
        };
    } | null;
};
export type CreateCaseHistoryEarlierMedicalReportMutation = {
    readonly response: CreateCaseHistoryEarlierMedicalReportMutationResponse;
    readonly variables: CreateCaseHistoryEarlierMedicalReportMutationVariables;
};



/*
mutation CreateCaseHistoryEarlierMedicalReportMutation(
  $input: CreateCaseHistoryEarlierMedicalReportInput!
) {
  createCaseHistoryEarlierMedicalReport(input: $input) {
    caseHistoryByCaseHistoryRowId {
      caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          ...CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports
          id
        }
      }
      id
    }
  }
}

fragment CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports on CaseHistoryEarlierMedicalReport {
  id
  rowId
  file: fileByFileRowId {
    rowId
    name
    data
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseHistoryEarlierMedicalReportInput!",
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
    "name": "CreateCaseHistoryEarlierMedicalReportMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseHistoryEarlierMedicalReport",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryEarlierMedicalReportPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseHistoryByCaseHistoryRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistory",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseHistoryEarlierMedicalReportsByCaseHistoryRowId",
                "storageKey": "caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryEarlierMedicalReportsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseHistoryEarlierMedicalReport",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports",
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
    "name": "CreateCaseHistoryEarlierMedicalReportMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseHistoryEarlierMedicalReport",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryEarlierMedicalReportPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseHistoryByCaseHistoryRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistory",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseHistoryEarlierMedicalReportsByCaseHistoryRowId",
                "storageKey": "caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryEarlierMedicalReportsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseHistoryEarlierMedicalReport",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "data",
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
    "name": "CreateCaseHistoryEarlierMedicalReportMutation",
    "id": null,
    "text": "mutation CreateCaseHistoryEarlierMedicalReportMutation(\n  $input: CreateCaseHistoryEarlierMedicalReportInput!\n) {\n  createCaseHistoryEarlierMedicalReport(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports on CaseHistoryEarlierMedicalReport {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    data\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6816e6d332ea657db2a448c4b0fa6fe5';
export default node;
