/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTable_caseStudies = ReadonlyArray<{
    readonly rowId: string;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudiesTableRow_item">;
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
      "kind": "FragmentSpread",
      "name": "CaseStudiesTableRow_item",
      "args": null
    }
  ]
};
(node as any).hash = 'ea13f9b38eb2c66119b4d868ec751327';
export default node;
