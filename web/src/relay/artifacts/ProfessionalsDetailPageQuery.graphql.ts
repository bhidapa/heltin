/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsDetailPageQueryVariables = {
    rowId: string;
};
export type ProfessionalsDetailPageQueryResponse = {
    readonly viewer: {
        readonly isAdmin: boolean;
    } | null;
    readonly professional: {
        readonly fullName: string;
        readonly " $fragmentRefs": FragmentRefs<"ProfessionalEdit_professional">;
    } | null;
};
export type ProfessionalsDetailPageQuery = {
    readonly response: ProfessionalsDetailPageQueryResponse;
    readonly variables: ProfessionalsDetailPageQueryVariables;
};



/*
query ProfessionalsDetailPageQuery(
  $rowId: UUID!
) {
  viewer {
    isAdmin
    id
  }
  professional: mentalHealthProfessionalByRowId(rowId: $rowId) {
    fullName
    ...ProfessionalEdit_professional
    id
  }
}

fragment ProfessionalEdit_professional on MentalHealthProfessional {
  rowId
  dateOfBirth
  email
  title
  firstName
  gender
  lastName
  fullName
  type
  disabled
  user: userByUserRowId {
    id
    rowId
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAdmin",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfessionalsDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "professional",
        "args": (v2/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessionalByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfessionalEdit_professional"
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
    "name": "ProfessionalsDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "professional",
        "args": (v2/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessionalByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateOfBirth",
            "storageKey": null
          },
          (v6/*: any*/),
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
            "name": "gender",
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
            "name": "type",
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
            "alias": "user",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userByUserRowId",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "39978bc189024b12997441995631abb4",
    "id": null,
    "metadata": {},
    "name": "ProfessionalsDetailPageQuery",
    "operationKind": "query",
    "text": "query ProfessionalsDetailPageQuery(\n  $rowId: UUID!\n) {\n  viewer {\n    isAdmin\n    id\n  }\n  professional: mentalHealthProfessionalByRowId(rowId: $rowId) {\n    fullName\n    ...ProfessionalEdit_professional\n    id\n  }\n}\n\nfragment ProfessionalEdit_professional on MentalHealthProfessional {\n  rowId\n  dateOfBirth\n  email\n  title\n  firstName\n  gender\n  lastName\n  fullName\n  type\n  disabled\n  user: userByUserRowId {\n    id\n    rowId\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '5d9d9df2fb4cab2743883c035e134b32';
export default node;
