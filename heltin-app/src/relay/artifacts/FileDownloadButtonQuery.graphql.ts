/* tslint:disable */
/* eslint-disable */

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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FileDownloadButtonQuery",
    "selections": [
      {
        "alias": "file",
        "args": (v1/*: any*/),
        "concreteType": "File",
        "kind": "LinkedField",
        "name": "fileByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "FileDownloadButtonQuery",
    "selections": [
      {
        "alias": "file",
        "args": (v1/*: any*/),
        "concreteType": "File",
        "kind": "LinkedField",
        "name": "fileByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "id": null,
    "metadata": {},
    "name": "FileDownloadButtonQuery",
    "operationKind": "query",
    "text": "query FileDownloadButtonQuery(\n  $rowId: UUID!\n) {\n  file: fileByRowId(rowId: $rowId) {\n    name\n    data\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9bf6fbe749c1aa49e0690121a1079b5b';
export default node;
