/**
 * @generated SignedSource<<31214eff3a6d2a5b5e9325a7ec9bee5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
import { FragmentRefs } from "relay-runtime";
export type ClientCaseStudies_client$data = {
  readonly caseStudies: {
    readonly nodes: ReadonlyArray<{
      readonly concluded: boolean;
      readonly conclusion: {
        readonly type: CaseStudyConclusionType;
      } | null;
      readonly id: string;
      readonly rowId: string;
      readonly someSortedEvents: {
        readonly nodes: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
        }>;
        readonly totalCount: number;
      };
      readonly title: string;
    }>;
    readonly totalCount: number;
  };
  readonly rowId: string;
  readonly " $fragmentType": "ClientCaseStudies_client";
};
export type ClientCaseStudies_client$key = {
  readonly " $data"?: ClientCaseStudies_client$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientCaseStudies_client",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "caseStudies",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "CREATED_AT_ASC"
          ]
        }
      ],
      "concreteType": "CaseStudiesConnection",
      "kind": "LinkedField",
      "name": "caseStudiesByClientRowId",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudy",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
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
              "name": "concluded",
              "storageKey": null
            },
            {
              "alias": "conclusion",
              "args": null,
              "concreteType": "CaseStudyConclusion",
              "kind": "LinkedField",
              "name": "caseStudyConclusionByCaseStudyRowId",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": "someSortedEvents",
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 5
                }
              ],
              "concreteType": "EventsConnection",
              "kind": "LinkedField",
              "name": "sortedEvents",
              "plural": false,
              "selections": [
                (v1/*: any*/),
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
              "storageKey": "sortedEvents(first:5)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "4f3db01cd3a7fcee625593c5e01d69f0";
}

export default node;
