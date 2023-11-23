/**
 * @generated SignedSource<<930788e4f381c7da2d721bde9682cb5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesCreatePageQuery$variables = {
  clientRowId: string;
};
export type ClientsCaseStudiesCreatePageQuery$data = {
  readonly client: {
    readonly fullName: string;
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_client">;
  } | null | undefined;
};
export type ClientsCaseStudiesCreatePageQuery = {
  response: ClientsCaseStudiesCreatePageQuery$data;
  variables: ClientsCaseStudiesCreatePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "clientRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "clientRowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCaseStudiesCreatePageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_client"
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
    "name": "ClientsCaseStudiesCreatePageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rowId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e6d878941ac7242484c6b887fd39fd13",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesCreatePageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesCreatePageQuery(\n  $clientRowId: UUID!\n) {\n  client: clientByRowId(rowId: $clientRowId) {\n    fullName\n    ...CaseStudyManage_client\n    id\n  }\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "27bce237be14345fe73d80e9c241f344";
}

export default node;
