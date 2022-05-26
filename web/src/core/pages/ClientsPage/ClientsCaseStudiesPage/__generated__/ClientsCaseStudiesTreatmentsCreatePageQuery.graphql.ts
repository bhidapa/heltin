/**
 * @generated SignedSource<<e22086f7b7612daab45428d30bab648f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesTreatmentsCreatePageQuery$variables = {
  caseStudyRowId: string;
};
export type ClientsCaseStudiesTreatmentsCreatePageQuery$data = {
  readonly caseStudy: {
    readonly client: {
      readonly fullName: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy">;
  } | null;
};
export type ClientsCaseStudiesTreatmentsCreatePageQuery = {
  variables: ClientsCaseStudiesTreatmentsCreatePageQuery$variables;
  response: ClientsCaseStudiesTreatmentsCreatePageQuery$data;
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
  "name": "fullName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
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
    "name": "ClientsCaseStudiesTreatmentsCreatePageQuery",
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
            "kind": "RequiredField",
            "field": {
              "alias": "client",
              "args": null,
              "concreteType": "Client",
              "kind": "LinkedField",
              "name": "clientByClientRowId",
              "plural": false,
              "selections": [
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            "action": "THROW",
            "path": "caseStudy.client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyTreatmentManage_caseStudy"
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
    "name": "ClientsCaseStudiesTreatmentsCreatePageQuery",
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
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "54f34a514f3c98f8aa44bde63f5783e2",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesTreatmentsCreatePageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesTreatmentsCreatePageQuery(\n  $caseStudyRowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    client: clientByClientRowId {\n      fullName\n      id\n    }\n    ...CaseStudyTreatmentManage_caseStudy\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "508cbd3d0a2b563ecbc6ae75ed4eb877";
}

export default node;
