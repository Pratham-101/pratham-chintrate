import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_fyr962r', // Replace with your EmailJS service ID
      'template_aw2kwra', // Replace with your EmailJS template ID
      formData,
      'hSbvdswraDwpnAg-H' // Replace with your EmailJS user ID
    ).then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => {
      setStatus("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="border-b border-neutral-900 py-20 flex justify-center items-center">
      <div className="flex flex-wrap w-full max-w-4xl">
        <motion.div
          className="w-full md:w-1/2 p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg shadow-lg"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold tracking-wide text-center mb-6">Get in Touch</h2>
          <p className="text-center tracking-tight mb-4 text-lg text-white/80">{CONTACT.address}</p>
          <p className="text-center tracking-tight mb-4 text-lg text-white/80">{CONTACT.phoneNo}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="block text-center my-4 text-lg font-medium text-white border-b-2 border-transparent hover:border-white"
          >
            {CONTACT.email}
          </a>
          <div className="mt-12 flex justify-center space-x-8">
            {/* Social icons remain unchanged */}
          </div>
          <div className="mt-12 flex justify-center space-x-8">
  <a
    href="mailto:prathamchintrate@gmail.com"
    className="hover:scale-110 transform transition duration-300 ease-out"
  >
    <img src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" alt="Mail" />
  </a>
  {/* <a href="#" className="hover:scale-110 transform transition duration-300 ease-out">
    <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
  </a> */}
  <a
    href="https://www.linkedin.com/in/pratham-chintrate-9a9a0b227/"
    className="hover:scale-110 transform transition duration-300 ease-out"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
  </a>
  <a
    href="https://www.instagram.com/pratham.__.0/"
    className="hover:scale-110 transform transition duration-300 ease-out"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" alt="Instagram" />
  </a>
</div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-6 bg-neutral-800 text-white rounded-lg shadow-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-lg">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-4 p-2 rounded bg-neutral-700 border border-neutral-600"
              required
            />

            <label htmlFor="email" className="mb-2 text-lg">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 p-2 rounded bg-neutral-700 border border-neutral-600"
              required
            />

            <label htmlFor="message" className="mb-2 text-lg">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mb-4 p-2 rounded bg-neutral-700 border border-neutral-600"
              required
            />

            <button
              type="submit"
              className="mt-4 p-2 bg-purple-600 hover:bg-purple-700 rounded text-lg font-bold text-white"
            >
              Submit
            </button>
          </form>
          {status && <p className="mt-4 text-center text-lg">{status}</p>}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
