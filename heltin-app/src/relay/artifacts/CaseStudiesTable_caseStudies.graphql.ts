/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTable_caseStudies = ReadonlyArray<{
    readonly rowId: string;
    readonly description: string;
    readonly " $refType": "CaseStudiesTable_caseStudies";
}>;
export type CaseStudiesTable_caseStudies$data = CaseStudiesTable_caseStudies;
export type CaseStudiesTable_caseStudies$key = ReadonlyArray<{
    readonly " $data"?: CaseStudiesTable_caseStudies$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudiesTable_caseStudies">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CaseStudiesTable_caseStudies",
  "type": "CaseStudy",
  "metadata": {
    "plural": true
  },
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
    }
  ]
};
(node as any).hash = 'f32e4f2fe75194f6eda7aa68abe2e821';
export default node;
