import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class PersonajeService {

   getPersonaje = async (nombre,edad,peso,idPelicula) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
       
        let query=`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} `;

        if (idPelicula!=null) {
            query=query+" INNER JOIN PersonajesXPeliculas ON Personaje.Id= PersonajesXPeliculas.IdPersonaje WHERE PersonajesXPeliculas.IdPelicula = @id  "
        }

        if(nombre!=null){
            if(idPelicula!=null){ 
                query=query+" and Nombre=@nombre"//Va a la segunda query
            }
            else{
                query=query+ " where Nombre=@nombre" //Va a la primera query
            }
        }

        if(edad!=null){
            if(idPelicula!=null || nombre!=null){
                query=query+" and Edad=@edad" //No va a la primera
            }
            else{ 
                query=query+ " where Edad=@edad" //Va a la primera query
            } 
        }

        if(peso!=null){
            if(idPelicula!=null || nombre!=null || edad!=null){
                query=query+" and Peso=@peso" //No va a la primera
            }
            else{
                query=query+ " where Peso=@peso" //Va a la primera
            } 
        }

        console.log(query);
        console.log(nombre)
        const response = await pool.request()
        .input('Nombre',sql.VarChar,nombre)
        .input('Edad',sql.Int, edad)
        .input('Peso',sql.Int, peso)
        .input('IdPelicula',sql.Int, idPelicula).query(query);
       
        console.log(response)
    
        return response.recordset;
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, id)
            .query(`SELECT * from ${personajeTabla} where Id = @Id`);
        console.log(response)

        return response.recordset[0];
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, personaje?.id ?? 0)    
            .input('Imagen',sql.NChar, personaje?.imagen ?? '')
            .input('Nombre',sql.NChar, personaje?.nombre ?? '')
            .input('Edad',sql.Int, personaje?.edad ?? 0)
            .input('Peso',sql.Int, personaje?.peso ?? 0)
            .input('Historia',sql.NChar, personaje?.historia ?? '')
            .query(`INSERT INTO ${personajeTabla}(Id, Imagen, Nombre, Edad, Peso, Historia) VALUES (@Id, @Imagen, @Nombre, @Edad, @Peso, @Historia)`);
        console.log(response)

        return response.recordset;
    }

    updatePersonajeById = async (id, personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, personaje?.id ?? 0)    
            .input('Imagen',sql.NChar, personaje?.imagen ?? '')
            .input('Nombre',sql.NChar, personaje?.nombre ?? '')
            .input('Edad',sql.Int, personaje?.edad ?? 0)
            .input('Peso',sql.Int, personaje?.peso ?? 0)
            .input('Historia',sql.NChar, personaje?.historia ?? '')
            .query(`UPDATE Personajes SET Imagen = @Imagen, Nombre = @Nombre, Edad = @Edad, Peso = @Peso, Historia = @Historia WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${personajeTabla} WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }

    
}