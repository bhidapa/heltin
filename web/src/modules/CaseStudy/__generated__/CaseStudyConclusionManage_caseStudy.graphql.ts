/**
 * @generated SignedSource<<88c8abe7c42f1ecb7d152b1e912ee3cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionManage_caseStudy$data = {
  readonly client: {
    readonly fullName: string;
    readonly rowId: string;
  };
  readonly rowId: string;
  readonly title: string;
  readonly " $fragmentType": "CaseStudyConclusionManage_caseStudy";
};
export type CaseStudyConclusionManage_caseStudy$key = {
  readonly " $data"?: CaseStudyConclusionManage_caseStudy$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
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
      "kind": "RequiredField",
      "field": {
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
      },
      "action": "THROW",
      "path": "client"
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "d415c3d9f1b46c25dccef3032785e38a";
}

export default node;
