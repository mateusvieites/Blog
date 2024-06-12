import { FastifyInstance } from "fastify";

interface IResponse {
	content: any | any[];
	code: number;
}

interface IPost {
	title: string;
	description: string;
	createdAt: string;
}

export default async function ping(fastify: FastifyInstance) {
	fastify.route({
		url: "/:id",
		method: "GET",
		handler: async (request, reply) => {
			const response: IResponse = {
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
			//@ts-ignore
			if (request.query!.id!) {
				response.content = [
					{
						title: "mateus",
						description: "confirmado o mateus ama a tainara",
						createdAt: "11/06/2024",
						tags: ["typescript", "dev"],
						user: {
							name: "Mateus",
						},
						content: [
							"<div>Text sample</div>",
							"<div>Text sample</div>",
							"<div>Text sample</div>",
							"<div>Text sample</div>",
							"<div>Text sample</div>",
							"<div>Text sample</div>",
						],
					},
				];
			}
			reply.code(response.code).send(response);
		},
	});
}
