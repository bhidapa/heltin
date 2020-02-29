/**
 *
 * ProfessionalsCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

// modules
import { ProfessionalCreate } from 'modules/Professional/ProfessionalCreate';

export type ProfessionalsCreatePageProps = RouteComponentProps;

const ProfessionalsCreatePage: React.FC<ProfessionalsCreatePageProps> = () => {
  return (
    <>
      <FormattedMessage id="ADD_THERAPIST">
        {(msg: string) => <Helmet title={msg} />}
      </FormattedMessage>
      <ProfessionalCreate />
    </>
  );
};

const ComposedProfessionalsCreatePage = ProfessionalsCreatePage;
export { ComposedProfessionalsCreatePage as ProfessionalsCreatePage };
