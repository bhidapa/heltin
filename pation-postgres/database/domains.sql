create domain created_timestamptz timestamptz default now();
comment on domain created_timestamptz is 'UTC timestamp representing the time at which a node is created.';

----

create domain updated_timestamptz timestamptz default now();
comment on domain updated_timestamptz is 'UTC timestamp representing the time at which a node is updated.';

----

create domain email_address text check (value ~ '^.+@.+\.(.+\.)?.+$');
comment on domain email_address is 'E-Mail address with simple plausability check.';
