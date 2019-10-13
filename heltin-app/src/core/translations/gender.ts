import { Messages } from 'lib/intl/messages';
import { Gender } from 'modules/Gender';

export const messages: Messages = {
  GENDER: {
    en: 'Gender',
    ba: 'Spol',
  },
  [Gender.Male]: {
    en: 'Male',
    ba: 'Muško',
  },
  [Gender.Female]: {
    en: 'Female',
    ba: 'Žensko',
  },
};
