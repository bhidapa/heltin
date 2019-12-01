/* tslint:disable */
/* @relayHash d8b9fb12c411c868d76cabfb26add023 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsDetailPageQueryVariables = {
    rowId: string;
};
export type ClientsDetailPageQueryResponse = {
    readonly client: {
        readonly fullName: string;
        readonly caseStudies: {
            readonly nodes: ReadonlyArray<{
                readonly rowId: string;
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyView_caseStudy">;
            }>;
        };
        readonly " $fragmentRefs": FragmentRefs<"ClientEdit_client">;
    } | null;
};
export type ClientsDetailPageQuery = {
    readonly response: ClientsDetailPageQueryResponse;
    readonly variables: ClientsDetailPageQueryVariables;
};



/*
query ClientsDetailPageQuery(
  $rowId: UUID!
) {
  client: clientByRowId(rowId: $rowId) {
    fullName
    ...ClientEdit_client
    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        rowId
        ...CaseStudyView_caseStudy
        id
      }
    }
    id
  }
}

fragment CaseStudyView_caseStudy on CaseStudy {
  rowId
  description
}

fragment ClientEdit_client on Client {
  rowId
  fullName
  number
  firstName
  lastName
  dateOfBirth
  telephone
  gender
  city
  address
  sentBy
  email
  discrete
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientsDetailPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "client",
        "name": "clientByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseStudies",
            "name": "caseStudiesByClientRowId",
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v3/*: any*/),
            "concreteType": "CaseStudiesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "CaseStudy",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "CaseStudyView_caseStudy",
                    "args": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "ClientEdit_client",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientsDetailPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "client",
        "name": "clientByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "number",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dateOfBirth",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "telephone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "gender",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "city",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "address",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "sentBy",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "discrete",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "caseStudies",
            "name": "caseStudiesByClientRowId",
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v3/*: any*/),
            "concreteType": "CaseStudiesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "CaseStudy",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientsDetailPageQuery",
    "id": null,
    "text": "query ClientsDetailPageQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    fullName\n    ...ClientEdit_client\n    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        rowId\n        ...CaseStudyView_caseStudy\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyView_caseStudy on CaseStudy {\n  rowId\n  description\n}\n\nfragment ClientEdit_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  sentBy\n  email\n  discrete\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4a750dd920844b23077d30c4955e5ebe';
export default node;
