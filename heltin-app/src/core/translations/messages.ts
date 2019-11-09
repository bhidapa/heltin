import { Messages } from 'lib/intl/messages';
import { messages as generalMessages } from './general';
import { messages as actionsMessages } from './actions';
import { messages as statesMessages } from './states';
import { messages as clientMessages } from './client';
import { messages as genderMessages } from './gender';

export const messages: Messages = {
  ...generalMessages,
  ...actionsMessages,
  ...statesMessages,
  ...clientMessages,
  ...genderMessages,
};
