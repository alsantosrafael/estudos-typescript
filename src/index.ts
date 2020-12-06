import express from "express";
import { helloWorld } from "./routes";

const server = express();

server.get("/", helloWorld);

server.listen(8081, () => {
  console.log("Servidor rodando na porta 8081!");
});
