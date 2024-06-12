"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVJ_USERS = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.MVJ_USERS = (0, mysql_core_1.mysqlTable)('MVJ_USERS', {
    id: (0, mysql_core_1.serial)('id').primaryKey().autoincrement(),
    login: (0, mysql_core_1.varchar)('login', { length: 50 }).notNull(),
    password: (0, mysql_core_1.varchar)('password', { length: 25 }).notNull(),
    email: (0, mysql_core_1.varchar)('email', { length: 100 }).notNull(),
});
//# sourceMappingURL=users.js.map