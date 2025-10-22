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

//Get sightings by _id
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

//Post witness
app.post('/witnesses', async (req, res) => {
    try{
        const witnessDoc = new Witness(req.body);
        const result = await witnessDoc.save();
        res.json(result)
        console.log(result)
    }catch(er) {
        res.status(400).json({ Oops: er.message });
    }

});

//Post media
app.post('/media', async (req, res) => {
    try{
        const mediaDoc = new Media(req.body);
        const result = await mediaDoc.save();
        res.json(result)
        console.log(result)
    }catch(er) {
        res.status(400).json({ Oops: er.message });
    }

});


//-----------------------------------End Post Routes---------------------------------------------//
//-----------------------------------Put Routes---------------------------------------------//
app.put('/media/:id', async (req, res) => {
    try {const result = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true});
} catch(er) {
    res.status(500).json({ Oops: er.message });
}

});
//-----------------------------------End Put Routes---------------------------------------------//


//-----------------------------------Delete Routes---------------------------------------------//

//Delete witness
app.delete('/witness/:id', async (req, res) => {
    try {
        const result = await Witness.deleteOne({ _id: req.params.id });
        console.log(result);
        res.json({ message: 'Witness information deleted successfully', result });
    } catch (er) {
        console.error(er);
        res.status(500).json({ Oops: er.message})
    }
})

//Delete media
app.delete('/media/:id', async (req, res) => {
    try {
        const result = await Media.deleteOne({ _id: req.params.id });
        console.log(result);
        res.json({ message: 'Media information deleted successfully', result });
    } catch (er) {
        console.error(er);
        res.status(500).json({ Oops: er.message})
    }
})
//-----------------------------------End Delete Routes---------------------------------------------//

//testing main URL
app.get('/', (req,res) => {
    res.send('Welcome humaniods to our humanmade UFO sightings database. We come in peace (for the most part)☮');
});

app.listen(3000, async () => {
    console.log('listening:', port)
});



















