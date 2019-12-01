/* tslint:disable */
/* @relayHash e131406af279f9543e96b2b10051938f */

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
  description
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
    "name": "CaseStudiesTreatmentCreatePageQuery",
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
            "name": "CaseStudyTreatmentManage_caseStudy",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CaseStudiesTreatmentCreatePageQuery",
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
            "name": "description",
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
    "name": "CaseStudiesTreatmentCreatePageQuery",
    "id": null,
    "text": "query CaseStudiesTreatmentCreatePageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    ...CaseStudyTreatmentManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  description\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9f4cb6e3c14cd13035294c770a0a3a9e';
export default node;
