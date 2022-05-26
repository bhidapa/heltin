/**
 * @generated SignedSource<<48a6fa9dc86967ced1308d9692c225d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CaseStudyConclusionType = "TREATMENT_COMPLETION" | "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL";
import { FragmentRefs } from "relay-runtime";
export type ClientCaseStudies_client$data = {
  readonly rowId: string;
  readonly caseStudies: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly rowId: string;
      readonly title: string;
      readonly concluded: boolean;
      readonly conclusion: {
        readonly type: CaseStudyConclusionType;
      } | null;
      readonly sortedEvents: {
        readonly nodes: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
        }>;
      };
    }>;
  };
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
            "CREATED_AT_DESC"
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
      "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "925abefc0173cee5a4500a33b5f95b77";
}

export default node;
