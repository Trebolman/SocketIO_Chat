"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //npm install @types/express
const server_1 = __importDefault(require("../classes/server")); // exporta 
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto"
    });
});
exports.router.post('/mensajes', (req, res) => {
    var de = req.body.de;
    var entrada = req.body.entrada;
    const payload = {
        de,
        entrada
    };
    const server = server_1.default.instance;
    server.io.emit('mensaje-together', payload);
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto",
        entrada: entrada
    });
});
exports.router.post('/mensajes/:id', (req, res) => {
    var de = req.body.de; // para ver de quien viene el mensaje
    var entrada = req.body.entrada;
    var id = req.params.id;
    const payload = {
        de: de,
        entrada: entrada
    };
    const server = server_1.default.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto",
        // entrada:entrada,
        entrada,
        // id:id
        id
    });
});
