/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionManage_caseStudy = {
    readonly rowId: string;
    readonly title: string;
    readonly client: {
        readonly rowId: string;
        readonly fullName: string;
    } | null;
    readonly " $refType": "CaseStudyConclusionManage_caseStudy";
};
export type CaseStudyConclusionManage_caseStudy$data = CaseStudyConclusionManage_caseStudy;
export type CaseStudyConclusionManage_caseStudy$key = {
    readonly " $data"?: CaseStudyConclusionManage_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
};



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
  "name": "CaseStudyConclusionManage_caseStudy",
  "type": "CaseStudy",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "client",
      "name": "clientByClientRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "Client",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fullName",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node as any).hash = '04dc90c9eb8cf99d81a950cc6766c984';
export default node;
