import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const MVJ_TAGS = mysqlTable('MVJ_TAGS', {
  id: serial('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 50 }).notNull().unique(),
});
