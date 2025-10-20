import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema({
    format: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
})

const Media = mongoose.model("media", mediaSchema, "media")

export default Media