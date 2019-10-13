import { Messages } from 'lib/intl/messages';
import { ClientSentBy } from 'modules/Client/ClientSentBy';

export const messages: Messages = {
  CLIENT_SENT_BY: {
    en: 'Client sent by',
  },
  [ClientSentBy.Clinic]: {
    en: 'Clinic',
  },
  [ClientSentBy.Court]: {
    en: 'Court',
  },
  [ClientSentBy.Kindergarten]: {
    en: 'Kindergarten',
  },
  [ClientSentBy.MentalHealthCenter]: {
    en: 'Mental health center',
  },
  [ClientSentBy.Pediatrician]: {
    en: 'Pediatrician',
  },
  [ClientSentBy.Police]: {
    en: 'Police',
  },
  [ClientSentBy.Psychiatrist]: {
    en: 'Psychiatrist',
  },
  [ClientSentBy.Referal]: {
    en: 'Referal',
  },
  [ClientSentBy.School]: {
    en: 'School',
  },
  [ClientSentBy.SelfInitiative]: {
    en: 'Self initiative',
  },
  [ClientSentBy.SocialWorkCenter]: {
    en: 'Social work center',
  },
};
