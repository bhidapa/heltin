/**
 * @generated SignedSource<<052e6a225d8a79b6a1fe59805cc9959a>>
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
    readonly totalCount: number;
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
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
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
  (node as any).hash = "081dbab6f0d32fd44373fcf4bb09c3b1";
}

export default node;
