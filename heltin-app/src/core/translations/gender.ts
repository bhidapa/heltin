import { Messages } from 'lib/intl/messages';
import { Gender } from 'modules/Gender';

export const messages: Messages = {
  GENDER: {
    en: 'Gender',
    hr: 'Spol',
  },
  [Gender.Male]: {
    en: 'Male',
    hr: 'Muško',
  },
  [Gender.Female]: {
    en: 'Female',
    hr: 'Žensko',
  },
};
