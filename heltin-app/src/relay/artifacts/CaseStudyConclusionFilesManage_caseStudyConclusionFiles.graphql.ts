/* tslint:disable */
/* eslint-disable */

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
  "name": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudyConclusionFile"
};
})();
(node as any).hash = 'a1c5bdf6ef9fd234dfb1d15f4424e2ae';
export default node;
