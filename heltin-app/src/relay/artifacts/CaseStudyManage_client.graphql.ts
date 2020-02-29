/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyManage_client = {
    readonly rowId: string;
    readonly fullName: string;
    readonly " $refType": "CaseStudyManage_client";
};
export type CaseStudyManage_client$data = CaseStudyManage_client;
export type CaseStudyManage_client$key = {
    readonly " $data"?: CaseStudyManage_client$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyManage_client">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CaseStudyManage_client",
  "type": "Client",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
(node as any).hash = '7d8ef04fa5a1019b39bc954fbf933917';
export default node;
