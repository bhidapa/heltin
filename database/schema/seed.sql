-- john@doe.com:password
select public.create_user(
  email =>'john@doe.com',
  password => 'password',
  admin => true,
  enabled => true,
  id => '88bc02bf-000d-4120-8143-c0a095bb9192'
);

-- jane@doe.com:password
select public.create_user(
  email => 'jane@doe.com',
  password => 'password',
  admin => false,
  enabled => false,
  id => '1d35ee19-e375-4a75-b855-76adda9d583e'
);

-- client
insert into public.client (
  id,
  "number",
  first_name,
  last_name,
  date_of_birth,
  telephone,
  gender,
  city,
  address,
  created_by
) values (
  '88bc02bf-000d-4120-8143-c0a095bb9192',
  1,
  'Johnatan',
  'Doe',
  '2001-02-03',
  '123456789',
  'MALE',
  'London',
  'Westminister',
  '1d35ee19-e375-4a75-b855-76adda9d583e'
);
