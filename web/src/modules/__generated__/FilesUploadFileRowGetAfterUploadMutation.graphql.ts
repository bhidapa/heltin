/**
 * @generated SignedSource<<094e2a11bdb5da1c06a5023d01e58739>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GetFileAfterUploadInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type FilesUploadFileRowGetAfterUploadMutation$variables = {
  input: GetFileAfterUploadInput;
};
export type FilesUploadFileRowGetAfterUploadMutation$data = {
  readonly getFileAfterUpload: {
    readonly file: {
      readonly caseStudyTreatmentFile: {
        readonly id: string;
        readonly fileByFileRowId: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        } | null;
      } | null;
      readonly caseStudyConclusionFile: {
        readonly id: string;
        readonly fileByFileRowId: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        } | null;
      } | null;
      readonly formResponseFile: {
        readonly id: string;
        readonly fileByFileRowId: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        } | null;
      } | null;
    } | null;
  } | null;
};
export type FilesUploadFileRowGetAfterUploadMutation = {
  variables: FilesUploadFileRowGetAfterUploadMutation$variables;
  response: FilesUploadFileRowGetAfterUploadMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "File",
    "kind": "LinkedField",
    "name": "fileByFileRowId",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Files_files"
      }
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "File",
    "kind": "LinkedField",
    "name": "fileByFileRowId",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "link",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "protected",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": "createdBy",
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userByCreatedBy",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isTherapist",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilesUploadFileRowGetAfterUploadMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetFileAfterUploadPayload",
        "kind": "LinkedField",
        "name": "getFileAfterUpload",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "File",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyTreatmentFile",
                "kind": "LinkedField",
                "name": "caseStudyTreatmentFile",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyConclusionFile",
                "kind": "LinkedField",
                "name": "caseStudyConclusionFile",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FormResponseFile",
                "kind": "LinkedField",
                "name": "formResponseFile",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilesUploadFileRowGetAfterUploadMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GetFileAfterUploadPayload",
        "kind": "LinkedField",
        "name": "getFileAfterUpload",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "File",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyTreatmentFile",
                "kind": "LinkedField",
                "name": "caseStudyTreatmentFile",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyConclusionFile",
                "kind": "LinkedField",
                "name": "caseStudyConclusionFile",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FormResponseFile",
                "kind": "LinkedField",
                "name": "formResponseFile",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc5edcac373fa8b553ad42023b894eea",
    "id": null,
    "metadata": {},
    "name": "FilesUploadFileRowGetAfterUploadMutation",
    "operationKind": "mutation",
    "text": "mutation FilesUploadFileRowGetAfterUploadMutation(\n  $input: GetFileAfterUploadInput!\n) {\n  getFileAfterUpload(input: $input) {\n    file {\n      caseStudyTreatmentFile {\n        id\n        fileByFileRowId {\n          ...Files_files\n          id\n        }\n      }\n      caseStudyConclusionFile {\n        id\n        fileByFileRowId {\n          ...Files_files\n          id\n        }\n      }\n      formResponseFile {\n        id\n        fileByFileRowId {\n          ...Files_files\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    isTherapist\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "eb24dd05e72712af075484ea2b9bf0e9";
}

export default node;
