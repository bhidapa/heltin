import { Messages } from 'intl/messages';

import { messages as actionsMessages } from './actions';
import { messages as caseMessages } from './case';
import { messages as clientMessages } from './client';
import { messages as genderMessages } from './gender';
import { messages as generalMessages } from './general';
import { messages as statesMessages } from './states';
import { messages as therapistMessages } from './therapist';

export const messages: Messages = {
  ...generalMessages,
  ...actionsMessages,
  ...statesMessages,
  ...clientMessages,
  ...genderMessages,
  ...therapistMessages,
  ...caseMessages,
};
