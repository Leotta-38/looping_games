CREATE DATABASE loopingrooms;

CREATE TABLE "usersessions" (
  "sid" varchar NOT NULL COLLATE "default",
  "expire" timestamp(6) NOT NULL,
  "q1" varchar,
  "q2" varchar,
  "q3" varchar,
  "q4" varchar,
  "count" integer,
  "username" text
);
