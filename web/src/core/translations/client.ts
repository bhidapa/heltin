import { Messages } from 'lib/intl/messages';
import { ClientSentBy } from 'modules/Client/ClientSentBy';

export const messages: Messages = {
  CLIENT: {
    en: 'Client',
    hr: 'Klijent',
  },
  CLIENTS: {
    en: 'Clients',
    hr: 'Klijenti',
  },
  CLIENT_SENT_BY: {
    en: 'Client sent by',
    hr: 'Klijent poslan od strane',
  },
  [ClientSentBy.Clinic]: {
    en: 'Clinic',
    hr: 'Klinka',
  },
  [ClientSentBy.Court]: {
    en: 'Court',
    hr: 'Sud',
  },
  [ClientSentBy.Kindergarten]: {
    en: 'Kindergarten',
    hr: 'Vrtić',
  },
  [ClientSentBy.MentalHealthCenter]: {
    en: 'Mental health center',
    hr: 'Centar za mentalno zdravlje',
  },
  [ClientSentBy.Pediatrician]: {
    en: 'Pediatrician',
    hr: 'Pedijatar',
  },
  [ClientSentBy.Police]: {
    en: 'Police',
    hr: 'Policija',
  },
  [ClientSentBy.Psychiatrist]: {
    en: 'Psychiatrist',
    hr: 'Psihijatar',
  },
  [ClientSentBy.Referal]: {
    en: 'Referal',
    hr: 'Preporuka',
  },
  [ClientSentBy.School]: {
    en: 'School',
    hr: 'Škola',
  },
  [ClientSentBy.SelfInitiative]: {
    en: 'Self initiative',
    hr: 'Samoinicijativno',
  },
  [ClientSentBy.SocialWorkCenter]: {
    en: 'Social work center',
    hr: 'Centar za socijalni rad',
  },
  CREATE_CLIENT: {
    en: 'Create client',
    hr: 'Kreiraj klijenta',
  },
};
