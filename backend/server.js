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

const Edu = mongoose.model('Edu', educationSchema, 'education');
const contact = mongoose.model('contact', contactSchema);
const project = mongoose.model('project', projectSchema);

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
        const messages = await contact.find();
        res.json(messages);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.get('/projects', async (req, res) =>{
    try{
        const projects = await project.find();
        res.json(projects);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch projects'})
    }
})

app.post('/contactMessages', async (req, res) => {
    try{
        const {name, email, message} = req.body;
        const newMessage = new contact({name, email, message});
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