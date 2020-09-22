/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  rowId
  caseStudyRowId
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
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsDetailPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "caseStudies",
            "args": (v4/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CaseStudyView_caseStudy"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientEdit_client"
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
    "name": "ClientsDetailPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "number",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sentBy",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "discrete",
            "storageKey": null
          },
          {
            "alias": "caseStudies",
            "args": (v4/*: any*/),
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
                  (v2/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": "caseStudyTreatments",
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
                    "kind": "LinkedField",
                    "name": "caseStudyTreatmentsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyTreatment",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "caseStudyRowId",
                            "storageKey": null
                          },
                          (v5/*: any*/),
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
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])"
                  },
                  {
                    "alias": "caseStudyConclusions",
                    "args": null,
                    "concreteType": "CaseStudyConclusionsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyConclusionsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyConclusion",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1c1cb0550f41e55c5b4b8899b3359a55",
    "id": null,
    "metadata": {},
    "name": "ClientsDetailPageQuery",
    "operationKind": "query",
    "text": "query ClientsDetailPageQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    rowId\n    fullName\n    ...ClientEdit_client\n    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n      nodes {\n        rowId\n        ...CaseStudyView_caseStudy\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentRow_item on CaseStudyTreatment {\n  rowId\n  caseStudyRowId\n  title\n  startedAt\n  endedAt\n}\n\nfragment CaseStudyView_caseStudy on CaseStudy {\n  rowId\n  title\n  caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {\n    nodes {\n      rowId\n      ...CaseStudyTreatmentRow_item\n      id\n    }\n  }\n  caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {\n    nodes {\n      rowId\n      type\n      id\n    }\n  }\n}\n\nfragment ClientEdit_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  sentBy\n  email\n  discrete\n}\n"
  }
};
})();
(node as any).hash = 'a85489ae9ae431b407bf4c02497c0816';
export default node;
