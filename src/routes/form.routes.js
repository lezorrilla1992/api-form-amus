import { Router } from "express";
import { getForm, createForm, updateForm, deleteForm } from "../controllers/form.controller.js";
const router = Router()

router.get('/form', getForm)
router.post('/form', createForm)
router.put('/form', updateForm)
router.delete('/form', deleteForm)

export default router