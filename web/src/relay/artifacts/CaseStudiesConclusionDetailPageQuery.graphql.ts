/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesConclusionDetailPageQueryVariables = {
    rowId: string;
};
export type CaseStudiesConclusionDetailPageQueryResponse = {
    readonly caseStudyConclusion: {
        readonly rowId: string;
        readonly description: string;
        readonly caseStudy: {
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
        };
        readonly caseStudyConclusionFiles: {
            readonly nodes: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
            }>;
        };
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudyConclusion">;
    } | null;
};
export type CaseStudiesConclusionDetailPageQuery = {
    readonly response: CaseStudiesConclusionDetailPageQueryResponse;
    readonly variables: CaseStudiesConclusionDetailPageQueryVariables;
};



/*
query CaseStudiesConclusionDetailPageQuery(
  $rowId: UUID!
) {
  caseStudyConclusion: caseStudyConclusionByRowId(rowId: $rowId) {
    rowId
    description
    ...CaseStudyConclusionManage_caseStudyConclusion
    caseStudy: caseStudyByCaseStudyRowId {
      ...CaseStudyConclusionManage_caseStudy
      id
    }
    caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
        id
      }
    }
    id
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

fragment CaseStudyConclusionManage_caseStudy on CaseStudy {
  rowId
  title
  client: clientByClientRowId {
    rowId
    fullName
    id
  }
}

fragment CaseStudyConclusionManage_caseStudyConclusion on CaseStudyConclusion {
  rowId
  type
  concludedAt
  description
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudiesConclusionDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudyConclusion",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
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
                "name": "CaseStudyConclusionManage_caseStudy"
              }
            ],
            "storageKey": null
          },
          {
            "alias": "caseStudyConclusionFiles",
            "args": (v4/*: any*/),
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudyConclusion"
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
    "name": "CaseStudiesConclusionDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudyConclusion",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "concludedAt",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
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
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "caseStudyConclusionFiles",
            "args": (v4/*: any*/),
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
                  (v5/*: any*/),
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
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2502f7346baaf348ba69fef0dba1b299",
    "id": null,
    "metadata": {},
    "name": "CaseStudiesConclusionDetailPageQuery",
    "operationKind": "query",
    "text": "query CaseStudiesConclusionDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudyConclusion: caseStudyConclusionByRowId(rowId: $rowId) {\n    rowId\n    description\n    ...CaseStudyConclusionManage_caseStudyConclusion\n    caseStudy: caseStudyByCaseStudyRowId {\n      ...CaseStudyConclusionManage_caseStudy\n      id\n    }\n    caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudyConclusion on CaseStudyConclusion {\n  rowId\n  type\n  concludedAt\n  description\n}\n"
  }
};
})();
(node as any).hash = '9cb49df9aa352b671c09c023b87b3825';
export default node;
