"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function ping(fastify) {
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (_request, reply) => {
            reply.code(200).send({ message: "oi" });
        },
    });
}
exports.default = ping;
;
//# sourceMappingURL=index.js.map