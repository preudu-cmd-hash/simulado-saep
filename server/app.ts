import { AppDataSource } from "./db/data-source";
import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao banco ${err}`);
  });
