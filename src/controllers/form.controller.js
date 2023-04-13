 import { pool } from "../db.js";

 export const getForm = (req, res) => {
    
 }
 export const createForm = async (req, res) => {
    const {firstName} = req.body
    const [rows] = await pool.query('INSERT INTO amaus VALUES (?)', [firstName])
    res.send({rows})
    console.log(req.body)
 }
 export const updateForm = (req, res) => res.send('Obteniendo fom')
 export const deleteForm = (req, res) => res.send('Obteniendo fom')