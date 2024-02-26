import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactboy from "../assets/contactboy.png";

import '../styles/contact.css'
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nusgua9', 'template_z3udkpe', form.current, '_dnKagAWqEJbVG938')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-us-container">
    <div className="social-media">
      <h2>Connect with me</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/akshaysawantweb/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="https://github.com/Akshaysawant917" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> Github</a></li>
        <li><a href="https://twitter.com/akshays917" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
        {/* Add more social media links as needed */}
      </ul>
    </div>
    <div className='imgSection'>
      <img src={contactboy} alt="" />
    </div>
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
   
  </div>
);
};
    

export default Contact;
