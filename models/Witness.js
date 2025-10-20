import mongoose from "mongoose";

const witnessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    credibilityScore: {
        type: Number,
        required: true
    }

});

const Witness = mongoose.model("witness", witnessSchema, "witness");

export default Witness;