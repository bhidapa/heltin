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
  ADD_THERAPIST: {
    en: 'Add therapist',
    hr: 'Dodaj terapeuta',
  },
  THERAPIST: {
    en: 'Therapist',
    hr: 'Terapeut',
  },
  THERAPISTS: {
    en: 'Therapists',
    hr: 'Terapeuti',
  },
  ASSIGN_THERAPIST: {
    en: 'Assign therapist',
    hr: 'Dodijeli terapeuta',
  },
  ASSIGNED_THERAPISTS: {
    en: 'Assigned therapists',
    hr: 'Dodijeljeni terapeuti',
  },
  ASSIGNED_THERAPIST: {
    en: 'Assigned therapist',
    hr: 'Dodijeljeni terapeut',
  },
  ASSIGNED_THERAPISTS_DESCRIPTION: {
    en: 'Only assigned therapists can see this client',
    hr: 'Isključivo dodijeljeni terapeuti imaju pristup ovom klijentu',
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
  [ProfessionalType.Neuropsychiatrist]: {
    en: 'Neuropsychiatrist',
    hr: 'Neuropsihijatar',
  },
  [ProfessionalType.ClinicalPsychologist]: {
    en: 'Clinical psychologist',
    hr: 'Klinički psiholog',
  },
  [ProfessionalType.Supervisor]: {
    en: 'Supervisor',
    hr: 'Supervizor',
  },
  [ProfessionalType.Logoped]: {
    en: 'Logoped',
    hr: 'Logoped',
  },
  [ProfessionalType.Other]: {
    en: 'Other',
    hr: 'Ostalo',
  },
};
