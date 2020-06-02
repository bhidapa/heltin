/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesConclusionCreatePageQueryVariables = {
    rowId: string;
};
export type CaseStudiesConclusionCreatePageQueryResponse = {
    readonly caseStudy: {
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
    } | null;
};
export type CaseStudiesConclusionCreatePageQuery = {
    readonly response: CaseStudiesConclusionCreatePageQueryResponse;
    readonly variables: CaseStudiesConclusionCreatePageQueryVariables;
};



/*
query CaseStudiesConclusionCreatePageQuery(
  $rowId: UUID!
) {
  caseStudy: caseStudyByRowId(rowId: $rowId) {
    ...CaseStudyConclusionManage_caseStudy
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!"
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudiesConclusionCreatePageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudy"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudiesConclusionCreatePageQuery",
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CaseStudiesConclusionCreatePageQuery",
    "operationKind": "query",
    "text": "query CaseStudiesConclusionCreatePageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    ...CaseStudyConclusionManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e507288bb2755afb6755165437b3aeec';
export default node;
