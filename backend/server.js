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

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, {
    timestamps: true
})

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    github: String,
    demo: String,
})

const skillSchema = mongoose.Schema({
    name: String,
    level: String,
    images: String,
})

const Edu = mongoose.model('Edu', educationSchema, 'education');
const Contact = mongoose.model('Contact', contactSchema);

//Consider storing file path for images in database as a string and pass into img tag
const Project = mongoose.model('Project', projectSchema);
const Skill = mongoose.model('Skill', skillSchema);

//Add routes

app.get('/education', async (req, res) =>{
    try{
        const edu = await Edu.find();
        res.json(edu);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch edu'});
    }
});

app.get('/contactMessages', async (req, res) =>{
    try{
        const messages = await Contact.find();
        res.json(messages);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch Messages'});
    }
});

app.get('/projects', async (req, res) =>{
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch projects'})
    }
})

app.get('/skills', async (req, res) =>{
    try{
        const skills = await Skill.find();
        res.json(skills)
    } catch(err){
        res.status(500).json({message: 'Failed to fetch skills'})
    }
})

app.post('/contactMessages', async (req, res) => {
    try{
        const {name, email, message} = req.body;
        const newMessage = new Contact({name, email, message});
        await newMessage.save();
        res.json(newMessage);
    } catch (err){
        res.status(500).json({message: 'Failed to save message.'});
    }
})

//start server

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});