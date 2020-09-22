/**
 *
 * CaseStudyTreatmentRow
 *
 */

import React from 'react';
import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import {
  CaseStudyTreatmentRow_item,
  CaseStudyTreatmentRow_item$key,
} from 'relay/artifacts/CaseStudyTreatmentRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';
import { makeLink } from 'lib/makeLink';
import { CASE_STUDIES_PAGE_ROUTE } from 'lib/routes';

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

export interface CaseStudyTreatmentRowProps {
  item: CaseStudyTreatmentRow_item$key;
}

export const CaseStudyTreatmentRow: React.FC<CaseStudyTreatmentRowProps> = (props) => {
  const item = useFragment(
    graphql`
      fragment CaseStudyTreatmentRow_item on CaseStudyTreatment {
        rowId
        caseStudyRowId
        title
        startedAt
        endedAt
      }
    `,
    props.item,
  );

  return (
    <RowItem
      item={item}
      component={makeLink({
        to: `${CASE_STUDIES_PAGE_ROUTE}/${item.caseStudyRowId}/treatments/${item.rowId}`,
        omit: ['item'],
      })}
    />
  );
};
