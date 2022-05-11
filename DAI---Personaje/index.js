import express from "express";
import cors from "cors";
import passport from 'passport';
import { jwtStrategy } from './src/common/jwt.strategy.js';
import PersonajeRouter from "./src/controllers/personajeController.js";
import AuthRouter from "./src/controllers/authController.js";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/personaje", PersonajeRouter);
app.use("/auth", AuthRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});