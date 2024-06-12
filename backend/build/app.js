"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default.listen({ host: "0.0.0.0", port: 230 }, (err, address) => {
    if (err)
        process.exit(1);
    if (process.env["SERVER_ENVIRONMENT"] === "dev")
        console.log(`Servidor iniciado no endereço ${address}`);
});
//# sourceMappingURL=app.js.map