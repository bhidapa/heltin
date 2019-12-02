/* tslint:disable */
/* @relayHash dbb4c3e54714188172968586829e5013 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsDetailPageQueryVariables = {
    rowId: string;
};
export type ClientsDetailPageQueryResponse = {
    readonly client: {
        readonly rowId: string;
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
    rowId
    fullName
    ...ClientEdit_client
    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {
      nodes {
        rowId
        ...CaseStudyView_caseStudy
        id
      }
    }
    id
  }
}

fragment CaseStudyTreatmentRow_item on CaseStudyTreatment {
  title
  startedAt
  endedAt
}

fragment CaseStudyView_caseStudy on CaseStudy {
  rowId
  title
  caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {
    nodes {
      rowId
      ...CaseStudyTreatmentRow_item
      id
    }
  }
  caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {
    nodes {
      rowId
      type
      id
    }
  }
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
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_DESC"
    ]
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v6 = {
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
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseStudies",
            "name": "caseStudiesByClientRowId",
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])",
            "args": (v4/*: any*/),
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
                  (v2/*: any*/),
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
          (v3/*: any*/),
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
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])",
            "args": (v4/*: any*/),
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
                  (v2/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": "caseStudyTreatments",
                    "name": "caseStudyTreatmentsByCaseStudyRowId",
                    "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": [
                          "STARTED_AT_DESC"
                        ]
                      }
                    ],
                    "concreteType": "CaseStudyTreatmentsConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseStudyTreatment",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "startedAt",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "endedAt",
                            "args": null,
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "caseStudyConclusions",
                    "name": "caseStudyConclusionsByCaseStudyRowId",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudyConclusionsConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseStudyConclusion",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ]
                      }
                    ]
                  },
                  (v6/*: any*/)
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientsDetailPageQuery",
    "id": null,
    "text": "query ClientsDetailPageQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    rowId\n    fullName\n    ...ClientEdit_client\n    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n      nodes {\n        rowId\n        ...CaseStudyView_caseStudy\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentRow_item on CaseStudyTreatment {\n  title\n  startedAt\n  endedAt\n}\n\nfragment CaseStudyView_caseStudy on CaseStudy {\n  rowId\n  title\n  caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {\n    nodes {\n      rowId\n      ...CaseStudyTreatmentRow_item\n      id\n    }\n  }\n  caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {\n    nodes {\n      rowId\n      type\n      id\n    }\n  }\n}\n\nfragment ClientEdit_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  sentBy\n  email\n  discrete\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a85489ae9ae431b407bf4c02497c0816';
export default node;
