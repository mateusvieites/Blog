"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVJ_TAGS = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.MVJ_TAGS = (0, mysql_core_1.mysqlTable)('MVJ_TAGS', {
    id: (0, mysql_core_1.serial)('id').primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)('name', { length: 50 }).notNull().unique(),
});
//# sourceMappingURL=tags.js.map