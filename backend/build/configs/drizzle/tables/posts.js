"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVJ_POSTS = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const drizzle_orm_1 = require("drizzle-orm");
const users_1 = require("./users"); // Importe a tabela MVJ_USERS
exports.MVJ_POSTS = (0, mysql_core_1.mysqlTable)('MVJ_POSTS', {
    id: (0, mysql_core_1.serial)('id').primaryKey(),
    userId: (0, mysql_core_1.serial)('user_id').notNull(),
    title: (0, mysql_core_1.varchar)('title', { length: 255 }).notNull(),
    description: (0, mysql_core_1.text)('description'),
    createdAt: (0, mysql_core_1.timestamp)('created_at')
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at')
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .$onUpdate(() => new Date())
        .notNull(),
}, (MVJ_POSTS) => ({
    userForeignKey: (0, mysql_core_1.foreignKey)({
        columns: [MVJ_POSTS.userId],
        foreignColumns: [users_1.MVJ_USERS.id],
    }),
}));
//# sourceMappingURL=posts.js.map