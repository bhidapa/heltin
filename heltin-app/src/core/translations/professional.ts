import { Messages } from 'lib/intl/messages';
import { ProfessionalType } from 'modules/Professional/ProfessionalType';

export const messages: Messages = {
  PROFESSIONAL: {
    en: 'Professional',
    hr: 'Profesionalac',
  },
  PROFESSIONALS: {
    en: 'Professionals',
    hr: 'Profesionalaci',
  },
  CREATE_PROFESSIONAL: {
    en: 'Create professional',
    hr: 'Kreiraj profesionalca',
  },
  PROFESSIONAL_TITLE: {
    en: 'Title',
    hr: 'Titula',
  },
  PRIMARY_PROFESSIONAL: {
    en: 'Primary',
    hr: 'Primarni',
  },
  [ProfessionalType.Psychotherapist]: {
    en: 'Psychotherapist',
    hr: 'Psihoterapeut',
  },
  [ProfessionalType.Psychologist]: {
    en: 'Psychologist',
    hr: 'Psiholog',
  },
  [ProfessionalType.Psychiatrist]: {
    en: 'Psychiatrist',
    hr: 'Psihijatar',
  },
  [ProfessionalType.Neurologist]: {
    en: 'Neurologist',
    hr: 'Neurolog',
  },
  [ProfessionalType.Pediatrist]: {
    en: 'Pediatrist',
    hr: 'Pedijatar',
  },
  [ProfessionalType.SocialWorker]: {
    en: 'Social worker',
    hr: 'Socijalni radnik',
  },
  [ProfessionalType.Pedagogue]: {
    en: 'Pedagogue',
    hr: 'Pedagog',
  },
  [ProfessionalType.Defectologist]: {
    en: 'Defectologist',
    hr: 'Defektolog',
  },
  [ProfessionalType.Phonetician]: {
    en: 'Phonetician',
    hr: 'Fonetičar',
  },
  [ProfessionalType.Other]: {
    en: 'Other',
    hr: 'Ostalo',
  },
};
