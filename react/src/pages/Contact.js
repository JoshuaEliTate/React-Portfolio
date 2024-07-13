import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
const Contact= () => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_t0jbs5g', "template_jgpy0nf", form.current, 'V1Akz0TnxKs8w1187')
     .then((result) => {
         alert("Your message has sent!")
     }, (error) => {
         alert("there was an error sending your message")
     });
 };
 
 return (

<section id="contactForm" style={{ padding: '100px 0px 100px' }}>
  <div className="contact-form">
    <h2 className="form-heading">Contact Me</h2>
    <form ref={form} onSubmit={sendEmail} id="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" name="user_name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" name="user_email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea name="message" className="form-textarea" required></textarea>
      </div>
      <button type="submit" className="form-submit" value="Send">
        Send
      </button>
    </form>
  </div>
</section>

  // <section>
  //   <h1 className='contactMeAlign'>Get In Touch</h1>
  //  <form ref={form} onSubmit={sendEmail} className="align">
  //   <div className="alignDiv">
  //    <label>Name</label>
  //    <input type="text" name="user_name" />
  //   </div>
  //   <div className="alignDiv">
  //    <label>Email</label>
  //    <input type="email" name="user_mail" />
  //   </div>
  //   <div className="alignDiv">
  //    <label>Message</label>
  //    <textarea name="message" />
  //   </div>
  //   <div className="alignDiv">
  //    <input type="submit" value="Send" />
  //    </div>
  //  </form>
  //  </section>
 );
};
 
export default Contact;