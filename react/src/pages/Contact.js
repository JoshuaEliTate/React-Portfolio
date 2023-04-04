import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const Contact= () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_8c2f9bb', "template_saz6lxj", form.current, 'V1Akz0TnxKs8w1187')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };
 
 return (
   <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="name" />
     <label>Email</label>
     <input type="email" name="mail" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form>
 );
};
 
export default Contact;