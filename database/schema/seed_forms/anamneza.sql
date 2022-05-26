insert into public.form (id, name, created_by)
values ('bc00d217-6e1b-419a-9730-592a62eac426', 'Anamneza', '1d35ee19-e375-4a75-b855-76adda9d583e');

----

create temp sequence anamneza_form_question_index minvalue 0;

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Poslan od',
  true,
  'DROPDOWN',
  '["Klinika",
  "Sud",
  "Vrtić",
  "Centar za mentalno zdravlje",
  "Pedijatar",
  "Policija",
  "Psihijatar",
  "Psihoterapeut",
  "Preporuka",
  "Škola",
  "Samoinicijativno",
  "Centar za socijalni rad",
  "Ostalo"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Razlog dolaska',
  false,
  'CHECKBOXES',
  '["Svjedok zlostavljanja",
  "Ovisnost",
  "ADHD",
  "Anksioznost",
  "Problemi sa pažnjom",
  "Problemi u ponašanju",
  "Nasilničko ponašanje",
  "Problemi s komunikacijom",
  "Problemi s parom",
  "Cyber nasilje",
  "Simptomi depresije",
  "Razvod",
  "Disgrafija",
  "Disleksija",
  "Emocionalno zlostavljanje",
  "Emocionalni problemi",
  "Žalovanje",
  "Problemi s učenjem",
  "Gubitak",
  "Zapostavljanje",
  "Neurorazvojni poremećaj",
  "Roditeljska manipulacija",
  "Fizičko zlostavljanje",
  "Seksualno zlostavljanje",
  "Manjak sna",
  "Suicidalne misli",
  "Govorni problemi",
  "Trauma",
  "Ostalo"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Preporuka',
  false,
  'CHECKBOXES',
  '["Sud",
  "Bolnica",
  "Vrtić",
  "Centar za mentalno zdravlje",
  "Pedijatar",
  "Policija",
  "Psihijatar",
  "Psihoterapeut",
  "Škola",
  "Sam",
  "Centar za socijalni rad",
  "Ostalo"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Diagnoza preporuke',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Involvirana preporuka',
  false,
  'DROPDOWN',
  '["Da", "Ne"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'U pratnji',
  false,
  'DROPDOWN',
  '["Familija",
  "Roditelji",
  "Otac",
  "Majka",
  "Partner",
  "Samostalan"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Prijašnja profesionalna pomoć',
  false,
  'CHECKBOXES',
  '["Psihoterapeut",
  "Psiholog",
  "Psihijatar",
  "Neurolog",
  "Pedijatar",
  "Socijalni radnik",
  "Pedagog",
  "Defektolog",
  "Fonetičar",
  "Neuropsihijatar",
  "Klinički psiholog",
  "Supervizor",
  "Logoped",
  "Ostalo"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Prijašnji tretman',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Razvedeni roditelji',
  false,
  'MULTIPLE_CHOICE',
  '["U procesu", "Ne", "Da"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Ishod razvoda',
  false,
  'DROPDOWN',
  '["Visoko konflitkno", "Srednje konfliktno", "Nisko konfliktno", "Bez konflikta"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Roditelji u zatvoru',
  false,
  'CHECKBOXES',
  '["Otac", "Majka"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Živi sa',
  false,
  'CHECKBOXES',
  '["Sam",
  "Tetka",
  "Brat",
  "Rođak",
  "Otac",
  "Udomitelj",
  "Udomiteljska kuća",
  "Udomiteljica",
  "Deda",
  "Baka",
  "Majka",
  "Ujak",
  "Sestra",
  "Očuh",
  "Maćeha",
  "Polubrat",
  "Polusestra"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Gubitak bliske osobe',
  false,
  'CHECKBOXES',
  '["Tetka",
  "Brat",
  "Rođak",
  "Otac",
  "Udomitelj",
  "Udomiteljska kuća",
  "Udomiteljica",
  "Deda",
  "Baka",
  "Majka",
  "Ujak",
  "Sestra",
  "Očuh",
  "Maćeha",
  "Polubrat",
  "Polusestra",
  "Prijatelj",
  "Ljubavnik"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Starosna dob tokom gubitka bliske osobe',
  false,
  'SHORT_ANSWER',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Godina usvojenja',
  false,
  'SHORT_ANSWER',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Broj usvajanja',
  false,
  'SHORT_ANSWER',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Razlog višestrukih usvajanja',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Pohađa vrtić',
  false,
  'DROPDOWN',
  '["Da", "Ne"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Školska ocjena',
  false,
  'SHORT_ANSWER',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Prilagođeni edukacijski program',
  false,
  'DROPDOWN',
  '["Da", "Ne"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Individiualizirani edukacijski program',
  false,
  'DROPDOWN',
  '["Da", "Ne"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Diagnosticiran problem intelektualnog razvoja',
  false,
  'DROPDOWN',
  '["Da", "Ne"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Daljnja zlostavljanja',
  false,
  'CHECKBOXES',
  '["Svjedok zlostavljanja",
  "Nasilničko ponašanje",
  "Cyber nasilje",
  "Emocionalno zlostavljanje",
  "Zapostavljanje",
  "Roditeljska manipulacija",
  "Fizičko zlostavljanje",
  "Seksualno zlostavljanje",
  "Ostalo"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Prijavljenja daljnja zlostavljanja',
  false,
  'DROPDOWN',
  '["Centar za socijalni rad", "Sud", "Nije prijavljeno"]',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Obiteljska nasljednost',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'PTSP',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);

insert into public.form_question (form_id, index, name, required, "type", options, created_by)
values (
  'bc00d217-6e1b-419a-9730-592a62eac426',
  nextval('anamneza_form_question_index'),
  'Bilješke',
  false,
  'PARAGRAPH',
  null,
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);
