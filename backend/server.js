const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//middleware

app.use(cors());
app.use(express.json());

//connect to MongoDB

mongoose.connect('mongodb://localhost:27017/Portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.error('MongoDB error', err));


const educationSchema = mongoose.Schema({
    institution: String,
    degree: String,
    graduationyear: String,
    description: String,
});

const Edu = mongoose.model('Edu', educationSchema, 'education');

//Add routes

app.get('/education', async (req, res) =>{
    try{
        const edu = await Edu.find();
        res.json(edu);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch edu'});
    }
});

//start server

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});