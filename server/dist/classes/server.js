"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando libreria express
const express_1 = __importDefault(require("express"));
const environment_1 = require("../globals/environment");
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const n_usuario_lista_1 = require("./n_usuario_lista");
const n_usuario_1 = require("./n_usuario");
//creando la clase del servidor
class Server {
    //constructor del servidor
    constructor() {
        this.usuariosConectados = new n_usuario_lista_1.NUsuariosLista();
        this.app = express_1.default(); //instancia del servidor
        this.port = environment_1.SERVER_PORT;
        //Configurando el nuevo servidor web a través de http
        this.httpServer = new http_1.default.Server(this.app); //httpserver si es compatible con socket
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSockets();
    }
    static get instance() {
        if (this._instance) { //Si es que ya existe una instancia, retorna la misma instancia
            return this._instance;
        }
        else {
            this._instance = new this();
            return this._instance;
        }
    }
    //funcion para escuchar las conexiones
    escucharSockets() {
        console.log("Listo para recibir conexiones o sockets o clientes");
        this.io.on('connect', cliente => {
            console.log("Nuevo cliente conectado", cliente.id);
            const usuario = new n_usuario_1.NUsuario(cliente.id);
            this.usuariosConectados.agregar(usuario);
            //el cliente que se ha conectado previamente, escucha su desconexion
            cliente.on('disconnect', () => {
                this.usuariosConectados.deleteUsuario(cliente.id);
                console.log("el cliente se ha desconectado");
            });
            //el cliente que se ha conectado previamente, escucha un evento de nombre
            cliente.on('mensaje', (contenido) => {
                console.log("[on-mensaje] =>", contenido);
                this.io.emit('mensaje-nuevo', contenido);
            });
            //
            cliente.on("configurar-usuario", (payload, callback) => {
                // console.log(payload);
                this.usuariosConectados.updateNombre(cliente.id, payload.nombre);
                callback({
                    ok: true,
                    mensaje: `Usuario ${payload.nombre} configurado`
                });
            });
        });
    }
    //funcion para iniciar el servidor
    start(callback) {
        this.httpServer.listen(this.port, callback); //empieza a escuchar el puerto
    }
}
exports.default = Server;
