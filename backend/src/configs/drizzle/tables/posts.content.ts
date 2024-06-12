import { mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm/sql';

export const MVJ_POSTS_CONTENTS = mysqlTable('MVJ_POSTS_CONTENTS', {
  id: serial('id').primaryKey().autoincrement(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date())
    .notNull(),
});
