import sql from 'mssql'
import Config from '../Config';
//importamos el modulo de sql para consulta a la base e instaciamos la base de datos con los datos a continuacion
const dbSettings={
    server: 'fsotechnosystems.database.windows.net',
    user: 'FsoTS23',
    password: 'AxellDereck2',
    database: 'BasePI',
    options:
    {
        encrypt: true, // for azure
        trustServerCertificate: true// para manera local
        
    }
}
//Funcion que interactuaq con la base de datos
export async function getConnection(){
try {
 const pool= await sql.connect(dbSettings);//aca instaciamos la coneccion de la base de datos
return pool;//Es poar asi de decir el cliente para hacer consulta o interactuar con nuestra base de datos
}catch(error){
    console.log(error);
}
}
export {sql}
