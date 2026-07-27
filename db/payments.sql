-- Schema for the online-book purchase flow.
-- Apply with: npm run db:init-payments  (idempotent)

create table if not exists customers (
  id                  uuid primary key default gen_random_uuid(),
  email               text not null unique,
  stripe_customer_id  text unique,
  lang                text,
  created_at          timestamptz not null default now()
);

create table if not exists orders (
  id                        uuid primary key default gen_random_uuid(),
  customer_id               uuid not null references customers(id) on delete cascade,
  stripe_session_id         text not null unique,
  stripe_payment_intent_id  text,
  product                   text not null,
  amount_total              integer not null,
  currency                  text not null,
  status                    text not null,        -- paid | refunded
  lang                      text,
  reader_id                 text,                 -- analytics id from the reader_id cookie
  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now()
);

create index if not exists orders_customer_id_idx on orders (customer_id);

create table if not exists entitlements (
  id           uuid primary key default gen_random_uuid(),
  customer_id  uuid not null references customers(id) on delete cascade,
  product      text not null,
  order_id     uuid references orders(id) on delete set null,
  granted_at   timestamptz not null default now(),
  revoked_at   timestamptz,
  unique (customer_id, product)
);

-- Single-use magic-link tokens. Only the SHA-256 hash is stored, so a database
-- leak cannot be replayed into reader sessions.
create table if not exists auth_tokens (
  token_hash   text primary key,
  customer_id  uuid not null references customers(id) on delete cascade,
  purpose      text not null default 'magic_link',
  expires_at   timestamptz not null,
  used_at      timestamptz,
  created_at   timestamptz not null default now()
);

create index if not exists auth_tokens_customer_id_idx on auth_tokens (customer_id);

-- Webhook idempotency: Stripe retries deliveries, and a retried
-- checkout.session.completed must not send a second magic link.
create table if not exists stripe_events (
  id           text primary key,
  type         text not null,
  received_at  timestamptz not null default now()
);
