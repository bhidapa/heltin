/**
 *
 * CaseStudiesTableRow
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudiesTableRow_item } from 'relay/artifacts/CaseStudiesTableRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';

const { RowHeader: CaseStudiesTableRowHeader, RowItem } = makeRow<CaseStudiesTableRow_item>({
  columns: [
    {
      width: 124,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="DESCRIPTION" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.description}</span>;
      },
    },
  ],
});

export { CaseStudiesTableRowHeader };

export const CaseStudiesTableRow = createFragmentContainer(RowItem, {
  item: graphql`
    fragment CaseStudiesTableRow_item on CaseStudy {
      id
      rowId
      description
    }
  `,
});
