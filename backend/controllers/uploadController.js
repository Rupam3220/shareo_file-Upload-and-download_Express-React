import UploadModel from "../models/models.js"

export const uploadFiles = async(req, res) => {

    const uploadObj = {
        path: req.upload.path,
        name: req.upload.originalname,
    }

    try {
        const file = await UploadModel.create(uploadObj);
        console.log(file)
        res.json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`});
    } catch (error) {
        console.error(error.message)
        res.json({ error: error.message });
    }
}

export const downloadFile = async(req, res) => {
    try {
        const file = await UploadModel.findById(req.params.fileId)

        file.downloadFile++
        await file.save()
        res.download(file.path, file.name)
    } catch (error) {
        console.error(error.message)
        res.json({ error: error.message });
    }
}