import fastify from "./server";
fastify.listen({ host: "0.0.0.0", port: 230 }, (err, address) => {
	if (err) process.exit(1);
	if (process.env["SERVER_ENVIRONMENT"] === "dev")
		console.log(`Servidor iniciado no endereço ${address}`);
});
