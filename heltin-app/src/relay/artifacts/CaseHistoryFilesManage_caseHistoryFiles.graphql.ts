/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseHistoryFilesManage_caseHistoryFiles = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
        readonly data: string;
    };
    readonly " $refType": "CaseHistoryFilesManage_caseHistoryFiles";
}>;
export type CaseHistoryFilesManage_caseHistoryFiles$data = CaseHistoryFilesManage_caseHistoryFiles;
export type CaseHistoryFilesManage_caseHistoryFiles$key = ReadonlyArray<{
    readonly " $data"?: CaseHistoryFilesManage_caseHistoryFiles$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryFilesManage_caseHistoryFiles">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CaseHistoryFilesManage_caseHistoryFiles",
  "type": "CaseHistoryFile",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": "file",
      "name": "fileByFileRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "File",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "data",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '5146b633703e6a95361b47ff52d8c3a3';
export default node;
