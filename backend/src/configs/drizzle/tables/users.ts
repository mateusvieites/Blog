import {
  mysqlTable,
  serial,
  varchar,
} from 'drizzle-orm/mysql-core';

export const MVJ_USERS = mysqlTable('MVJ_USERS', {
  id: serial('id').primaryKey().autoincrement(),
  login: varchar('login', { length: 50 }).notNull(),
  password: varchar('password', { length: 25 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
});
