/**
 *
 * ClientsCreateCaseStudyPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
import { ClientsCreateCaseStudyPageQuery } from 'relay/artifacts/ClientsCreateCaseStudyPageQuery.graphql';

// ui
import { Err, Loading, Flex, Text, Svg } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyManage } from 'modules/CaseStudy/CaseStudyManage';

export type ClientsCreateCaseStudyPageProps = RouteComponentProps<{ rowId: UUID }>;

const ClientsCreateCaseStudyPage: React.FC<ClientsCreateCaseStudyPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  return (
    <>
      <FormattedMessage id="CREATE_CASE_STUDY">
        {(msg: string) => <Helmet title={msg} />}
      </FormattedMessage>
      <QueryRenderer<ClientsCreateCaseStudyPageQuery>
        environment={environment}
        query={graphql`
          query ClientsCreateCaseStudyPageQuery($rowId: UUID!) {
            client: clientByRowId(rowId: $rowId) {
              ...CaseStudyManage_client
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
            <Flex container direction="column" spacing="small">
              <Flex item>
                <CaseStudyManage client={client} caseStudy={null} />
              </Flex>
              <Flex item container spacing="tiny" align="center">
                <Flex item>
                  <Svg>
                    <ExclamationTriangleIcon />
                  </Svg>
                </Flex>
                <Flex item>
                  <Text>
                    <FormattedMessage id="TO_ADD_OTHER_INFO_FINISH_CREATING_CASE_STUDY" />
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          );
        }}
      />
    </>
  );
};

const ComposedClientsCreateCaseStudyPage = ClientsCreateCaseStudyPage;
export { ComposedClientsCreateCaseStudyPage as ClientsCreateCaseStudyPage };
