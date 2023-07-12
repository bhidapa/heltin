/**
 *
 * NotFound
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BackButton } from 'core/location';

export const NotFound: React.FC = () => {
  return (
    <div className="m-auto w-600 mw-full">
      <div className="card">
        <h2 className="card-title">
          <i className="fa-solid fa-face-frown"></i>
          &nbsp;
          <FormattedMessage id="OOPS" />
        </h2>
        <p className="text-muted">
          <FormattedMessage id="PAGE_NOT_FOUND" />
        </p>
        <div className="text-right">
          <BackButton />
        </div>
      </div>
    </div>
  );
};
