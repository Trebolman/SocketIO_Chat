"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors")); //npm install @types/cors
const router_1 = require("./routes/router");
//INstanciando el servidor
// const server = new Server();
const server = server_1.default.instance;
//configurando bodyparser para que los argumentos que lleguen por urlencoded
//lleguen en el arreglo 'body' del request
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
//configurando las rutas
server.app.use('/', router_1.router); //var app = express()
//iniciando el servidor
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
