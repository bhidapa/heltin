/**
 *
 * CaseStudyTreatmentRow
 *
 */

import React from 'react';
import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyTreatmentRow_item } from 'relay/artifacts/CaseStudyTreatmentRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';

const { RowHeader: CaseStudyTreatmentRowHeader, RowItem } = makeRow<CaseStudyTreatmentRow_item>({
  columns: [
    {
      width: 124,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="TITLE" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.title}</span>;
      },
    },
    {
      width: 132,
      HeaderCell: <FormattedMessage id="STARTED" />,
      ItemCell: function ItemCell({ item }) {
        return (
          <span>
            <FormattedDate value={item.startedAt} />
            &nbsp;
            <FormattedTime value={item.startedAt} />
          </span>
        );
      },
    },
    {
      width: 132,
      HeaderCell: <FormattedMessage id="ENDED" />,
      ItemCell: function ItemCell({ item }) {
        return (
          <span>
            <FormattedDate value={item.endedAt} />
            &nbsp;
            <FormattedTime value={item.endedAt} />
          </span>
        );
      },
    },
  ],
});

export { CaseStudyTreatmentRowHeader };

export const CaseStudyTreatmentRow = createFragmentContainer(RowItem, {
  item: graphql`
    fragment CaseStudyTreatmentRow_item on CaseStudyTreatment {
      title
      startedAt
      endedAt
    }
  `,
});
