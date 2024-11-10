"use client";

import React, { useState } from 'react';
import '../styles/contact.css'; // Import the corresponding CSS
import Navbar from '../components/Navbar'; // Import Navbar

// Define a type for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  // Use the type for formData state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Update handleChange with the proper event typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update handleSubmit with proper typing for the event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!'); // For demonstration purposes
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-container">
      <Navbar /> {/* Render Navbar at the top */}
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Cake Street, Bakery City, BK 12345</p>
      </div>
    </div>
  );
};

export default Contact;
