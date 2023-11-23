/**
 * @generated SignedSource<<7956e05eaa7909186e27f22234dc7c67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type EventType = "CONCLUDE_CASE_STUDY" | "CREATE_CASE_STUDY" | "CREATE_CASE_STUDY_TREATMENT" | "CREATE_CLIENT" | "FORM_RESPONSE";
import { FragmentRefs } from "relay-runtime";
export type EventsTable_events$data = ReadonlyArray<{
  readonly caseStudy: {
    readonly createdAt: string;
    readonly rowId: string;
    readonly title: string;
  } | null | undefined;
  readonly clientRowId: string;
  readonly conclusion: {
    readonly concludedAt: string;
    readonly rowId: string;
    readonly type: CaseStudyConclusionType;
  } | null | undefined;
  readonly formResponse: {
    readonly createdAt: string;
    readonly form: {
      readonly name: string;
    } | null | undefined;
    readonly rowId: string;
  } | null | undefined;
  readonly id: string;
  readonly treatment: {
    readonly endedAt: string;
    readonly external: boolean;
    readonly rowId: string;
    readonly startedAt: string;
    readonly title: string;
  } | null | undefined;
  readonly type: EventType;
  readonly " $fragmentType": "EventsTable_events";
}>;
export type EventsTable_events$key = ReadonlyArray<{
  readonly " $data"?: EventsTable_events$data;
  readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EventsTable_events",
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
      "name": "clientRowId",
      "storageKey": null
    },
    {
      "alias": "caseStudy",
      "args": null,
      "concreteType": "CaseStudy",
      "kind": "LinkedField",
      "name": "caseStudyByCaseStudyRowId",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "formResponse",
      "args": null,
      "concreteType": "FormResponse",
      "kind": "LinkedField",
      "name": "formResponseByFormResponseRowId",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": "form",
          "args": null,
          "concreteType": "Form",
          "kind": "LinkedField",
          "name": "formByFormRowId",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "treatment",
      "args": null,
      "concreteType": "CaseStudyTreatment",
      "kind": "LinkedField",
      "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "external",
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "conclusion",
      "args": null,
      "concreteType": "CaseStudyConclusion",
      "kind": "LinkedField",
      "name": "caseStudyConclusionByCaseStudyConclusionRowId",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "concludedAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Event",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "467861595a550ed3802aebb5c714738a";
}

export default node;
