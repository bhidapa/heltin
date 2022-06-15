/**
 * @generated SignedSource<<abdae056aa620fd0ec5f9770d2beab51>>
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
      readonly sortedEvents: {
        readonly nodes: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
        }>;
      };
      readonly title: string;
    }>;
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
  (node as any).hash = "f8a429483092cc18fadc87c18c3f3bf5";
}

export default node;
