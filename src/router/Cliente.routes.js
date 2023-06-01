import { Router } from "express";
import { crearteNewClient, deleteClientByID, getClient, getClientID, getTotalClient,  upDateClientByID } from "../controllers/Cliente.Controller";
const router = Router()

//aca espeficicamos las rutas para hacerr la interacciones a nuestra base de datos
router.get('/Cliente', getClient);

//Ruta para insertar datos en nuestra base de datos
router.post('/Cliente',crearteNewClient);
//Ruta para consular por id los datos de la base de datos
router.get('/Cliente/:id',getClientID);
//Ruta para eliminar los datos de la base de datos
router.delete('/Cliente/:id',deleteClientByID);
//contar cuantos cliente se encuentran registrados en BD
router.get('/Cliente/count',getTotalClient);
//Ruta para modificar los datos de la tabla 
router.put('/Cliente/:id', upDateClientByID);
export default router;