/**
 *
 * ClientsCreateCaseStudyPage
 *
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FourOhFourPage } from '../FourOhFourPage';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { ClientsCreateCaseStudyPageQuery } from 'relay/artifacts/ClientsCreateCaseStudyPageQuery.graphql';

// ui
import { Flex, Text, Svg } from '@domonda/ui';
import { ExclamationTriangleIcon } from 'lib/icons';

// modules
import { CaseStudyManage } from 'modules/CaseStudy/CaseStudyManage';

export type ClientsCreateCaseStudyPageProps = RouteComponentProps<{
  rowId: UUID;
}>;

export const ClientsCreateCaseStudyPage: React.FC<ClientsCreateCaseStudyPageProps> = (props) => {
  const {
    match: {
      params: { rowId },
    },
  } = props;

  const { client } = useLazyLoadQuery<ClientsCreateCaseStudyPageQuery>(
    graphql`
      query ClientsCreateCaseStudyPageQuery($rowId: UUID!) {
        client: clientByRowId(rowId: $rowId) {
          ...CaseStudyManage_client
        }
      }
    `,
    { rowId },
  );

  if (!client) {
    return <FourOhFourPage />;
  }
  return (
    <>
      <FormattedMessage id="CREATE_CASE_STUDY">
        {([msg]) => <Helmet title={msg} />}
      </FormattedMessage>
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
    </>
  );
};
