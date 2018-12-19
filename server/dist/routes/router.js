"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //npm install @types/express
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto"
    });
});
exports.router.post('/mensajes', (req, res) => {
    var entrada = req.body.entrada;
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto",
        entrada: entrada
    });
});
exports.router.post('/mensajes/:id', (req, res) => {
    var entrada = req.body.entrada;
    var id = req.params.id;
    res.status(200).send({
        ok: true,
        mensaje: "Mensaje correcto",
        entrada: entrada,
        id: id
    });
});
