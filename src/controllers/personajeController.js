import { Router } from 'express';
import { PersonajeService } from '../services/personajeService.js';

const router = Router();
const personajeService = new PersonajeService();

try {
router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const personajes = await personajeService.getPersonaje();

  return res.status(200).json(personajes);
});
}
catch (Error){
  console.error(404);
}

try {
router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await personajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});
}
catch (Error){
  console.error(404);
}

try { 
router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await personajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});
}
catch (Error){
  console.error(404);
}

try {
router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatePersonajeById(req.body);

  return res.status(200).json(personaje);
});
}
catch (Error){
  console.error(404);
}

try { 
router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await personajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});
}
catch (Error){
  console.error(404);
}

export default router;