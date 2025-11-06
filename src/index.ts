import 'dotenv/config';
import 'module-alias/register';

import cors from "cors";
import express from "express";
import { routes } from "./adapters/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.URL_FRONTEND,  
  credentials: false // se estiver usando cookies/autenticação
}));

app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

app.use(routes)


const PORT = process.env.PORT || 3000;
const PROCESS = process.env.NODE_ENV || 'not defined';

const server = app.listen(PORT,() => {  
  console.log(`Server is running on port ${PORT} in ${PROCESS} mode`);
});

server.on('error', (error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});