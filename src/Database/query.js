//Hacemos nuestro codigo de sql server para hacer la ejecucion
export const queries = {
    getAllClient:
        'Select * from Tb_Cliente'
    , CreateNewClient:
        'insert into Tb_Persona (Cedula, Nombre, Apellido, Telefono ) values (@Cedula, @Nombre, @Apellido, @Telefono)'
    , GetClienteById: 'Select * from Tb_Persona where Cedula = @id'
    , DeleteClienByID:
        'DELETE FROM Tb_Persona where Cedula = @id'
    , getTotalClient:
        'Select count(*) from Tb_Persona'
    , updateClient:
        'UPDATE Tb_Persona SET Nombre = @Nombre, Apellido = @Apellido, Telefono = @Telefono  where Cedula = @id'


}
