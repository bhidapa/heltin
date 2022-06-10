/**
 * @generated SignedSource<<ace9ce1b9782fff60cd1b341a9aa0009>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesDetailsPage_caseStudy$data = {
  readonly clientRowId: string | null;
  readonly concluded: boolean;
  readonly rowId: string;
  readonly sortedEvents: {
    readonly nodes: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
    }>;
  };
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_casyStudy" | "CaseStudyManage_caseStudy">;
  readonly " $fragmentType": "ClientsCaseStudiesDetailsPage_caseStudy";
};
export type ClientsCaseStudiesDetailsPage_caseStudy$key = {
  readonly " $data"?: ClientsCaseStudiesDetailsPage_caseStudy$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientsCaseStudiesDetailsPage_caseStudy">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientsCaseStudiesDetailsPage_caseStudy",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "clientRowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "concluded",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CaseStudyManage_caseStudy"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CaseStudyAssignedTherapistsManage_casyStudy"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EventsConnection",
      "kind": "LinkedField",
      "name": "sortedEvents",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Event",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "EventsTable_events"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "0f64eede9593863b0adf7deb4a5bf5d8";
}

export default node;
