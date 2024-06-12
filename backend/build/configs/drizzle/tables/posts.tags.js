"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVJ_POSTS_TAGS = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const tags_1 = require("./tags");
exports.MVJ_POSTS_TAGS = (0, mysql_core_1.mysqlTable)('MVJ_POSTS_TAGS', {
    post_id: (0, mysql_core_1.int)('id').primaryKey().notNull(),
    tag_id: (0, mysql_core_1.int)('id').primaryKey().notNull(),
}, (MVJ_POSTS_TAGS) => ({
    tagsrForeignKey: (0, mysql_core_1.foreignKey)({
        columns: [MVJ_POSTS_TAGS.tag_id],
        foreignColumns: [tags_1.MVJ_TAGS.id],
    }),
}));
//# sourceMappingURL=posts.tags.js.map