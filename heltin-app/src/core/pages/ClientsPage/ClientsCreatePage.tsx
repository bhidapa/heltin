/**
 *
 * ClientsCreatePage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// modules
import { ClientCreate } from 'modules/Client/ClientCreate';

export type ClientsCreatePageProps = RouteComponentProps;

const ClientsCreatePage: React.FC<ClientsCreatePageProps> = () => {
  return (
    <>
      <Helmet title="Create client" />
      <ClientCreate />
    </>
  );
};

const ComposedClientsCreatePage = ClientsCreatePage;
export { ComposedClientsCreatePage as ClientsCreatePage };
