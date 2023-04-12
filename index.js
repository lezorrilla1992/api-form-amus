import express from 'express'
const bodyParser = require("body-parser");
const port = 3000;
import { pool } from "./src/db";

const app = express();
app.use(bodyParser.json());




connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la BD Mysql");
});
//Route
app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT 1 + 1 AS result');
  res.json(result)
})
app.get('/form', (req, res) => res.send('Obteniendo fom'))
app.post('/form', (req, res) => res.send('Obteniendo fom'))
app.put('/form', (req, res) => res.send('Obteniendo fom'))
app.delete('/form', (req, res) => res.send('Obteniendo fom'))


app.listen(port,() =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});