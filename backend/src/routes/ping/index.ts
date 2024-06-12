import { FastifyInstance } from "fastify";

export default async function ping(fastify: FastifyInstance){
	fastify.route({
		url: "/",
		method: "GET",
		handler: async (_request, reply)=>{
			reply.code(200).send({ message: "oi" });
		},
	});
};
