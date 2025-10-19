import 'dotenv/config'
import express from 'express';

import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

await mongoose.connect (process.env.ATLAS_URI);

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(3000, async () => {
    console.log('listening:', port)
});



















