import mongoose from "mongoose";

const witnessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    age: {
        type: Number,
        required: true
        //Not indexed: high write-to-read ratio
    },
    gender: {
        type: String,
        required: true,
        index: true
    },
    credibilityScore: {
        type: Number,
        required: true,
        index: true
    }

});

const Witness = mongoose.model("witness", witnessSchema, "witness");

export default Witness;