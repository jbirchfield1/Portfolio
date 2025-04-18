import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './partials/Header';
import Footer from './partials/Footer';

export default function Contact(){
    const [messages, setMessages] = useState([]);
    const [form, setForm] = useState({name:'', email:'', message:''});

    useEffect(() => {
        axios.get('http://localhost:5000/contactMessages')
        .then(res=> setMessages(res.data))
        .catch(err=> console.error("Error fetching messages:", err));
      }, []);

      const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/contactMessages', form)
        .then(res=>{
          setMessages([...messages, res.data]);
          setForm({name:'', email:'', message:''})
        })
        .catch(err=>console.error("Error submitting the message:", err));
      };

    return(
        <>
        <Header />
        <h2 className='text-xl'>Contact</h2>

        <p>Here are some ways to contact me:</p>
        <ul>
          <li>Email address: <a href="mailto:joshua.birchfield32@gmail.com" className="text-pink-600">joshua.birchfield32@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/joshua-birchfield-b13304295" className="text-pink-600">Joshua Birchfield</a></li>
          <li>GitHub: <a href="https://github.com/jbirchfield1" className="text-pink-600">Jbirchfield1</a></li>
        </ul>

        <div>
            <h2 className='text-lg'>Submit a Message</h2>
            <form onSubmit={handleSubmit}>
                <input
                name = "name"
                placeholder = "Sender Name"
                value = {form.name}
                onChange = {handleChange}
                style ={{width: '100%', padding: '10px', marginBottom: '10px'}}
                />

                <input 
                name="email"
                placeholder="Sender Email"
                value = {form.email}
                onChange = {handleChange}
                style ={{width: '100%', padding: '10px', marginBottom: '10px'}}
                />

                <textarea 
                name="message"
                placeholder = "Message Body"
                value = {form.message}
                onChange = {handleChange}
                style ={{width: '100%', padding: '10px', marginBottom: '10px'}}
                />

                <button type="submit" className='bg-blue-900 text-white rounded-sm w-30 h-8'>Submit Post</button>
            </form>
        </div>
        <Footer />
        </>
    )
}