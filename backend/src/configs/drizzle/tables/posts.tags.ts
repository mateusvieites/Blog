import { foreignKey, int, mysqlTable } from 'drizzle-orm/mysql-core';
import { MVJ_TAGS } from './tags';

export const MVJ_POSTS_TAGS = mysqlTable(
  'MVJ_POSTS_TAGS',
  {
    post_id: int('id').primaryKey().notNull(),
    tag_id: int('id').primaryKey().notNull(),
  },
  (MVJ_POSTS_TAGS) => ({
    tagsrForeignKey: foreignKey({
      columns: [MVJ_POSTS_TAGS.tag_id],
      foreignColumns: [MVJ_TAGS.id],
    }),
  })
);
