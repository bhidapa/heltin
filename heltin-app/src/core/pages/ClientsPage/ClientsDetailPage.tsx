/**
 *
 * ClientsDetailPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ClientsDetailPageQuery } from 'relay/artifacts/ClientsDetailPageQuery.graphql';

// ui
import { Err, Loading, Flex, Divider, Text, Button } from '@domonda/ui';

// modules
import { ClientEdit } from 'modules/Client/ClientEdit';
import { CaseStudyView } from 'modules/CaseStudy/CaseStudyView';

export type ClientsDetailPageProps = RouteComponentProps<{ rowId: UUID }>;

const ClientsDetailPage: React.FC<ClientsDetailPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <Helmet title="Client" />
      <QueryRenderer<ClientsDetailPageQuery>
        environment={environment}
        query={graphql`
          query ClientsDetailPageQuery($rowId: UUID!) {
            client: clientByRowId(rowId: $rowId) {
              rowId
              fullName
              ...ClientEdit_client
              caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {
                nodes {
                  rowId
                  ...CaseStudyView_caseStudy
                }
              }
            }
          }
        `}
        variables={{ rowId }}
        render={({ props, error, retry }) => {
          if (error) {
            return <Err error={error} onRetry={retry} />;
          }
          if (!props) {
            return <Loading />;
          }
          const { client } = props;
          if (!client) {
            return <FourOhFourPage />;
          }
          return (
            <>
              <Helmet title={client.fullName} />
              <Flex container direction="column" spacing="small">
                <Flex item>
                  <ClientEdit client={client} />
                </Flex>
                <Flex item>
                  <Divider />
                </Flex>
                <Flex item container spacing="tiny" justify="space-between" align="center">
                  <Flex item>
                    <Text size="large" weight="medium">
                      <FormattedMessage id="CASE_STUDIES" />
                    </Text>
                  </Flex>
                  <Flex item>
                    <Button
                      variant="primary"
                      component={makeLink({
                        to: `${CLIENTS_PAGE_ROUTE}/${client.rowId}/create-case-study`,
                      })}
                    >
                      <FormattedMessage id="CREATE_CASE_STUDY" />
                    </Button>
                  </Flex>
                </Flex>
                {client.caseStudies.nodes.length > 0 ? (
                  client.caseStudies.nodes.map((caseStudy, index) => (
                    <React.Fragment key={caseStudy.rowId}>
                      <Flex item>
                        <CaseStudyView caseStudy={caseStudy} />
                      </Flex>
                      {index < client.caseStudies.nodes.length - 1 && (
                        <Flex item>
                          <Divider />
                        </Flex>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <Flex item>
                    <Text color="warning">
                      <FormattedMessage id="NO_ENTRIES" />
                    </Text>
                  </Flex>
                )}
              </Flex>
            </>
          );
        }}
      />
    </>
  );
};

const ComposedClientsDetailPage = ClientsDetailPage;
export { ComposedClientsDetailPage as ClientsDetailPage };
