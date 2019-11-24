/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyEdit_caseStudy = {
    readonly rowId: string;
    readonly description: string;
    readonly client: {
        readonly fullName: string;
    } | null;
    readonly " $refType": "CaseStudyEdit_caseStudy";
};
export type CaseStudyEdit_caseStudy$data = CaseStudyEdit_caseStudy;
export type CaseStudyEdit_caseStudy$key = {
    readonly " $data"?: CaseStudyEdit_caseStudy$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyEdit_caseStudy">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CaseStudyEdit_caseStudy",
  "type": "CaseStudy",
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
      "name": "description",
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
(node as any).hash = '2b29125cc0c4ce367fc8062a9db7d33c';
export default node;
