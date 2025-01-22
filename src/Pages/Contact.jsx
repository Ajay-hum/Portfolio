import React, { useState } from 'react';
import image from "../assets/ProjectImgs/contact-image.png";

export default function Contact() {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // If no errors, submit form
      setFormErrors({});
      setFormSuccess(true);
      // Allow Netlify to process the form submission
      e.target.submit();
    } else {
      setFormErrors(errors);
      setFormSuccess(false);
    }
  };

  return (
    <div className="p-12">
      <div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img src={image} alt="Contact Illustration" className="max-w-full h-auto" />
        </div>

        {/* Form Section */}
        <div>
          <h2>Contact Us</h2>
          {formSuccess && <p className="font-medium text-base">Your message has been sent successfully!</p>}
          <form 
            className="p-8" 
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="mb-5">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className={`h-11 border-black border-4 ${formErrors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>

            <div className="mb-5">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={`h-11 border-black border-4 ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>

            <div className="mb-5">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className={`h-11 border-black border-4 ${formErrors.subject ? 'is-invalid' : ''}`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
              />
              {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
            </div>

            <div className="mb-5">
              <label htmlFor="message">Message</label>
              <textarea
                className={`h-11 border-black border-4 ${formErrors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
              ></textarea>
              {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
