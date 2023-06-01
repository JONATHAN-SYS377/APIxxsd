import  express  from "express";
import Config from "./Config";
import ClienteRputer from './router/Cliente.routes'
const app = express()
//setting
app.set('port',Config.port);
//Consfiguramos para aceptar datos de formularios de html
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// para que utilice la accion de 
app.use(ClienteRputer);
export default app;