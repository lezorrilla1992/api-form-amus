import { createPool } from "mysql";
const mysql = require("mysql");

 export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "amaus",
  });