import { Router } from 'express';
import { PeliculaService } from '../services/peliculaService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const peliculaService = new PeliculaService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const {titulo, orden} = req.query;
  
  const pelicula = await peliculaService.getPelicula(titulo, orden);

  return res.status(200).json(pelicula);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const pelicula = await peliculaService.createPelicula(req.body);

  return res.status(201).json(pelicula);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const pelicula = await peliculaService.updatePeliculaById(req.body);

  return res.status(200).json(pelicula);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const pelicula = await peliculaService.getPersonajePelicula(req.params.id);

  return res.status(200).json(pelicula);
});

export default router;