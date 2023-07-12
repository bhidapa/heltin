/**
 *
 * PleaseWait
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

export interface PleaseWaitProps {}

export const PleaseWait: React.FC<PleaseWaitProps> = () => {
  return (
    <pre className="text-center text-muted">
      <i className="fa-solid fa-hourglass"></i>
      &nbsp;
      <FormattedMessage id="PLEASE_WAIT" />
      ...
    </pre>
  );
};
