/**
 *
 * CaseHistoryArrivalReasonType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryArrivalReasonType {
  AbuseWitness = 'ABUSE_WITNESS',
  Addiction = 'ADDICTION',
  ADHD = 'ADHD',
  Anxiety = 'ANXIETY',
  AttentionProblems = 'ATTENTION_PROBLEMS',
  BehavioralProblems = 'BEHAVIORAL_PROBLEMS',
  BehaviouralProblems = 'BEHAVIOURAL_PROBLEMS',
  Bullying = 'BULLYING',
  CommunicationProblems = 'COMMUNICATION_PROBLEMS',
  CoupleProblems = 'COUPLE_PROBLEMS',
  CyberBullying = 'CYBER_BULLYING',
  DepresionSymptoms = 'DEPRESION_SYMPTOMS',
  Divorce = 'DIVORCE',
  Dysgraphia = 'DYSGRAPHIA',
  Dyslexia = 'DYSLEXIA',
  EmotionalAbuse = 'EMOTIONAL_ABUSE',
  EmotionalProblems = 'EMOTIONAL_PROBLEMS',
  Grieve = 'GRIEVE',
  LearningProblems = 'LEARNING_PROBLEMS',
  Loss = 'LOSS',
  Neglection = 'NEGLECTION',
  NeuroDevelopmentDisorder = 'NEURO_DEVELOPMENT_DISORDER',
  ParentManipulation = 'PARENT_MANIPULATION',
  PhysicalAbuse = 'PHYSICAL_ABUSE',
  SexualAbuse = 'SEXUAL_ABUSE',
  SleepDeficiency = 'SLEEP_DEFICIENCY',
  SuicidalThoughts = 'SUICIDAL_THOUGHTS',
  TalkingIssues = 'TALKING_ISSUES',
  Trauma = 'TRAUMA',
  Other = 'OTHER',
}

export interface CaseHistoryArrivalReasonTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryArrivalReasonTypeSelectOptions: React.FC<CaseHistoryArrivalReasonTypeSelectOptionsProps> = React.memo(
  function CaseHistoryArrivalReasonTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryArrivalReasonType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
