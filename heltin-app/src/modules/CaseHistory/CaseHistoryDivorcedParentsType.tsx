/**
 *
 * CaseHistoryDivorcedParentsType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryDivorcedParentsType {
  InProcess = 'IN_PROCESS',
  No = 'NO',
  Yes = 'YES',
}

export interface CaseHistoryDivorcedParentsTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryDivorcedParentsTypeSelectOptions: React.FC<CaseHistoryDivorcedParentsTypeSelectOptionsProps> = React.memo(
  function CaseHistoryDivorcedParentsTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryDivorcedParentsType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
