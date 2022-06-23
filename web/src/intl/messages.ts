/**
 *
 * messages
 *
 */

export interface Message {
  en: string;
  hr?: string;
}

export interface Messages {
  [id: string]: Message;
}

export const messages: Messages = {
  GENERAL: {
    en: 'General',
    hr: 'Općenito',
  },
  ACCESS: {
    en: 'Access',
    hr: 'Pristup',
  },
  NUMBER: {
    en: 'Number',
    hr: 'Broj',
  },
  FILE_NAME: {
    en: 'File name',
    hr: 'Ime fajla',
  },
  FULL_NAME: {
    en: 'Full name',
    hr: 'Puno ime',
  },
  NAME: {
    en: 'Name',
    hr: 'Ime',
  },
  SURNAME: {
    en: 'Surname',
    hr: 'Prezime',
  },
  DATE_OF_BIRTH: {
    en: 'Date of birth',
    hr: 'Datum rođenja',
  },
  TELEPHONE: {
    en: 'Telephone',
    hr: 'Telefon',
  },
  ADDRESS: {
    en: 'Address',
    hr: 'Adresa',
  },
  CITY: {
    en: 'City',
    hr: 'Grad',
  },
  SENT_BY: {
    en: 'Sent by',
    hr: 'Poslan od',
  },
  USER: {
    en: 'User',
    hr: 'Korisnik',
  },
  USERS: {
    en: 'Users',
    hr: 'Korisnici',
  },
  NEW_USER: {
    en: 'New users',
    hr: 'Novi korisnik',
  },
  TYPE: {
    en: 'Type',
    hr: 'Tip',
  },
  DESCRIPTION: {
    en: 'Description',
    hr: 'Opis',
  },
  DESCRIPTION_FOR_REPORT: {
    en: 'Opinion and recommendation',
    hr: 'Mišljenje i preporuka',
  },
  DESCRIPTION_FOR_REPORT_FORM_TEXT: {
    en: 'Description is meant for the client. Text will be a part of the report.',
    hr: 'Opis je namijenjen klijentu. Tekst će biti dio nalaza.',
  },
  NOTE: {
    en: 'Note',
    hr: 'Bilješka',
  },
  NOTES_FOR_THERAPIST: {
    en: 'Notes for the therapist',
    hr: 'Bilješke za terapeuta',
  },
  NOTES_FOR_THERAPIST_FORM_TEXT: {
    en: 'Meant for therapists. Text will not be a part of the report.',
    hr: 'Namijenjene terapeutima. Tekst neće biti dio nalaza.',
  },
  PRIVATE_DESCRIPTION: {
    en: 'Private description',
    hr: 'Privatni opis',
  },
  FAMILY: {
    en: 'Family',
    hr: 'Familija',
  },
  MOTHER: {
    en: 'Mother',
    hr: 'Majka',
  },
  FATHER: {
    en: 'Father',
    hr: 'Otac',
  },
  FATHER_AND_MOTHER: {
    en: 'Father and mother',
    hr: 'Otac i majka',
  },
  BROTHER: {
    en: 'Brother',
    hr: 'Brat',
  },
  FOSTER_FATHER: {
    en: 'Foster father',
    hr: 'Foster father',
  },
  FOSTER_MOTHER: {
    en: 'Foster mother',
    hr: 'Foster mother',
  },
  SISTER: {
    en: 'Sister',
    hr: 'Sestra',
  },
  STEP_BROTHER: {
    en: 'Step brother',
    hr: 'Step brother',
  },
  STEP_FATHER: {
    en: 'Step father',
    hr: 'Step father',
  },
  STEP_MOTHER: {
    en: 'Step mother',
    hr: 'Step mother',
  },
  STEP_SISTER: {
    en: 'Step sister',
    hr: 'Step sister',
  },
  NO_ONE: {
    en: 'No one',
    hr: 'Samostalan',
  },
  NONE: {
    en: 'None',
    hr: 'Nijedan',
  },
  YES: {
    en: 'Yes',
    hr: 'Da',
  },
  NO: {
    en: 'No',
    hr: 'Ne',
  },
  IN_PROCESS: {
    en: 'In process',
    hr: 'U procesu',
  },
  HIGH_CONFLICT: {
    en: 'High conflict',
    hr: 'Visoko konflitkno',
  },
  LOW_CONFLICT: {
    en: 'Low conflict',
    hr: 'Nisko konfliktno',
  },
  MEDIUM_CONFLICT: {
    en: 'Medium conflict',
    hr: 'Srednje konfliktno',
  },
  NO_CONFLICT: {
    en: 'No conflict',
    hr: 'Bez konflikta',
  },
  UNKNOWN: {
    en: 'Unknown',
    hr: 'Nepoznato',
  },
  COURT: {
    en: 'Court',
    hr: 'Sud',
  },
  NOT_REPORTED: {
    en: 'Not reported',
    hr: 'Nije prijavljeno',
  },
  SOCIAL_WORK_CENTER: {
    en: 'Social work center',
    hr: 'Centar za socijalni rad',
  },
  HOSPITAL: {
    en: 'Hospital',
    hr: 'Bolnica',
  },
  KINDERGARTEN: {
    en: 'Kindergarten',
    hr: 'Vrtić',
  },
  MENTAL_HEALTH_CENTER: {
    en: 'Mental health center',
    hr: 'Centar za mentalno zdravlje',
  },
  PEDIATRIST: {
    en: 'Pediatrist',
    hr: 'Pedijatar',
  },
  POLICE: {
    en: 'Police',
    hr: 'Policija',
  },
  PSYCHIATRIST: {
    en: 'Psychiatrist',
    hr: 'Psihijatar',
  },
  SCHOOL: {
    en: 'School',
    hr: 'Škola',
  },
  SELF: {
    en: 'Self',
    hr: 'Sam',
  },
  AUNT: {
    en: 'Aunt',
    hr: 'Tetka',
  },
  COUSIN: {
    en: 'Cousin',
    hr: 'Rođak',
  },
  FRIEND: {
    en: 'Friend',
    hr: 'Prijatelj',
  },
  GRANDFATHER: {
    en: 'Grandfather',
    hr: 'Deda',
  },
  GRANDMOTHER: {
    en: 'Grandmother',
    hr: 'Baka',
  },
  LOVER: {
    en: 'Lover',
    hr: 'Ljubavnik',
  },
  UNCLE: {
    en: 'Uncle',
    hr: 'Ujak',
  },
  ALONE: {
    en: 'Alone',
    hr: 'Sam',
  },
  FOSTER_HOUSE: {
    en: 'Foster house',
    hr: 'Udomiteljska kuća',
  },
  TREATMENT: {
    en: 'Treatment',
    hr: 'Tretman',
  },
  EXTERNAL_TREATMENT: {
    en: 'External treatment',
    hr: 'Eksterni tretman',
  },
  NUMBER_OF_TREATMENTS: {
    en: 'Number of treatments',
    hr: 'Broj tretmana',
  },
  TREATMENTS: {
    en: 'Treatments',
    hr: 'Tretmani',
  },
  EXTERNAL: {
    en: 'External',
    hr: 'Eksterni',
  },
  TITLE: {
    en: 'Title',
    hr: 'Naslov',
  },
  FOR: {
    en: 'For',
    hr: 'Za',
  },
  FILE: {
    en: 'File',
    hr: 'Fajl',
  },
  FILES: {
    en: 'Files',
    hr: 'Fajlovi',
  },
  DISABLED: {
    en: 'Disabled',
    hr: 'Onemogućen',
  },
  ENABLED: {
    en: 'Enabled',
    hr: 'Omogućen',
  },
  PLEASE_WAIT: {
    en: 'Please wait',
    hr: 'Molimo pričekajte',
  },
  MENU: {
    en: 'Menu',
    hr: 'Meni',
  },
  ENTER_SEARCH_TEXT_HERE: {
    en: 'Enter your search text here',
    hr: 'Ovdje unesite tekst za pretragu',
  },
  TOGGLE_DARK_LIGHT_MODE: {
    en: 'Toggle dark/light mode',
    hr: 'Uključite tamni/svijetli način rada',
  },
  HELLO_USER: {
    en: 'Hello, {user}!',
    hr: 'Zdravo, {user}!',
  },
  SETTINGS: {
    en: 'Settings',
    hr: 'Postavke',
  },
  HOME_PAGE: {
    en: 'Home',
    hr: 'Home', // TODO: better translation for home page?
  },
  PASSWORD: {
    en: 'Password',
    hr: 'Šifra',
  },
  NEW_PASSWORD: {
    en: 'New password',
    hr: 'Nova šifra',
  },
  WELCOME: {
    en: 'Welcome!',
    hr: 'Dobro došli!',
  },
  SHOWING_N_OUT_OF_X_RESULTS: {
    en: 'Showing {count} out of {totalCount} {totalCount, plural, one {result} other {results}}',
    hr: '{count, plural, one {Prikazan} other {Prikazano}} {count} od {totalCount} {totalCount, plural, one {rezultat} other {rezultata}}',
  },
  ARE_YOU_SURE_DELETE: {
    en: 'Are you sure? Deleted items cannot be recovered!',
    hr: 'Da li ste sigurni? Izbrisane stavke se ne mogu vratiti!',
  },
  ARE_YOU_SURE_CHANGE_PRIMARY_THERAPIST: {
    en: "You're about to change the primary therapist, are you sure?",
    hr: 'Želite promijeniti primarnog terapeuta, da li ste sigurni?',
  },
  ADDED_BY_AGO: {
    en: 'Added by {by} {ago}',
    hr: 'Dodao/la {by} {ago}',
  },
  LAST_CHANGE_BY_AGO: {
    en: 'Last change by {updatedBy} {updatedAgo}',
    hr: 'Posljednja izmjena od {updatedBy} {updatedAgo}',
  },
  LAST_CHANGE_AGO: {
    en: 'Last change {updatedAgo}',
    hr: 'Posljednja izmjena {updatedAgo}',
  },
  TIMELINE: {
    en: 'Timeline',
    hr: 'Vremenska linija',
  },
  AND_N_MORE_EVENTS: {
    en: 'And {count} more {count, plural, one {event} other {events}}...',
    hr: 'I još {count} {count, plural, one {događaj} other {događaja}}...',
  },
  LASTED_X: {
    en: 'Lasted {text}',
    hr: 'Trajalo {text}',
  },
  DURATION_X: {
    en: 'Duration {text}',
    hr: 'Trajanje {text}',
  },
  DURATION_EXPLANATION: {
    en: 'Duration from the start to end',
    hr: 'Trajanje od početka do kraja',
  },
  INFORMATION: {
    en: 'Information',
    hr: 'Informacije',
  },
  DETAILS: {
    en: 'Details',
    hr: 'Detalji',
  },
  MORE: {
    en: 'More',
    hr: 'Više',
  },
  MORE_ABOUT_FILE: {
    en: 'More about file',
    hr: 'Više o fajlu',
  },
  ADDED_BY: {
    en: 'Added by',
    hr: 'Dodao/la',
  },
  MEDICAL_RECORD: {
    en: 'Medical record',
    hr: 'Karton',
  },
  MEDICAL_RECORDS: {
    en: 'Medical records',
    hr: 'Kartoni',
  },
  TIME: {
    en: 'Time',
    hr: 'Vrijeme',
  },
  SURVEY: {
    en: 'Survey',
    hr: 'Anketa',
  },
  OPTION_OTHER: {
    en: 'Other...',
    hr: 'Drugo...',
  },
  DISCRETE: {
    en: 'Discrete',
    hr: 'Diskretan',
  },
  DISCRETE_CLIENT_FORM_TEXT: {
    en: 'Discrete clients can only be accessed exclusively by the assigned therapists.',
    hr: 'Diskretnim klijentima imaju pristup isključivo dodijeljeni terapeuti.',
  },
  ADMINISTRATOR: {
    en: 'Administrator',
    hr: 'Administrator',
  },
  EMAIL: {
    en: 'E-Mail',
    hr: 'E-Mail',
  },
  VISIBLE: {
    en: 'Visible',
    hr: 'Vidljiv',
  },
  AND_N_MORE_ENTRIES: {
    en: 'And {count} more {count, plural, one {entry} other {entries}}...',
    hr: 'I još {count} {count, plural, one {unos} other {unosa}}...',
  },
  SAVE: {
    en: 'Save',
    hr: 'Snimi',
  },
  TRY_AGAIN: {
    en: 'Try again',
    hr: 'Pokušaj ponovo',
  },
  CREATE: {
    en: 'Create',
    hr: 'Kreiraj',
  },
  CREATE_NEW: {
    en: 'Create new',
    hr: 'Kreiraj novi',
  },
  DELETE: {
    en: 'Delete',
    hr: 'Izbriši',
  },
  SEARCH: {
    en: 'Search',
    hr: 'Pretraži',
  },
  HIDE: {
    en: 'Hide',
    hr: 'Sakrij',
  },
  ADD: {
    en: 'Add',
    hr: 'Dodaj',
  },
  DOWNLOAD: {
    en: 'Download',
    hr: 'Preuzmi',
  },
  OPEN: {
    en: 'Open',
    hr: 'Otvori',
  },
  BUILD: {
    en: 'Build',
    hr: 'Napravi',
  },
  BUILD_AGAIN: {
    en: 'Build again',
    hr: 'Napravi ponovo',
  },
  BUILD_REPORT: {
    en: 'Build report',
    hr: 'Napravi nalaz',
  },
  BACK: {
    en: 'Back',
    hr: 'Nazad',
  },
  SHOW_ERROR_DETAILS: {
    en: 'Show error details',
    hr: 'Prikaži detalje greške',
  },
  LOAD_MORE: {
    en: 'Load more',
    hr: 'Učitaj više',
  },
  LOG_OUT: {
    en: 'Log out',
    hr: 'Odjavi se',
  },
  LOG_IN: {
    en: 'Log in',
    hr: 'Prijavi se',
  },
  LOG_IN_DESCRIPTION: {
    en: 'Please log in using your credentials to access {heltin}.',
    hr: 'Prijavite se koristeći Vaše podatke da bi pristupili {heltin}-u.',
  },
  ENTER_YOUR_EMAIL: {
    en: 'Enter your e-mail address',
    hr: 'Unesite Vašu e-mail adresu',
  },
  ENTER_YOUR_PASSWORD: {
    en: 'Enter your password',
    hr: 'Unesite Vašu šifru',
  },
  SEARCH_CLIENTS: {
    en: 'Search clients',
    hr: 'Pretraži kartone',
  },
  PLEASE_SELECT_AN_ITEM: {
    en: 'Please select an item',
    hr: 'Molimo Vas da izaberete stavku',
  },
  SET: {
    en: 'Set',
    hr: 'Podesi',
  },
  CLICK_OR_DROP_FILES: {
    en: 'Click to select files or drop them here',
    hr: 'Kliknite da odaberete fajlove ili ih ispustite ovdje',
  },
  CANCEL: {
    en: 'Cancel',
    hr: 'Otkaži',
  },
  OPEN_REPORT: {
    en: 'Open report',
    hr: 'Otvori nalaz',
  },
  PRINT: {
    en: 'Print',
    hr: 'Printaj',
  },

  SAVING: {
    en: 'Saving',
    hr: 'Snimanje',
  },
  CREATE_SUCCESS: {
    en: 'Created successfully!',
    hr: 'Uspješno kreirano!',
  },
  ADD_SUCCESS: {
    en: 'Added successfully!',
    hr: 'Uspješno dodano!',
  },
  SAVE_SUCCESS: {
    en: 'Saved successfully!',
    hr: 'Uspješno snimljeno!',
  },
  DELETE_SUCCESS: {
    en: 'Deleted successfully!',
    hr: 'Uspješno izbrisano!',
  },
  FILE_UPLOAD_SUCCESS: {
    en: 'File upload successful!',
    hr: 'Prijenos fajla uspješan!',
  },
  BUILD_REPORT_SUCCESS: {
    en: 'Report built successfully!',
    hr: 'Nalaz uspješno napravljen!',
  },
  PRINT_SUCCESS: {
    en: 'Print successful!',
    hr: 'Printanje uspješno!',
  },
  LOADING: {
    en: 'Loading',
    hr: 'Učitavanje',
  },
  OOPS: {
    en: 'Oops!',
    hr: 'Ups!',
  },
  OOPS_SOMETHING_WENT_WRONG: {
    en: 'Oops, something went wrong!',
    hr: 'Ups, nešto je pošlo po zlu!',
  },
  PAGE_NOT_FOUND: {
    en: 'Requested page not found.',
    hr: 'Tražena stranica nije pronađena.',
  },
  NO_ENTRIES: {
    en: 'No entries',
    hr: 'Nema unosa',
  },
  NO_RESULTS: {
    en: 'No results',
    hr: 'Nema rezultata',
  },
  NO_ACTIVITIES: {
    en: 'No activities',
    hr: 'Nema aktivnosti',
  },
  CONCLUDED: {
    en: 'Concluded',
    hr: 'Zaključeno',
  },
  STARTED: {
    en: 'Started',
    hr: 'Početak',
  },
  ENDED: {
    en: 'Ended',
    hr: 'Kraj',
  },
  DOWNLOADING: {
    en: 'Downloading',
    hr: 'Preuzimanje',
  },
  LOGGING_OUT: {
    en: 'Logging out',
    hr: 'Odjavljivanje',
  },
  UNSAVED_CHANGES_PROMPT: {
    en: 'There are unsaved changes, are you sure you want to leave?',
    hr: 'Postoje nespremljene promjene, jeste li sigurni da želite napustiti?',
  },
  PENDING_UPLOADS_PROMPT: {
    en: 'There are pending file uploads, are you sure you want to leave?',
    hr: 'Prenos fajlova je u toku, jeste li sigurni da želite napustiti?',
  },
  CREATE_IN_PROGRESS: {
    en: 'Create in progress...',
    hr: 'Kreiranje u toku...',
  },
  ADD_IN_PROGRESS: {
    en: 'Adding in progress...',
    hr: 'Dodavanje u toku...',
  },
  SAVE_IN_PROGRESS: {
    en: 'Saving in progress...',
    hr: 'Snimanje u toku...',
  },
  DELETE_IN_PROGRESS: {
    en: 'Deleting in progress...',
    hr: 'Brisanje u toku...',
  },
  FILE_UPLOAD_IN_PROGRESS: {
    en: 'File upload in progress...',
    hr: 'Prijenos fajla u toku...',
  },
  BUILD_REPORT_IN_PROGRESS: {
    en: 'Building report...',
    hr: 'Pravljenje nalaza...',
  },
  PRINT_IN_PROGRESS: {
    en: 'Printing...',
    hr: 'Printanje...',
  },
  FILE_IS_PROTECTED: {
    en: 'File is protected',
    hr: 'Fajl je zaštićen',
  },
  FORM_FILLED: {
    en: 'Form filled',
    hr: 'Forma ispunjena',
  },
  THIS_FIELD_FIELD_HAS_AN_ERROR: {
    en: 'This field has an error!',
    hr: 'Ovo polje sadrži grešku!',
  },
  THIS_FIELD_IS_REQUIRED: {
    en: 'This field is required!',
    hr: 'Ovo polje je obavezno!',
  },
  CLIENT: {
    en: 'Client',
    hr: 'Klijent',
  },
  CLIENTS: {
    en: 'Clients',
    hr: 'Kartoni',
  },
  CLIENT_SENT_BY: {
    en: 'Client sent by',
    hr: 'Klijent poslan od strane',
  },
  CLINIC: {
    en: 'Clinic',
    hr: 'Klinka',
  },
  PEDIATRICIAN: {
    en: 'Pediatrician',
    hr: 'Pedijatar',
  },
  REFERAL: {
    en: 'Referal',
    hr: 'Preporuka',
  },
  SELF_INITIATIVE: {
    en: 'Self initiative',
    hr: 'Samoinicijativno',
  },
  NEW_CLIENT: {
    en: 'New client',
    hr: 'Novi karton',
  },
  CLIENT_EMAIL_FORM_TEXT: {
    en: 'If provided, will be used for sending reports and important notification.',
    hr: 'Ako je navedeno, koristit će se za slanje nalaza i važnih obavijesti.',
  },
  GENDER: {
    en: 'Gender',
    hr: 'Spol',
  },
  MALE: {
    en: 'Male',
    hr: 'Muško',
  },
  FEMALE: {
    en: 'Female',
    hr: 'Žensko',
  },
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
  NEW_THERAPIST: {
    en: 'New therapist',
    hr: 'Novi terapeut',
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
    en: 'Therapists that have access to the client, can create case studies, treatmants and fill out forms.',
    hr: 'Terapeuti koji imaju pristup klijentu, mogu praviti studije slučaja, tretmane, te ispunjavati forme.',
  },
  CASE_STUDY_ASSIGNED_THERAPISTS_DESCRIPTION: {
    en: 'Therapists assigned to the case study can read treatments, forms and the conclusion. While changes can be made exclusively by the primary therapist.',
    hr: 'Terapeuti dodijeljeni studiji slučaja mogu čitati tretmane, forme i zaključak. Dok izmjene može praviti isključivo primarni terapeut.',
  },
  PROFESSIONAL_TITLE: {
    en: 'Title',
    hr: 'Titula',
  },
  PRIMARY: {
    en: 'Primary',
    hr: 'Primarni',
  },
  PSYCHOTHERAPIST: {
    en: 'Psychotherapist',
    hr: 'Psihoterapeut',
  },
  PSYCHOLOGIST: {
    en: 'Psychologist',
    hr: 'Psiholog',
  },
  NEUROLOGIST: {
    en: 'Neurologist',
    hr: 'Neurolog',
  },
  SOCIAL_WORKER: {
    en: 'Social worker',
    hr: 'Socijalni radnik',
  },
  PEDAGOGUE: {
    en: 'Pedagogue',
    hr: 'Pedagog',
  },
  DEFECTOLOGIST: {
    en: 'Defectologist',
    hr: 'Defektolog',
  },
  PHONETICIAN: {
    en: 'Phonetician',
    hr: 'Fonetičar',
  },
  NEUROPSYCHIATRIST: {
    en: 'Neuropsychiatrist',
    hr: 'Neuropsihijatar',
  },
  CLINICAL_PSYCHOLOGIST: {
    en: 'Clinical psychologist',
    hr: 'Klinički psiholog',
  },
  SUPERVISOR: {
    en: 'Supervisor',
    hr: 'Supervizor',
  },
  LOGOPED: {
    en: 'Logoped',
    hr: 'Logoped',
  },
  OTHER: {
    en: 'Other',
    hr: 'Ostalo',
  },
  CAN_USER_ACCESS_HELTIN: {
    en: 'Can user access heltin?',
    hr: 'Da li korisnik može pristupiti heltin-u?',
  },
  IS_THERAPIST_VISIBLE_IN_HELTIN: {
    en: 'Is therapist visible during searches in heltin?',
    hr: 'Da li je terapeut vidljiv tokom pretrage heltin-a?',
  },
  THERAPIST_USER_FORM_TEXT: {
    en: 'heltin user which is actually this therapist.',
    hr: 'heltin-ov korisnik koji je u stvari ovaj terapeut.',
  },
  CASE: {
    en: 'Case',
    hr: 'Slučaj',
  },
  NEW_CASE_STUDY: {
    en: 'New case study',
    hr: 'Nova studija slučaja',
  },
  NEW_CASE_STUDY_FOR: {
    en: 'New case study for {name}',
    hr: 'Nova studija slučaja za {name}',
  },
  CASE_STUDY: {
    en: 'Case study',
    hr: 'Studija slučaja',
  },
  THIS_CASE_STUDY: {
    en: 'This case study',
    hr: 'Ova studija slučaja',
  },
  CASE_STUDIES: {
    en: 'History',
    hr: 'Historija',
  },
  CASE_HISTORY: {
    en: 'Case history',
    hr: 'Povijest slučaja',
  },
  CASE_HISTORIES: {
    en: 'Case histories',
    hr: 'Povijesti slučajeva',
  },
  ANAMNESIS: {
    en: 'Anamnesis',
    hr: 'Anamneza',
  },
  PLURAL_ANAMNESIS: {
    en: 'Anamnesis',
    hr: 'Anamneze',
  },
  ACCOMPANIED_BY: {
    en: 'Accompanied by',
    hr: 'U pratnji',
  },
  ARRIVAL_REASON: {
    en: 'Arrival reason',
    hr: 'Razlog dolaska',
  },
  EARLIER_PROFESSIONAL_HELP: {
    en: 'Earlier professional help',
    hr: 'Prijašnja profesionalna pomoć',
  },
  PREVIOUS_TREATMENT: {
    en: 'Previous treatment',
    hr: 'Prijašnji tretman',
  },
  INVOLVED_REFERRAL: {
    en: 'Involved referral',
    hr: 'Involvirana preporuka',
  },
  REFERRAL_DIAGNOSIS: {
    en: 'Referral diagnosis',
    hr: 'Diagnoza prepoporuke',
  },
  PARENTS: {
    en: 'Parents',
    hr: 'Roditelji',
  },
  PARTNER: {
    en: 'Partner',
    hr: 'Partner',
  },
  DIVORCED_PARENTS: {
    en: 'Divorced parents',
    hr: 'Razvedeni roditelji',
  },
  DIVORCE_OUTCOME: {
    en: 'Divorce outcome',
    hr: 'Ishod razvoda',
  },
  PARENTS_IN_JAIL: {
    en: 'Parents in jail',
    hr: 'Roditelji u zatvoru',
  },
  LIVES_WITH: {
    en: 'Lives with',
    hr: 'Živi sa',
  },
  DECEASED: {
    en: 'Deceased',
    hr: 'Preminuli',
  },
  LOSS_OF_CLOSE_INDIVIDUAL: {
    en: 'Loss of close individual',
    hr: 'Gubitak bliske osobe',
  },
  AGE_DURING_LOSS_OF_CLOSE_INDIVIDUAL: {
    en: 'Age during loss of close individual',
    hr: 'Starosna dob tokom gubitka bliske osobe',
  },
  ADOPTION_AGE: {
    en: 'Adoption age',
    hr: 'Godina usvojenja',
  },
  NUMBER_OF_ADOPTIONS: {
    en: 'Number of adoptions',
    hr: 'Broj usvajanja',
  },
  REASON_OF_MULTIPLE_ADOPTIONS: {
    en: 'Reason of multiple adoptions',
    hr: 'Razlog višestrukih usvajanja',
  },
  SCHOOL_MARK: {
    en: 'School mark',
    hr: 'Školska ocjena',
  },
  ATTENDS_KINDERGARTEN: {
    en: 'Attends kindergarten',
    hr: 'Pohađa vrtić',
  },
  DIAGNOSED_INTELECTUAL_DEVELOPMENT_PROBLEMS: {
    en: 'Diagnosed intelectual development problems',
    hr: 'Diagnosticiran problem intelektualnog razvoja',
  },
  ADAPTED_EDUCATION_PROGRAM: {
    en: 'Adapted education program',
    hr: 'Prilagođeni edukacijski program',
  },
  INDIVIDUALIZED_EDUCATION_PROGRAM: {
    en: 'Individualized education program',
    hr: 'Individiualizirani edukacijski program',
  },
  FURTHER_ABUSES: {
    en: 'Further abuses',
    hr: 'Daljnja zlostavljanja',
  },
  REPORTED_FURTHER_ABUSES: {
    en: 'Reported further abuses',
    hr: 'Prijavljenja daljnja zlostavljanja',
  },
  FAMILY_HEREDITY: {
    en: 'Family heredity',
    hr: 'Obiteljska nasljednost',
  },
  PTSP: {
    en: 'PTSP',
    hr: 'PTSP',
  },
  MEDICAL_REPORT: {
    en: 'Medical report',
    hr: 'Medicinski nalaz',
  },
  MEDICAL_REPORTS: {
    en: 'Medical reports',
    hr: 'Medicinski nalazi',
  },
  ABUSE_WITNESS: {
    en: 'Abuse witness',
    hr: 'Svjedok zlostavljanja',
  },
  BULLYING: {
    en: 'Bullying',
    hr: 'Nasilničko ponašanje',
  },
  CYBER_BULLYING: {
    en: 'Cyber bullying',
    hr: 'Cyber nasilje',
  },
  EMOTIONAL_ABUSE: {
    en: 'Emotional abuse',
    hr: 'Emocionalno zlostavljanje',
  },
  NEGLECTION: {
    en: 'Neglection',
    hr: 'Zapostavljanje',
  },
  PARENT_MANIPULATION: {
    en: 'Parent manipulation',
    hr: 'Roditeljska manipulacija',
  },
  PHYSICAL_ABUSE: {
    en: 'Physical abuse',
    hr: 'Fizičko zlostavljanje',
  },
  SEXUAL_ABUSE: {
    en: 'Sexual abuse',
    hr: 'Seksualno zlostavljanje',
  },
  ADDICTION: {
    en: 'Addiction',
    hr: 'Ovisnost',
  },
  ADHD: {
    en: 'ADHD',
    hr: 'ADHD',
  },
  ANXIETY: {
    en: 'Anxiety',
    hr: 'Anksioznost',
  },
  ATTENTION_PROBLEMS: {
    en: 'Attention problems',
    hr: 'Problemi sa pažnjom',
  },
  BEHAVIOURAL_PROBLEMS: {
    en: 'Behavioural problems',
    hr: 'Problemi u ponašanju',
  },
  COMMUNICATION_PROBLEMS: {
    en: 'Communication problems',
    hr: 'Problemi s komunikacijom',
  },
  COUPLE_PROBLEMS: {
    en: 'Couple problems',
    hr: 'Problemi s parom',
  },
  DEPRESION_SYMPTOMS: {
    en: 'Depresion symptoms',
    hr: 'Simptomi depresije',
  },
  DIVORCE: {
    en: 'Divorce',
    hr: 'Razvod',
  },
  DYSGRAPHIA: {
    en: 'Dysgraphia',
    hr: 'Disgrafija',
  },
  DYSLEXIA: {
    en: 'Dyslexia',
    hr: 'Disleksija',
  },
  EMOTIONAL_PROBLEMS: {
    en: 'Emotional problems',
    hr: 'Emocionalni problemi',
  },
  GRIEVE: {
    en: 'Grieve',
    hr: 'Žalovanje',
  },
  LEARNING_PROBLEMS: {
    en: 'Learning problems',
    hr: 'Problemi s učenjem',
  },
  LOSS: {
    en: 'Loss',
    hr: 'Gubitak',
  },
  NEURO_DEVELOPMENT_DISORDER: {
    en: 'Neuro development disorder',
    hr: 'Neurorazvojni poremećaj',
  },
  SLEEP_DEFICIENCY: {
    en: 'Sleep deficiency',
    hr: 'Manjak sna',
  },
  SUICIDAL_THOUGHTS: {
    en: 'Suicidal thoughts',
    hr: 'Suicidalne misli',
  },
  TALKING_ISSUES: {
    en: 'Talking issues',
    hr: 'Govorni problemi',
  },
  TRAUMA: {
    en: 'Trauma',
    hr: 'Trauma',
  },
  LOSS_OF_FOSTER_PARENT: {
    en: 'Loss of foster parent',
    hr: 'Gubitak udomitelja',
  },
  CREATE_CONCLUSION: {
    en: 'Create conclusion',
    hr: 'Napravi zaključak',
  },
  CONCLUDE_CASE_STUDY: {
    en: 'Conclude "{caseStudy}"',
    hr: 'Zaključi "{caseStudy}"',
  },
  NEW_TREATMENT: {
    en: 'New treatment',
    hr: 'Novi tretman',
  },
  TREATMENT_FOR_CASE_STUDY: {
    en: 'Treatment for case study',
    hr: 'Tretman studije slučaja',
  },
  TREATMENT_COMPLETION: {
    en: 'Treatment complete',
    hr: 'Završeno liječenje',
  },
  CANCELLATION_BY_CLIENT: {
    en: 'Canceled by client',
    hr: 'Otkazano od strane klijenta',
  },
  CANCELLATION_BY_PARENT: {
    en: 'Canceled by parent',
    hr: 'Otkazano od strane roditelja',
  },
  FURTHER_REFERRAL: {
    en: 'Referred further',
    hr: 'Poslan dalje',
  },
  CONCLUSION: {
    en: 'Conclusion',
    hr: 'Zaključak',
  },
  CONCLUDE: {
    en: 'Conclude',
    hr: 'Zaključi',
  },
  NEW_CASE_STUDY_TREATMENT: {
    en: 'New treatment',
    hr: 'Novi tretman',
  },
  NEW_CASE_STUDY_TREATMENT_FOR: {
    en: 'New treatment for {name}',
    hr: 'Novi tretman za {name}',
  },
  TREATMENT_EXTERNAL_FORM_TEXT: {
    en: 'Did the treatment happen outside of the locations heltin knows?',
    hr: 'Da li se tretman odvio van prostora za koje heltin zna?',
  },
  PLEASE_SAVE_TREATMENT_FIRST: {
    en: 'Please save the treatment first.',
    hr: 'Molimo Vas da prvo snimite tretman.',
  },
  PLEASE_SAVE_CONCLUSION_FIRST: {
    en: 'Please save the conclusion first.',
    hr: 'Molimo Vas da prvo snimite zaključak.',
  },
  PLEASE_SAVE_FORM_FIRST: {
    en: 'Please save the form first.',
    hr: 'Molimo Vas da prvo snimite formu.',
  },
  FILL_FORM: {
    en: 'Fill form',
    hr: 'Ispuni formu',
  },
  FILL_FORM_FOR: {
    en: 'Fill form "{name}"',
    hr: 'Ispuni formu "{name}"',
  },
  FORMS: {
    en: 'Forms',
    hr: 'Forme',
  },
  AVAILABLE_FORMS: {
    en: 'Available forms',
    hr: 'Dostupne forme',
  },
};
