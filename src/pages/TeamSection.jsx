import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <div className="bg-white pt-16">
      {/* Team Section Header */}
      <div className="text-center mb-8 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="bg-orange-600 text-white px-6 py-2 rounded-md">
            Our Team
          </div>
        </motion.div>
      </div>

      {/* Team Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto px-4 mb-12 text-left sm:text-center"
      >
        <h2 className="text-xl md:text-2xl leading-relaxed text-gray-800">
          We are proud to have a team of skilled engineers
          and management professionals from top-tier institutions.
        </h2>
      </motion.div>

      {/* Leader Profile Section */}
      <section
        className="relative bg-cover bg-center text-white py-16 px-4 h-96"
        style={{
          backgroundImage: `url('/assets/img52.jpg')`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center md:text-left md:mr-[30rem]">
          {/* Leader Profile Section */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Text Content */}
            <p className="text-base md:text-xl leading-relaxed">
              <strong className="text-orange-500">The leadership of Mr. Raghavendra Badami</strong>, a Mechanical Engineer, drives our team’s success. With over 35 years of experience in business and a wealth of expertise in marketing. Mr. Badami has delivered specialized solutions to over 1,000 customers across a variety of industries, including Engineering, Automobile, Paint, Food, and Textiles. His extensive knowledge in fields like Paint, Corrosion Prevention, Industrial Lighting, Packaging, and Automation has been instrumental in providing exceptional value to our clients. </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;