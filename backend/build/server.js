"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autoload_1 = __importDefault(require("@fastify/autoload"));
const fastify_1 = __importDefault(require("fastify"));
const path_1 = require("path");
const fastify = (0, fastify_1.default)();
fastify.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, "plugins"),
});
fastify.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, "routes"),
});
exports.default = fastify;
//# sourceMappingURL=server.js.map