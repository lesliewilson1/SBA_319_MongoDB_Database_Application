import mongoose from "mongoose";

const sightingSchema = new mongoose.Schema({
  datetime: { type: String, required: true, index: true }, // original sighting time
  city: { type: String, required: true, index: true },
  state: { type: String, required: true, index: true },
  country: { type: String, required: true, index: true },
  shape: { type: String, index: true },
  comments: { type: String }, //Not indexed: high write-to-read ratio
  date_posted: { type: String, index: true }, // when it was submitted to the database
  latitude: { type: Number }, //Not indexed: high write-to-read ratio
  longitude: { type: Number }, //Not indexed: high write-to-read ratio
});

const Sighting = mongoose.model("sighting", sightingSchema, "sighting");

export default Sighting;
