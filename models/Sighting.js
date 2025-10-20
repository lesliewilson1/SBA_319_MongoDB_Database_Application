import mongoose from "mongoose";

const sightingSchema = new mongoose.Schema({
  datetime: { type: String, required: true }, // original sighting time
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  shape: { type: String },
  comments: { type: String },
  date_posted: { type: String }, // when it was submitted to the database
  latitude: { type: Number },
  longitude: { type: Number }
})

const Sighting = mongoose.model("sighting", sightingSchema, "sighting")

export default Sighting