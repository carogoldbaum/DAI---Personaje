import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const peliculaTabla = process.env.DB_TABLA_PELICULA;
const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class PeliculaService {

    getPelicula = async (titulo, orden) => {
        console.log('This is a function on the service');
        let response;
        if(!titulo){
            const pool = await sql.connect(config);
            response = await pool.request()
            .query(`SELECT Peliculas.IdPelicula, Peliculas.Imagen, Peliculas.Titulo, Peliculas.FechaCreacion from ${peliculaTabla}`);
        }
        else{  
            const pool = await sql.connect(config);
            response = await pool.request()
            .input('Titulo',sql.NChar, titulo ?? '')    
            .query(`SELECT * from ${peliculaTabla} WHERE Titulo = @Titulo order by FechaCreacion ${orden??'asc'}`);
        }
        console.log(response)
        return response.recordset;
    }

    createPelicula = async (pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, pelicula?.id ?? 0)    
            .input('Imagen',sql.NChar, pelicula?.imagen ?? '')
            .input('Titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('FechaCreacion',sql.Date, pelicula?.fechaCreacion ?? 0)
            .input('Calificacion',sql.Int, pelicula?.calificacion ?? 0)
            .query(`INSERT INTO ${peliculaTabla}(Id, Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@Id, @Imagen, @Titulo, @FechaCreacion, @Calificacion)`);
        console.log(response)

        return response.recordset;
    }

    updatePeliculaById = async (id, pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, pelicula?.id ?? 0)    
            .input('Imagen',sql.NChar, pelicula?.imagen ?? '')
            .input('Titulo',sql.NChar, pelicula?.titulo ?? '')
            .input('FechaCreacion',sql.Date, pelicula?.fechaCreacion ?? 0)
            .input('Calificacion',sql.Int, pelicula?.calificacion ?? 0)
            .query(`UPDATE Peliculas SET Imagen = @Imagen, Titulo = @Titulo, FechaCreacion = @FechaCreacion, Calificacion = @Calificacion WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${peliculaTabla} WHERE Id = @Id`);
        console.log(response)

        return response.recordset;
    }

    getPersonajePelicula = async (id) => {
        console.log('This is a function on the service');
        let response;
        let pool; 
        pool = await sql.connect(config);
        response = await pool.request()
        .input('id',sql.Int, id)
        .query(`select * from ${peliculaTabla} where Peliculas.IdPelicula = @id`);
        pool = await sql.connect(config);
        response = await pool.request()
        .input('id',sql.Int, id)
        .query(`select * from ${personajeTabla} INNER JOIN PersonajesXPeliculas on Personaje.Id = PersonajesXPeliculas.IdPersonaje where PersonajesXPeliculas.IdPelicula = @id`);
        console.log(response)

        return [response.recordset];
    }
}