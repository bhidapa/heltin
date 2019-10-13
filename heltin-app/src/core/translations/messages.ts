import { Messages } from 'lib/intl/messages';
import { messages as actionsMessages } from './actions';
import { messages as statesMessages } from './states';
import { messages as clientSentByMessages } from './clientSentBy';
import { messages as genderMessages } from './gender';

export const messages: Messages = {
  ...actionsMessages,
  ...statesMessages,
  ...clientSentByMessages,
  ...genderMessages,
};
