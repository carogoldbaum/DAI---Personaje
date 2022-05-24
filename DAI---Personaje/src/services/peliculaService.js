import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const peliculaTabla = process.env.DB_TABLA_PELICULA;

export class PeliculaService {

    getPelicula = async (nombre, edad) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()

        console.log(response)
        return response.recordset;
    }

    getPeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, id)
            .query(`SELECT * from ${peliculaTabla} where Id = @Id`);
        console.log(response)

        return response.recordset[0];
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
}