import autoload from "@fastify/autoload";
import Fastify from "fastify";
import { join } from "path";

const fastify = Fastify();
fastify.register(autoload, {
	dir: join(__dirname, "plugins"),
});
fastify.register(autoload, {
	dir: join(__dirname, "routes"),
});

export default fastify;
