/**
 * @generated SignedSource<<1fa61cb8236e342be1754a47a3876315>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistsDetailsPageQuery$variables = {
  rowId: string;
};
export type TherapistsDetailsPageQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_query">;
  };
  readonly therapist: {
    readonly fullName: string;
    readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_therapist">;
  } | null;
};
export type TherapistsDetailsPageQuery = {
  variables: TherapistsDetailsPageQuery$variables;
  response: TherapistsDetailsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TherapistsDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TherapistManage_query"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "therapist",
        "args": (v1/*: any*/),
        "concreteType": "Therapist",
        "kind": "LinkedField",
        "name": "therapistByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TherapistManage_therapist"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TherapistsDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "UsersConnection",
            "kind": "LinkedField",
            "name": "filterUsers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "filterUsers(first:10)"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "therapist",
        "args": (v1/*: any*/),
        "concreteType": "Therapist",
        "kind": "LinkedField",
        "name": "therapistByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enabled",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "disabled",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
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
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateOfBirth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "telephone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": "user",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userByUserRowId",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b8e2d59450eaca9d67da7166740a2e22",
    "id": null,
    "metadata": {},
    "name": "TherapistsDetailsPageQuery",
    "operationKind": "query",
    "text": "query TherapistsDetailsPageQuery(\n  $rowId: UUID!\n) {\n  query {\n    ...TherapistManage_query\n    id\n  }\n  therapist: therapistByRowId(rowId: $rowId) {\n    fullName\n    ...TherapistManage_therapist\n    id\n  }\n}\n\nfragment AutocompleteUser_query on Query {\n  filterUsers(first: 10) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n\nfragment TherapistManage_query on Query {\n  ...AutocompleteUser_query\n}\n\nfragment TherapistManage_therapist on Therapist {\n  rowId\n  enabled\n  disabled\n  type\n  title\n  fullName\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  email\n  user: userByUserRowId {\n    id\n    rowId\n    email\n  }\n  updatedAt\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "bbbf5558f282c58b2f495df8acf86293";
}

export default node;
