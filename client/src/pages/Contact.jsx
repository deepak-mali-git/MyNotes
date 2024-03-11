import React from 'react';
import './Contact.css'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Contact() {

    const { user,ready } = useContext(UserContext);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    // const [email, setEmail] = useState("");
    
    if(!ready && !user) {
        return <Navigate to="/" />
      }
    



    async function sendMessage() {
        const email = user.email;
        if (ready && user) {
            if(!name || !message) {
                alert("Please fill all the fields");
                return;
            }
            else if(name.length < 3  || message.length < 3) {
                alert("less then 3 character not allowed");return;
            }

            else if( name.length > 15 && message.length > 100) {
                alert("name max length 15w and message max length 100w");return;
            }
           
            try {
                const response = await axios.post('/message', { name, email,  message });
                alert("Message sent successfully");
                setName("");
                setMessage("");
              } catch (error) {
                alert("Error sending message");
              }
           
        }
        else {
            alert("login first");
        }
    }



    return (
        <div className='contact-container'>

    <label className='contact' htmlFor="fname">First Name</label>
    <input className='contact' type="text" id="fname" name="firstname" placeholder="Your name.. less than 15 characters and more then 3 character"
    onChange={(e) => setName(e.target.value)} value={name}/>

    <label htmlFor="subject">Subject</label>

    <input type="text" className='disabled' name="subject" placeholder="Enter your email" value={user.email} readOnly />
    <textarea id="subject" name="subject" placeholder="Write something..less than 100 characters and more then 3 character" style={{height:"200px"}} 
    onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

    <input onClick={sendMessage}  className='contact' type="submit" value="Submit"/>

        </div>
    )
}