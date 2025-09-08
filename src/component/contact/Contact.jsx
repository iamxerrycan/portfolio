import React, { useState } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
import axios from 'axios';

import { FaLinkedin, FaGithub, FaNpm, FaMedium } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = 'Name is required';
    } else if (form.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      errors.name = 'Only letters and spaces allowed';
    }
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Invalid email format';
    }
    if (!form.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value.trim()) {
      setErrors({ ...errors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: `${name} is required` });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await axios.post(
        'https://rest-api-backend-lad4.onrender.com/api/portfolio/contact',
        form
      );

      if (res.status === 200) {
        toast.success('Message sent successfully! 🚀');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong, try again!');
      }
    } catch (error) {
      toast.error('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-contact" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>

      <div className="form-hold fade-in">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button
            type="submit"
            disabled={loading}
            className={`submit-btn ${loading ? 'disabled' : ''}`}
          >
            {loading ? <span className="spinner" /> : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="social-contact fade-in">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/iamxerrycan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/iamxerrycan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.npmjs.com/~iamxerrycan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNpm className="social-icon" />
          </a>
          <a
            href="https://medium.com/@iamxerrycan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium className="social-icon" />
          </a>
        </div>

        <div className="contact-info">
          <p>Email: rajshish333@gmail.com</p>
          <p>Kolkata, Saltlake, Laketown - 700048</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
