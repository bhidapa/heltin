/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseHistoryEarlierMedicalReportInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
};
export type DeleteCaseHistoryEarlierMedicalReportMutationVariables = {
    input: DeleteCaseHistoryEarlierMedicalReportInput;
};
export type DeleteCaseHistoryEarlierMedicalReportMutationResponse = {
    readonly deleteCaseHistoryEarlierMedicalReport: {
        readonly caseHistoryByCaseHistoryRowId: {
            readonly caseHistoryEarlierMedicalReportsByCaseHistoryRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports">;
                }>;
            };
        };
    } | null;
};
export type DeleteCaseHistoryEarlierMedicalReportMutation = {
    readonly response: DeleteCaseHistoryEarlierMedicalReportMutationResponse;
    readonly variables: DeleteCaseHistoryEarlierMedicalReportMutationVariables;
};



/*
mutation DeleteCaseHistoryEarlierMedicalReportMutation(
  $input: DeleteCaseHistoryEarlierMedicalReportInput!
) {
  deleteCaseHistoryEarlierMedicalReport(input: $input) {
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
    "type": "DeleteCaseHistoryEarlierMedicalReportInput!",
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
    "name": "DeleteCaseHistoryEarlierMedicalReportMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseHistoryEarlierMedicalReport",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryEarlierMedicalReportPayload",
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
    "name": "DeleteCaseHistoryEarlierMedicalReportMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseHistoryEarlierMedicalReport",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryEarlierMedicalReportPayload",
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
    "name": "DeleteCaseHistoryEarlierMedicalReportMutation",
    "id": null,
    "text": "mutation DeleteCaseHistoryEarlierMedicalReportMutation(\n  $input: DeleteCaseHistoryEarlierMedicalReportInput!\n) {\n  deleteCaseHistoryEarlierMedicalReport(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryEarlierMedicalReportsByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports on CaseHistoryEarlierMedicalReport {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    data\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '304f1ff4406308fb469ec6a9b6bdf415';
export default node;
