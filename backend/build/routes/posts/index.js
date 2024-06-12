"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function ping(fastify) {
    fastify.route({
        url: "/",
        method: "GET",
        handler: async (_request, reply) => {
            const response = {
                code: 200,
                content: [
                    {
                        title: "mateus",
                        description: "confirmado o mateus ama a tainara",
                        createdAt: "11/06/2024",
                        tags: ["typescript", "dev"],
                        user: {
                            name: "Mateus",
                        },
                    },
                    {
                        title: "mateus",
                        description: "confirmado o mateus ama a tainara",
                        createdAt: "11/06/2024",
                        tags: ["typescript", "dev"],
                        user: {
                            name: "Mateus",
                        },
                    },
                    {
                        title: "mateus",
                        description: "confirmado o mateus ama a tainara",
                        createdAt: "11/06/2024",
                        tags: [
                            "typescript",
                            "dev",
                            "typescript",
                            "dev",
                            "typescript",
                            "dev",
                        ],
                        user: {
                            name: "Mateus",
                        },
                    },
                ],
            };
            reply.code(response.code).send(response);
        },
    });
}
exports.default = ping;
//# sourceMappingURL=index.js.map