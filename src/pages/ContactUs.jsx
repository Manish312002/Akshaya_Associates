import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Build the email URL
    const emailUrl = `mailto:kartikkulshreshtha2507@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0D%0AMessage: ${message}`;
    // Redirect the user to the email URL
    window.location.href = emailUrl;
  };

  return (
    <div className="bg-orange-500 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="space-y-4 mb-8">
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Phone className="mr-4" size={24} />
            <span>Tel: 080-26690333 / 666</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Phone className="mr-4" size={24} />
            <span>Mob: +91 91084 00030 / +91 91084 00003</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Mail className="mr-4" size={24} />
            <span>Email: info@akshayamail.com</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MapPin className="mr-4" size={24} />
            <div>
              Address: 10/24, Aditya. 6th B Cross. <br />
              Balaji Nagar, Banashankari 3rd Stage, Bangalore (560085)
            </div>
          </motion.div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className="bg-white flex text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-orange-200 transition-colors duration-300"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Mail className="mr-2 mt-1" size={18} />
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
