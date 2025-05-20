import React, { useRef } from 'react';
import { MdOutlineInbox } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import './Contact.css';
import setData from '../../../Data/SetData';
//We using in email import him 
 import emailjs from '@emailjs/browser'
const Contact = () => {
    const {email, phone, address } = setData.contact;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z5q7f4z', 'template_3olfhza', form.current, 'o03ZYAgkridVIrKXj')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Message Sent! Thank you for contacting us");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong! Please try again.");
        });
    };
  return (
    <section className="contact-section" id="contact">
    <div className="container-lg">
         <div className="title-container mb-4">
          <h2>Send Us A Message</h2>
          <p className="col-12 col-md-6">
            Passionate about modern, user-friendly web apps. Feel free to reach out and let's connect.
          </p>
        </div>

      <div className="row">
        <div className="col-md-6 col-lg-8 order-2 order-md-1">
          <form className='row' ref={form}  onSubmit={sendEmail}>
              <div className="col-md-12 col-lg-6">
                <input
                  type="text"
                  name="from_name" 
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <input
                  type="email"
                  name="from_email" 
                  id="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            <div className="col-md-12">
              <textarea
                name="message"  
                id="message"
                className="form-control"
                rows="7"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <div  className="col-md-12 mb-4">
                <button type="submit" className="btn-glass download-btn">
                 Send Message
                </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-lg-4 order-1 order-md-2 mb-4">
          <div className="contact-info">
            <h5 className="contact-title-information">Contact Information</h5>
            <div className="mb-3">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <MdOutlineInbox size={18} className="me-2" />
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <div className="mb-3">
              <FiPhone className="me-2" />
              {phone}
            </div>

            <div className="mb-3">
              <h5 className='contact-title-address'>My Address</h5>  
              <FiMapPin className="me-2" />
              {address}
            </div>
          </div>
        </div>
      </div>
       </div>
    </section>
  );
};

export default Contact;
