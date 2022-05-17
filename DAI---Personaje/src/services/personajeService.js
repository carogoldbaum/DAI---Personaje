import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class PersonajeService {

    getPersonaje = async (nombre, edad) => {
        console.log('This is a function on the service');
        let response;
        if(!nombre){
            if(!edad){
                const pool = await sql.connect(config);
                response = await pool.request().query(`SELECT * from ${personajeTabla}`);

            }else{
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Edad',sql.Int, edad)
                .query(`SELECT * from ${personajeTabla} where Edad = @Edad`);
              
            }
        }
        else if(!edad){
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .query(`SELECT * from ${personajeTabla} where Nombre = @Nombre`);
              
            }
            else{
                const pool = await sql.connect(config);
                response = await pool.request()
                .input('Nombre',sql.NChar, nombre)
                .input('Edad',sql.Int, edad)
                .query(`SELECT * from ${personajeTabla} where Nombre = @Nombre AND Edad = @Edad`);
             
            }
        
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

    getImagenNombreIdFromPersonaje = async (imagen, nombre, id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Imagen',sql.NChar, imagen)
            .input('Nombre',sql.NChar, nombre)
            .input('Id',sql.Int, id)
            .query(`SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id from ${personajeTabla}`);
        console.log(response)

        return response.recordset[0];
    }
}