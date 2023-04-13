import { Router } from "express";

const router = Router()

router.get('/form', (req, res) => res.send('Obteniendo fom'))
router.post('/form', (req, res) => res.send('Obteniendo fom'))
router.put('/form', (req, res) => res.send('Obteniendo fom'))
router.delete('/form', (req, res) => res.send('Obteniendo fom'))

export default router