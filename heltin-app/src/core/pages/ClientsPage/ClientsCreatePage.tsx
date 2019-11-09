/**
 *
 * ClientsCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

// modules
import { ClientCreate } from 'modules/Client/ClientCreate';

export type ClientsCreatePageProps = RouteComponentProps;

const ClientsCreatePage: React.FC<ClientsCreatePageProps> = () => {
  return (
    <>
      <FormattedMessage id="CREATE_CLIENT">
        {(msg: string) => <Helmet title={msg} />}
      </FormattedMessage>
      <ClientCreate />
    </>
  );
};

const ComposedClientsCreatePage = ClientsCreatePage;
export { ComposedClientsCreatePage as ClientsCreatePage };
