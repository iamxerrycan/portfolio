// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import "./Contact.css"; // Import CSS file
// import devloper from "../../assets/devloper.png";
// import { updateValue } from "../../actions/ActionCreaters";
// import { useSelector } from "react-redux";
// import About from "../about/About";
// import linkedinIcon from "../../assets/git.png";
// import githubIcon from "../../assets/linkdin.png";

// const Contact = () => {
//   const contactData = useSelector((state) => state.form.formData);
//   console.log(contactData, "contact data ");
//   const dispatch = useDispatch();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const errors = {};
//     if (!form.name.trim()) {
//       errors.name = "Name is required";
//     }
//     if (!form.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!form.message.trim()) {
//       errors.message = "Message is required";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     setErrors({ ...errors, [name]: value.trim() ? "" : `${name} is required` });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       dispatch(updateValue(form));
//     }
//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="container-contact">
//       <div className="form-hold">
//         <p style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}>
//           {" "}
//           Contact me!{" "}
//         </p>
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={handlechange}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handlechange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//           <input
//             type="text"
//             name="message"
//             placeholder="Message"
//             value={form.message}
//             onChange={handlechange}
//           />
//           {errors.message && <span className="error">{errors.message}</span>}

//           <button type="submit">Send</button>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Contact.css"; // Import CSS file
import devloper from "../../assets/devloper.png";
import { updateValue } from "../../actions/ActionCreaters";
import { useSelector } from "react-redux";
import About from "../about/About";
import linkedinIcon from "../../assets/git.png";
import githubIcon from "../../assets/linkdin.png";

const Contact = () => {
  const contactData = useSelector((state) => state.form.formData);
  console.log(contactData, "contact data ");
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = "Name is required";
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

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: value.trim() ? "" : `${name} is required` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateValue(form));
    }
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-contact">
      <div className="form-hold">
      <p className="contact-title">Contact me!</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handlechange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handlechange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handlechange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="alllink-detail">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/rajshish-singh-2591b3274"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="https://www.github.com/rajshish333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
        <div className="contact-info">
          <p>Contact No: +1234567890</p>
          <p>Email: rajshish333@gmail.com</p>
          <p> kolkata saltlake laketown 700048</p>

          {/* Add other contact information as needed */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
