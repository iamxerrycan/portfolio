import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import linkedinIcon from "../../assets/git.png";     // GitHub icon
import githubIcon from "../../assets/linkdin.png";   // LinkedIn icon
import npm from "../../assets/images.png";
import medium from "../../assets/medium.png";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // loading state

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = 'Name is required';
    } else if (form.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Invalid email format";
    }
    if (!form.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value.trim()) {
      setErrors({ ...errors, [name]: "" });
    } else {
      setErrors({ ...errors, [name]: `${name} is required` });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Form data to be submitted:", form);

    if (!validate()) {
      console.warn("⚠️ Form validation failed");
      return;
    }

    setLoading(true); // start loading

    try {
      const res = await axios.post(
        "https://rest-api-backend-lad4.onrender.com/api/contact",
        form
      );

      console.log("✅ API response:", res.data);

      if (res.status === 200) {
        toast.success("Message sent successfully! 🚀");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error("Something went wrong, try again!");
      }
    } catch (error) {
      console.error("❌ API Error:", error.response?.data || error.message);
      toast.error("Error sending message. Please try again later.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  setTimeout(() => {
    setErrors({});
  }, 2000);

  return (
    <div className="container-contact">
      <div className="form-hold">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" disabled={loading} className={`submit-btn ${loading ? "disabled" : ""}`}>
            {loading ? (
              <>
                <span className="spinner" /> Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>

      <div className="social-contact">
        <div className="links">
          <a href="https://www.linkedin.com/in/iamxerrycan" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/iamxerrycan" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.npmjs.com/~iamxerrycan" target="_blank" rel="noopener noreferrer">
            <img src={npm} alt="NPM" className="social-icon" />
          </a>
          <a href="https://medium.com/@iamxerrycan" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="Medium" className="social-icon" />
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