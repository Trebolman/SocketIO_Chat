import {Router} from 'express';//npm install @types/express

export var router = Router();

router.get('/mensajes',(req,res)=>{
    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto"
        });
});

router.post('/mensajes',(req,res)=>{
    var entrada = req.body.entrada;
    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto",
            entrada:entrada
        });
});

router.post('/mensajes/:id',(req,res)=>{
    var entrada = req.body.entrada;
    var id = req.params.id;
    res.status(200).send(
        {
            ok:true,
            mensaje:"Mensaje correcto",
            entrada:entrada,
            id:id
        });
});