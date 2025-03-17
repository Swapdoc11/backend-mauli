import express from 'express'
import {saveInfo} from '../controller/info.js'
const router = express.Router()
router.post('/saveinfo',saveInfo)

export default router;