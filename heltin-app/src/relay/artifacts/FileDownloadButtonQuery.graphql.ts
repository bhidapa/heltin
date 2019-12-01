/* tslint:disable */
/* @relayHash a99fdfa05593b4a8bcfbfeb82a2e3b50 */

import { ConcreteRequest } from "relay-runtime";
export type FileDownloadButtonQueryVariables = {
    rowId: string;
};
export type FileDownloadButtonQueryResponse = {
    readonly file: {
        readonly name: string;
        readonly data: string;
    } | null;
};
export type FileDownloadButtonQuery = {
    readonly response: FileDownloadButtonQueryResponse;
    readonly variables: FileDownloadButtonQueryVariables;
};



/*
query FileDownloadButtonQuery(
  $rowId: UUID!
) {
  file: fileByRowId(rowId: $rowId) {
    name
    data
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "data",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FileDownloadButtonQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "file",
        "name": "fileByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FileDownloadButtonQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "file",
        "name": "fileByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "File",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "name": "FileDownloadButtonQuery",
    "id": null,
    "text": "query FileDownloadButtonQuery(\n  $rowId: UUID!\n) {\n  file: fileByRowId(rowId: $rowId) {\n    name\n    data\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9bf6fbe749c1aa49e0690121a1079b5b';
export default node;
