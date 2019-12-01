/* tslint:disable */
/* @relayHash 811a61e1be9d0fc3a83d77c4eaf18b3f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTreatmentDetailPageQueryVariables = {
    rowId: string;
};
export type CaseStudiesTreatmentDetailPageQueryResponse = {
    readonly caseStudyTreatment: {
        readonly rowId: string;
        readonly description: string | null;
        readonly caseStudy: {
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
        };
        readonly caseStudyTreatmentFiles: {
            readonly nodes: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
            }>;
        };
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudyTreatment">;
    } | null;
};
export type CaseStudiesTreatmentDetailPageQuery = {
    readonly response: CaseStudiesTreatmentDetailPageQueryResponse;
    readonly variables: CaseStudiesTreatmentDetailPageQueryVariables;
};



/*
query CaseStudiesTreatmentDetailPageQuery(
  $rowId: UUID!
) {
  caseStudyTreatment: caseStudyTreatmentByRowId(rowId: $rowId) {
    rowId
    description
    ...CaseStudyTreatmentManage_caseStudyTreatment
    caseStudy: caseStudyByCaseStudyRowId {
      ...CaseStudyTreatmentManage_caseStudy
      id
    }
    caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles
        id
      }
    }
    id
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

fragment CaseStudyTreatmentManage_caseStudy on CaseStudy {
  rowId
  title
  client: clientByClientRowId {
    rowId
    fullName
    id
  }
}

fragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {
  rowId
  title
  description
  score
  startedAt
  endedAt
  external
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudyTreatment",
        "name": "caseStudyTreatmentByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseStudy",
            "name": "caseStudyByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_caseStudy",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudyTreatmentFiles",
            "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v4/*: any*/),
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
          },
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyTreatmentManage_caseStudyTreatment",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudyTreatment",
        "name": "caseStudyTreatmentByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "score",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "startedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "endedAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "external",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudy",
            "name": "caseStudyByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fullName",
                    "args": null,
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ]
              },
              (v6/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudyTreatmentFiles",
            "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v4/*: any*/),
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
                  (v6/*: any*/),
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": "file",
                    "name": "fileByFileRowId",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "File",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "id": null,
    "text": "query CaseStudiesTreatmentDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudyTreatment: caseStudyTreatmentByRowId(rowId: $rowId) {\n    rowId\n    description\n    ...CaseStudyTreatmentManage_caseStudyTreatment\n    caseStudy: caseStudyByCaseStudyRowId {\n      ...CaseStudyTreatmentManage_caseStudy\n      id\n    }\n    caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {\n  rowId\n  title\n  description\n  score\n  startedAt\n  endedAt\n  external\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '39001a5031dfb559a20b9fff7cef7ee5';
export default node;
