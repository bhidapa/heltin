/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  privateDescription
  score
  startedAt
  endedAt
  external
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudyTreatment",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "caseStudy",
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_caseStudy"
              }
            ],
            "storageKey": null
          },
          {
            "alias": "caseStudyTreatmentFiles",
            "args": (v4/*: any*/),
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyTreatmentManage_caseStudyTreatment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudyTreatment",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "privateDescription",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "score",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "external",
            "storageKey": null
          },
          {
            "alias": "caseStudy",
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              {
                "alias": "client",
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "clientByClientRowId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fullName",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "caseStudyTreatmentFiles",
            "args": (v4/*: any*/),
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
                  (v6/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": "file",
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "fileByFileRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a4462de6a1e08c8a638697c196b4710a",
    "id": null,
    "metadata": {},
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "operationKind": "query",
    "text": "query CaseStudiesTreatmentDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudyTreatment: caseStudyTreatmentByRowId(rowId: $rowId) {\n    rowId\n    description\n    ...CaseStudyTreatmentManage_caseStudyTreatment\n    caseStudy: caseStudyByCaseStudyRowId {\n      ...CaseStudyTreatmentManage_caseStudy\n      id\n    }\n    caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {\n  rowId\n  title\n  description\n  privateDescription\n  score\n  startedAt\n  endedAt\n  external\n}\n"
  }
};
})();
(node as any).hash = 'fbcb992bbf87d68b9ecbe07f619e40e0';
export default node;
