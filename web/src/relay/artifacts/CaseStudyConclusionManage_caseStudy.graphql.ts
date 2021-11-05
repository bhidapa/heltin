/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
    readonly " $data"?: CaseStudyConclusionManage_caseStudy$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
};



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
  "metadata": null,
  "name": "CaseStudyConclusionManage_caseStudy",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "client",
      "args": null,
      "concreteType": "Client",
      "kind": "LinkedField",
      "name": "clientByClientRowId",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};
})();
(node as any).hash = '04dc90c9eb8cf99d81a950cc6766c984';
export default node;
