//Aca haremos nuestras consultas a nuestrad base de datos 
import { VarChar } from "mssql";
import { getConnection, sql, queries } from "../Database/Index"
//aca consultamos los datos de nuestra DB 
export const getClient = async (req, res) => {
    try {
        //La promesa se optine con un pool  asi que tenemos que instanciar lo para obtener un resultado
        const pool = await getConnection();
        //la instancia de getConnection regresa un pool lo cual le agregamos el req().query(codigo de sql sever) para interactiar con nuestra base de datos 
        const result = await pool.request().query(queries.getAllClient)
        console.log(result)
        res.json(result.recordset)// el 'recordset' es el resultado de la consulta que lo regresa en fromato json 

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

//Aca vamos a relizar el insert de nuestra BD
export const crearteNewClient = async (req, res) => {
    const { Cedula, Nombre, Apellido } = req.body
    let { Telefono } = req.body;
    if (Telefono == null) Telefono = 0;
    //validaciones
    if (Cedula == null || Nombre == null || Apellido == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input("Cedula", sql.VarChar, Cedula)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Apellido", sql.VarChar, Apellido)
            .input("Telefono", sql.VarChar, Telefono)
            .query(queries.CreateNewClient);
        res.json({ Cedula, Nombre, Apellido, Telefono });
    } catch (error) {
        res.status(500);
        res.send(error.message)

    }
}
//Realizamos busqueda del cliente por su numero de identificacion
export const getClientID = async (req, res) => {

    const { id } = req.params
    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .query(queries.GetClienteById)
    res.send(result.recordset[0])
}

export const deleteClientByID = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
        .input('id', id)
        .query(queries.DeleteClienByID)
    res.send(result)
}

export const getTotalClient = async (req, res) => {

    //La promesa se optine con un pool  asi que tenemos que instanciar lo para obtener un resultado
    const pool = await getConnection();
    //la instancia de getConnection regresa un pool lo cual le agregamos el req().query(codigo de sql sever) para interactiar con nuestra base de datos 
    const result = await pool
        .request()
        .query(queries.getTotalClient);
    console.log(result)
    res.json(result.recordset[0]['']);
}
//Modificacmos los datos del cliente buscando por el numero de identificacion
export const upDateClientByID = async (req, res) => {
    const { id } = req.params

    const { Nombre, Apellido, Telefono } = req.body;

    if (Nombre == null || Apellido == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' })
    }
    const pool = await getConnection();
    console.log(id);
    await pool
        .request()
        .input('Nombre', sql.VarChar, Nombre)
        .input('Apellido', sql.VarChar, Apellido)
        .input('Telefono', sql.VarChar, Telefono)
        .input('id', sql.VarChar, id)
        .query(queries.updateClient);
    res.json({ id, Nombre, Apellido, Telefono })
} 
