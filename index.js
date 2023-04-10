const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amaus",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la BD Mysql");
});

app.get('/',(req, res)=>{
    connection.query('SELECT * FROM tabla',(error, results, fields)=>{
        if(err) throw error;
        res.send(results);
    });
});
app.listen(port,() =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});