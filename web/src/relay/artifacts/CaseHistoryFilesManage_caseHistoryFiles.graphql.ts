/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CaseHistoryFilesManage_caseHistoryFiles = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
        readonly protected: boolean;
    };
    readonly " $refType": "CaseHistoryFilesManage_caseHistoryFiles";
}>;
export type CaseHistoryFilesManage_caseHistoryFiles$data = CaseHistoryFilesManage_caseHistoryFiles;
export type CaseHistoryFilesManage_caseHistoryFiles$key = ReadonlyArray<{
    readonly " $data"?: CaseHistoryFilesManage_caseHistoryFiles$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryFilesManage_caseHistoryFiles">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CaseHistoryFilesManage_caseHistoryFiles",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": "file",
      "args": null,
      "concreteType": "File",
      "kind": "LinkedField",
      "name": "fileByFileRowId",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "protected",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseHistoryFile",
  "abstractKey": null
};
})();
(node as any).hash = 'd1868d620c72704d4ae31133c99ab11e';
export default node;
