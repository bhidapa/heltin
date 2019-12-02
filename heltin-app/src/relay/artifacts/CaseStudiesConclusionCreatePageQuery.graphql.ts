/* tslint:disable */
/* @relayHash 5551a85ee68752c0f49c78a16657b165 */

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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CaseStudiesConclusionCreatePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudy",
        "name": "caseStudyByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudy",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CaseStudiesConclusionCreatePageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudy",
        "name": "caseStudyByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v3/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CaseStudiesConclusionCreatePageQuery",
    "id": null,
    "text": "query CaseStudiesConclusionCreatePageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    ...CaseStudyConclusionManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e507288bb2755afb6755165437b3aeec';
export default node;
