/* tslint:disable */
/* @relayHash 535fe07fc48ad353b8f83e25c233ea5d */

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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CaseStudiesConclusionDetailPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudyConclusion",
        "name": "caseStudyConclusionByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
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
                "name": "CaseStudyConclusionManage_caseStudy",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudyConclusionFiles",
            "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v4/*: any*/),
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
          },
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudyConclusion",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CaseStudiesConclusionDetailPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudyConclusion",
        "name": "caseStudyConclusionByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "concludedAt",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
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
                  (v5/*: any*/)
                ]
              },
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudyConclusionFiles",
            "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v4/*: any*/),
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
                  (v5/*: any*/),
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
                      (v5/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CaseStudiesConclusionDetailPageQuery",
    "id": null,
    "text": "query CaseStudiesConclusionDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudyConclusion: caseStudyConclusionByRowId(rowId: $rowId) {\n    rowId\n    description\n    ...CaseStudyConclusionManage_caseStudyConclusion\n    caseStudy: caseStudyByCaseStudyRowId {\n      ...CaseStudyConclusionManage_caseStudy\n      id\n    }\n    caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudyConclusion on CaseStudyConclusion {\n  rowId\n  type\n  concludedAt\n  description\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '33f067469e7c31f119badb3a8ddd035f';
export default node;
