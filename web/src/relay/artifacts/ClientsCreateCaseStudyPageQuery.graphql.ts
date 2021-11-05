/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ClientsCreateCaseStudyPageQueryVariables = {
    rowId: string;
};
export type ClientsCreateCaseStudyPageQueryResponse = {
    readonly client: {
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyManage_client">;
    } | null;
};
export type ClientsCreateCaseStudyPageQuery = {
    readonly response: ClientsCreateCaseStudyPageQueryResponse;
    readonly variables: ClientsCreateCaseStudyPageQueryVariables;
};



/*
query ClientsCreateCaseStudyPageQuery(
  $rowId: UUID!
) {
  client: clientByRowId(rowId: $rowId) {
    ...CaseStudyManage_client
    id
  }
}

fragment CaseStudyManage_client on Client {
  rowId
  fullName
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCreateCaseStudyPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
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
    "name": "ClientsCreateCaseStudyPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
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
            "name": "fullName",
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
    "cacheID": "c60f92f367c0c7cdc6cbceb7105bf0d7",
    "id": null,
    "metadata": {},
    "name": "ClientsCreateCaseStudyPageQuery",
    "operationKind": "query",
    "text": "query ClientsCreateCaseStudyPageQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    ...CaseStudyManage_client\n    id\n  }\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n"
  }
};
})();
(node as any).hash = 'bae9fd7659e39667fb7afb5c4a0afbcb';
export default node;
