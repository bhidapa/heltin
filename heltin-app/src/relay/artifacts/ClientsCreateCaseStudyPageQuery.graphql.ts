/* tslint:disable */
/* @relayHash b9120d1cc244faa4b26fb34a5222516f */

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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientsCreateCaseStudyPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "client",
        "name": "clientByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_client",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientsCreateCaseStudyPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "client",
        "name": "clientByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rowId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "fullName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientsCreateCaseStudyPageQuery",
    "id": null,
    "text": "query ClientsCreateCaseStudyPageQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    ...CaseStudyManage_client\n    id\n  }\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bae9fd7659e39667fb7afb5c4a0afbcb';
export default node;
