import express from 'express'
const router = express.Router()
import { uploadFiles, downloadFile } from '../controllers/uploadController.js'
import upload from '../utils/uploadMiddleware.js'

router.post("/upload", upload.single('file'), uploadFiles)
router.get('/file/:fileId', downloadFile)


export default router