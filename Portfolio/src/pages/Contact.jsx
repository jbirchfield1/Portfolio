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
        .catch(err=>console.error("Error submitting the post:", err));
      };

    return(
        <>
        <Header />
        <h2>Contact</h2>

        <div>
            <h2>Submit a Message</h2>
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

                <button type="submit">Submit Post</button>
            </form>
        </div>
        <Footer />
        </>
    )
}