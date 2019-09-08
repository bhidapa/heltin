import { Messages } from 'lib/intl/messages';
import { messages as actionsMessages } from './actions';
import { messages as statesMessages } from './states';

export const messages: Messages = {
  ...actionsMessages,
  ...statesMessages,
};
