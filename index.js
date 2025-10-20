import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import Sighting from './models/Sighting.js'
import Witness from './models/Witness.js'
import Media from './models/Media.js'
const app = express()
const port = process.env.PORT || 3000

await mongoose.connect (process.env.ATLAS_URI)

app.use(express.json())

//-----------------------------------Get Routes-------------------------------------------//

//Get all sightings
app.get('/sightings', async (req,res) => {
    const results = await Sighting.find({})
    res.json(results)
});

//Get all witnesses
app.get('/witnesses', async (req,res) => {
    const results = await Witness.find({})
    console.log(results)
    res.json(results)
});

//Get all media
app.get('/media', async (req,res) => {
    const results = await Media.find({})
    res.json(results)
});

//Get sightings by ID
app.get('/sightings/:id', async (req, res) =>{
    const results = await Sighting.find({ _id: req.params.id })
    console.log(results)
    res.json(results)
});

//Get witnesses by ID
app.get('/witnesses/:id', async (req, res) =>{
    const results = await Witness.find({ _id: req.params.id })
    console.log(results)
    res.json(results)
});

//Get media by ID
app.get('/media/:id', async (req, res) =>{
    const results = await Media.find({ _id: req.params.id })
    console.log(results)
    res.json(results)
});
//-----------------------------------End Get Routes-------------------------------------------//
//-----------------------------------Post Routes---------------------------------------------//
app.post('/witnesses', async (req, res) => {
    try{
        const withnessDoc = new Witness(req.body);
        const result = await withnessDoc.save();
        res.json(result)
        console.log(result)
    }catch(er) {
        res.status(400).json({ Oops: er.message });
    }

});





//testing main URL
app.get('/', (req,res) => {
    res.send('Welcome humaniods to our humanmade UFO sightings database. We come in peace (for the most part)☮');
});

app.listen(3000, async () => {
    console.log('listening:', port)
});



















