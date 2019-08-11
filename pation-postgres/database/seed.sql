-- john@doe.com:password
with new_private_user as (
  insert into private.user (id, password, admin)
    values (
      '1d35ee19-e375-4a75-b855-76adda9d583e',
      '$2a$06$ay7ksuh2ja.yd1meyf6wf.ra8ksxrov4xbyh4w0olcbgu57qbrnhw', -- "password"
      true
    )
  returning id
)
insert into public.user (id, email)
  values (
    (select id from new_private_user),
    'john@doe.com'
  );

-- jane@doe.com:password
with new_private_user as (
  insert into private.user (id, password)
    values (
      '34bc023a-d390-4ef4-bf98-a174bfe7e162',
      '$2a$06$ay7ksuh2ja.yd1meyf6wf.ra8ksxrov4xbyh4w0olcbgu57qbrnhw' -- "password"
    )
  returning id
)
insert into public.user (id, email)
  values (
    (select id from new_private_user),
    'jane@doe.com'
  );
