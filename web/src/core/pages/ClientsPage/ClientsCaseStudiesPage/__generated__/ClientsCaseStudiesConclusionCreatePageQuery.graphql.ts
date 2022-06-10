/**
 * @generated SignedSource<<bad71aff546d2307c33fb35e0a531622>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesConclusionCreatePageQuery$variables = {
  caseStudyRowId: string;
};
export type ClientsCaseStudiesConclusionCreatePageQuery$data = {
  readonly caseStudy: {
    readonly client: {
      readonly fullName: string;
    };
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
  } | null;
};
export type ClientsCaseStudiesConclusionCreatePageQuery = {
  response: ClientsCaseStudiesConclusionCreatePageQuery$data;
  variables: ClientsCaseStudiesConclusionCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "caseStudyRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "caseStudyRowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
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
    "name": "ClientsCaseStudiesConclusionCreatePageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "RequiredField",
            "field": {
              "alias": "client",
              "args": null,
              "concreteType": "Client",
              "kind": "LinkedField",
              "name": "clientByClientRowId",
              "plural": false,
              "selections": [
                (v3/*: any*/)
              ],
              "storageKey": null
            },
            "action": "THROW",
            "path": "caseStudy.client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudy"
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
    "name": "ClientsCaseStudiesConclusionCreatePageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c06227fbf51cf23cf79ec106289d0dfd",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesConclusionCreatePageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesConclusionCreatePageQuery(\n  $caseStudyRowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    title\n    client: clientByClientRowId {\n      fullName\n      id\n    }\n    ...CaseStudyConclusionManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "c61d7010e853c8b79cabf87e894a1d1e";
}

export default node;
