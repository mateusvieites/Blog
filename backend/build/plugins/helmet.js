"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const cors_1 = __importDefault(require("@fastify/cors"));
const cors = async (fastify) => {
    void fastify.register(cors_1.default, {
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
        origin: true,
    });
};
exports.default = (0, fastify_plugin_1.default)(cors, {
    name: "cors",
});
//# sourceMappingURL=helmet.js.map