/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTreatmentCreatePageQueryVariables = {
    rowId: string;
};
export type CaseStudiesTreatmentCreatePageQueryResponse = {
    readonly caseStudy: {
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
    } | null;
};
export type CaseStudiesTreatmentCreatePageQuery = {
    readonly response: CaseStudiesTreatmentCreatePageQueryResponse;
    readonly variables: CaseStudiesTreatmentCreatePageQueryVariables;
};



/*
query CaseStudiesTreatmentCreatePageQuery(
  $rowId: UUID!
) {
  caseStudy: caseStudyByRowId(rowId: $rowId) {
    ...CaseStudyTreatmentManage_caseStudy
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
    "name": "CaseStudiesTreatmentCreatePageQuery",
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
            "name": "CaseStudyTreatmentManage_caseStudy"
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
    "name": "CaseStudiesTreatmentCreatePageQuery",
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
    "name": "CaseStudiesTreatmentCreatePageQuery",
    "operationKind": "query",
    "text": "query CaseStudiesTreatmentCreatePageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    ...CaseStudyTreatmentManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9f4cb6e3c14cd13035294c770a0a3a9e';
export default node;
