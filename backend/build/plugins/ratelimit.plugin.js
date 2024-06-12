"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rate_limit_1 = __importDefault(require("@fastify/rate-limit"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const awaitTime = 1;
const timeRequests = 1000; //1 minuto
const rateLimit = async (fastify) => {
    void fastify.register(rate_limit_1.default, {
        global: false,
        max: async (request) => {
            return 120;
        },
        timeWindow: timeRequests,
        errorResponseBuilder: (_request, _context) => {
            return {
                statusCode: 429, // Código de status HTTP para limite de taxa excedido
                error: "Rate Limit Exceeded",
                message: `Você atingiu o limite de taxa de solicitações. Tente novamente em ${awaitTime} minuto.`,
            };
        },
    });
};
exports.default = (0, fastify_plugin_1.default)(rateLimit, {
    name: "rateLimit",
});
//# sourceMappingURL=ratelimit.plugin.js.map