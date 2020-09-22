/**
 *
 * CaseStudyView
 *
 */

import React from 'react';
import { makeLink } from 'lib/makeLink';
import { CASE_STUDIES_PAGE_ROUTE } from 'lib/routes';
import clsx from 'clsx';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { CaseStudyView_caseStudy$key } from 'relay/artifacts/CaseStudyView_caseStudy.graphql';

// ui
import { Flex, Text, Button, Svg } from '@domonda/ui';
import { FormattedMessage } from 'react-intl';

// parts
import { CaseStudyTreatmentRowHeader, CaseStudyTreatmentRow } from './CaseStudyTreatmentRow';
import { LockAltIcon } from 'lib/icons';

// decorate
import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';
const styles = createStyles(({ shape, palette, spacing }) => ({
  concluded: {
    backgroundColor: palette.lightest('primary'),
    padding: spacing('small'),
    borderRadius: shape.borderRadius.small,
  },
}));

export interface CaseStudyViewProps {
  caseStudy: CaseStudyView_caseStudy$key;
}

const CaseStudyView: React.FC<CaseStudyViewProps & WithStyles<typeof styles>> = (props) => {
  const { classes, caseStudy: caseStudyKey } = props;

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyView_caseStudy on CaseStudy {
        rowId
        title
        caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {
          nodes {
            rowId
            ...CaseStudyTreatmentRow_item
          }
        }
        caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {
          nodes {
            rowId
            type
          }
        }
      }
    `,
    caseStudyKey,
  );

  const conclusion = caseStudy.caseStudyConclusions.nodes[0] || null;

  return (
    <div className={clsx(conclusion && classes.concluded)}>
      <Flex container spacing="small" direction="column">
        <Flex item container spacing="tiny" align="center">
          {conclusion && (
            <Flex item>
              <Svg color="primary">
                <LockAltIcon />
              </Svg>
            </Flex>
          )}
          <Flex item>
            <Button
              color="secondary"
              size="medium"
              variant="link"
              component={makeLink({
                to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}`,
              })}
            >
              {caseStudy.title}
            </Button>
          </Flex>
          <Flex item flex={1} />
          {conclusion ? (
            <Flex item>
              <Button
                size="medium"
                variant="link"
                color="primary"
                component={makeLink({
                  to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/conclusions/${conclusion.rowId}`,
                })}
              >
                <FormattedMessage tagName="span" id={conclusion.type} />
              </Button>
            </Flex>
          ) : (
            <>
              <Flex item>
                <Button
                  disabled={!!conclusion}
                  color="primary"
                  component={makeLink({
                    to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/conclusions/create`,
                  })}
                >
                  <FormattedMessage id="CREATE_CONCLUSION" />
                </Button>
              </Flex>
              <Flex item>
                <Button
                  disabled={!!conclusion}
                  variant="primary"
                  color="secondary"
                  component={makeLink({
                    to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/treatments/create`,
                  })}
                >
                  <FormattedMessage id="CREATE_TREATMENT" />
                </Button>
              </Flex>
            </>
          )}
        </Flex>
        <Flex item container direction="column" spacing="tiny">
          <Flex item>
            <Text size="medium" weight="medium">
              <FormattedMessage id="TREATMENTS" />
            </Text>
          </Flex>
          <Flex item>
            {caseStudy.caseStudyTreatments.nodes.length > 0 ? (
              <>
                <CaseStudyTreatmentRowHeader />
                {caseStudy.caseStudyTreatments.nodes.map((node) => (
                  <CaseStudyTreatmentRow key={node.rowId} item={node} />
                ))}
              </>
            ) : (
              <Text color="warning">
                <FormattedMessage id="NO_ENTRIES" />
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

const ComposedCaseStudyView = withStyles(styles)(CaseStudyView);
export { ComposedCaseStudyView as CaseStudyView };
