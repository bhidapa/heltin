/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
        readonly data: string;
    };
    readonly " $refType": "CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports";
}>;
export type CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports$data = CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports;
export type CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports$key = ReadonlyArray<{
    readonly " $data"?: CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports">;
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
  "name": "CaseHistoryEarlierMedicalReportsManage_caseHistoryEarlierMedicalReports",
  "type": "CaseHistoryEarlierMedicalReport",
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
(node as any).hash = 'a684801778a69f8beb9071d7861d524c';
export default node;
