import { Router } from 'express';
import { PersonajeService } from '../services/personajeService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const personajeService = new PersonajeService();

/* router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  
  const {nombre, edad, peso, idPelicula}= req.query;

  const personaje = await personajeService.getPersonaje(nombre, edad, peso, idPelicula);

  return res.status(200).json(personaje);
}); */

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await personajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await personajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatePersonajeById(req.body);

  return res.status(200).json(personaje);
});

export default router;