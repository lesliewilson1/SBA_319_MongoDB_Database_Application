import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema({
    format: {
        type: String,
        required: true,
        index: true
    },
    url: {
        type: String,
        required: true
        //Not indexed: high write-to-read ratio
    },
    witness: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Witness', 
        required: true,
        index: true
    }

})

const Media = mongoose.model("media", mediaSchema, "media")

export default Media