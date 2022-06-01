import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class PersonajeService {

   /* getPersonaje = async (nombre, edad, peso, idPelicula) => {
        console.log('This is a function on the service');
        let response;
        if(!nombre){
          if(!peso){
            if(!edad){
                const pool = await sql.connect(config);
                response = await pool.request().query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla}`);
            }else if(!peso && !nombre){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Edad',sql.Int, edad)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Edad = @Edad`);
              
            } else if(!nombre && !edad){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Peso',sql.Int, peso)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Peso = @Peso`);
            }
          } else if(!nombre){
            const pool = await sql.connect(config);
            response = await pool.request()
            .input('Peso',sql.Int, peso)
            .input('Edad',sql.Int, edad)
            .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Peso = @Peso AND Edad = @Edad`);
            }
        }
        
        else if(!edad){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .input('Peso',sql.Int, peso)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Nombre = @Nombre AND Peso = @Peso`);
              
            }
            else if(!peso){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .input('Edad',sql.Int, edad)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Nombre = @Nombre AND Edad = @Edad`);
            }
            
            else if (!edad && !peso){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Nombre = @Nombre`);
           
            }
            else{
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .input('Edad',sql.Int, edad)
                .input('Peso',sql.Int, peso)
                .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla} where Nombre = @Nombre, Edad = @Edad AND Peso = @Peso`);
             
            }
        
        console.log(response)
        return response.recordset;
    } */

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