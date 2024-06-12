"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVJ_POSTS_CONTENTS = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const sql_1 = require("drizzle-orm/sql");
exports.MVJ_POSTS_CONTENTS = (0, mysql_core_1.mysqlTable)('MVJ_POSTS_CONTENTS', {
    id: (0, mysql_core_1.serial)('id').primaryKey().autoincrement(),
    content: (0, mysql_core_1.text)('content').notNull(),
    createdAt: (0, mysql_core_1.timestamp)('created_at')
        .default((0, sql_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at')
        .default((0, sql_1.sql) `CURRENT_TIMESTAMP`)
        .$onUpdate(() => new Date())
        .notNull(),
});
//# sourceMappingURL=posts.content.js.map