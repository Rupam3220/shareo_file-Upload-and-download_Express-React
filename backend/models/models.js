import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    path: {type: String, required: true},
    name: {type: String, required: true},
    downloadContent: {type: Number, required: true, default: 0},
})

const UploadModel = ("upload", uploadSchema)
export default UploadModel