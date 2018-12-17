import Server from './classes/server';
import bodyParser, { urlencoded } from 'body-parser';
import cors from 'cors';//npm install @types/cors
import { router } from './routes/router';

//INstanciando el servidor
const server = new Server();
//configurando bodyparser para que los argumentos que lleguen por urlencoded
//lleguen en el arreglo 'body' del request
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//CORS
server.app.use(cors({origin:true, credentials:true}));
//configurando las rutas
server.app.use('/',router); //var app = express()
//iniciando el servidor
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})