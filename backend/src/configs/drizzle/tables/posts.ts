import {
  mysqlTable,
  serial,
  varchar,
  text,
  timestamp,
  foreignKey,
} from 'drizzle-orm/mysql-core';

import { sql } from 'drizzle-orm';

import { MVJ_USERS } from './users'; // Importe a tabela MVJ_USERS

export const MVJ_POSTS = mysqlTable(
  'MVJ_POSTS',
  {
    id: serial('id').primaryKey(),
    userId: serial('user_id').notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description'),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (MVJ_POSTS) => ({
    userForeignKey: foreignKey({
      columns: [MVJ_POSTS.userId],
      foreignColumns: [MVJ_USERS.id],
    }),
  })
);
