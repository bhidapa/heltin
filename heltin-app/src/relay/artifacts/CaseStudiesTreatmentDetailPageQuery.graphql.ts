/* tslint:disable */
/* @relayHash 9579b81d9c224a50c84e657f974e5c48 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTreatmentDetailPageQueryVariables = {
    rowId: string;
};
export type CaseStudiesTreatmentDetailPageQueryResponse = {
    readonly caseStudyTreatment: {
        readonly description: string | null;
        readonly caseStudy: {
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
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
    description
    ...CaseStudyTreatmentManage_caseStudyTreatment
    caseStudy: caseStudyByCaseStudyRowId {
      ...CaseStudyTreatmentManage_caseStudy
      id
    }
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
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v4 = {
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
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
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fullName",
                    "args": null,
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ]
              },
              (v4/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CaseStudiesTreatmentDetailPageQuery",
    "id": null,
    "text": "query CaseStudiesTreatmentDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudyTreatment: caseStudyTreatmentByRowId(rowId: $rowId) {\n    description\n    ...CaseStudyTreatmentManage_caseStudyTreatment\n    caseStudy: caseStudyByCaseStudyRowId {\n      ...CaseStudyTreatmentManage_caseStudy\n      id\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  description\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {\n  rowId\n  title\n  description\n  score\n  startedAt\n  endedAt\n  external\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '39f5ca3b11ca32ae32d00508683dc07c';
export default node;
