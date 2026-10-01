import { AppDataSource } from "./db/data-source";
import express, { type Application } from "express";

const port: number = Number(process.env.PORT) ?? 3000;
const app: Application = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log("Banco conectado");
    });
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao banco ${err}`);
  });
