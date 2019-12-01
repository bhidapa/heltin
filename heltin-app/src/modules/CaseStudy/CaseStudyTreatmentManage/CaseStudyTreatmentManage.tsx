/**
 *
 * CaseStudyTreatmentManage
 *
 */

import React from 'react';

// ui
import { Flex, Button, Text } from '@domonda/ui';

export interface CaseStudyTreatmentManageProps {}

const CaseStudyTreatmentManage: React.FC<CaseStudyTreatmentManageProps> = () => {
  return (
    <Flex container direction="column" spacing="tiny">
      <Flex item container spacing="tiny">
        <Flex item>
          <Text>Novi tretman</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyTreatmentManage = CaseStudyTreatmentManage;
export { ComposedCaseStudyTreatmentManage as CaseStudyTreatmentManage };
