import {Router} from 'express';//npm install @types/express
import Server  from '../classes/server'; // exporta 

export var router = Router();

router.get('/mensajes',(req,res)=>{
    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto"
        });
});

router.post('/mensajes',(req,res)=>{
    var de = req.body.de;
    var entrada = req.body.entrada;

    const payload = {
        de,
        entrada
    }

    const server = Server.instance;
    server.io.emit('mensaje-together', payload);

    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto",
            entrada:entrada
        });
});

router.post('/mensajes/:id',(req,res)=>{
    var de = req.body.de; // para ver de quien viene el mensaje
    var entrada = req.body.entrada;
    var id = req.params.id;

    const payload = {
        de: de,
        entrada: entrada
    }

    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado',payload);

    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto",
            // entrada:entrada,
            entrada, //es lo mismo
            // id:id
            id
        });
});