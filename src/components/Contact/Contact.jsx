import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for form submission status
  const [status, setStatus] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus({ message: '', type: '' }); // Clear previous status

    try {
      // Send data to the backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus({ message: 'An error occurred. Please try again.', type: 'error' });
    }
  };

  return (
    <section id="contact" className="contact container">
      
      {/* Left side text */}
      <div className="contact-text">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently open to new opportunities. If you have a project, a role,
          or just want to say hi, my inbox is open. Fill out the form, and 
          I'll get back to you!
        </p>
      </div>

      {/* Right side form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
        
        {/* Status Message */}
        {status.message && (
          <p className={`status-message ${status.type}`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;