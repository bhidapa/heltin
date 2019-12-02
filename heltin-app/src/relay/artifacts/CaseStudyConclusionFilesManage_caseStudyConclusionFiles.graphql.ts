/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionFilesManage_caseStudyConclusionFiles = ReadonlyArray<{
    readonly id: string;
    readonly rowId: string;
    readonly file: {
        readonly rowId: string;
        readonly name: string;
    };
    readonly " $refType": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles";
}>;
export type CaseStudyConclusionFilesManage_caseStudyConclusionFiles$data = CaseStudyConclusionFilesManage_caseStudyConclusionFiles;
export type CaseStudyConclusionFilesManage_caseStudyConclusionFiles$key = ReadonlyArray<{
    readonly " $data"?: CaseStudyConclusionFilesManage_caseStudyConclusionFiles$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
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
  "name": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles",
  "type": "CaseStudyConclusionFile",
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
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'a1c5bdf6ef9fd234dfb1d15f4424e2ae';
export default node;
