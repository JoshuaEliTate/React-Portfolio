import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
const Contact= () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_7bd4ivv', "template_jgpy0nf", form.current, 'V1Akz0TnxKs8w1187')
     .then((result) => {
         alert("Your message has sent!")
     }, (error) => {
         alert("there was an error sending your message")
     });
 };
 
 return (
   <form ref={form} onSubmit={sendEmail} className="align">
    <div className="alignDiv">
     <label>Name</label>
     <input type="text" name="user_name" />
    </div>
    <div className="alignDiv">
     <label>Email</label>
     <input type="email" name="user_mail" />
    </div>
    <div className="alignDiv">
     <label>Message</label>
     <textarea name="message" />
    </div>
    <div className="alignDiv">
     <input type="submit" value="Send" />
     </div>
   </form>
 );
};
 
export default Contact;