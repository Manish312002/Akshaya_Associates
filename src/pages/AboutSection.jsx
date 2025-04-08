import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const industries = [
    "Machine Manufacturers",
    "Components Manufacturers",
    "Electrical Components Manufacturers",
    "Defense / Aerospace Components Manufacturers",
    "OEM's",
    "Agriculture Machine Manufacturers",
    "Shipbuilding Industries",
    "Ship Repair Industries",
    "Sugar Industries",
    "Pharma Industries",
    "Food Industries",
    "Textile Industries",
    "Ports",
    "Power Sector",
    "Automobile Sector",
    "Genset Manufacturers",
    "Anti-Corrosion",
    "Automation",
    "Rust Prevention",
  ];

  return (
    <div>
      {/* About Us Section */}
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          {/* Text Content */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-orange-500 mb-8"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg space-y-4 leading-relaxed"
            >
              At Akshaya Associate, we provide more than just services; we also
              develop creative, unconventional solutions that make a real impact.
              Our expertise spans more than 50 years, we represent industry
              leaders who are pioneers in their fields. Our technical expertise,
              supported by robust research and development, enables us to create
              and produce distinctive, tailored products that satisfy both
              domestic and international standards; many of which have earned
              prestigious awards.
              <br /><br />
              As concept-driven marketers and solution providers, we focus on
              understanding our client's unique challenges and addressing them with
              tailored solutions. From lead generation to order fulfillment, we
              manage the entire supply chain, ensuring seamless delivery of
              products that solve specific challenges. Our ability to innovate and
              design state-of-the-art solutions sets us apart, providing our
              clients with the tools they need to thrive and grow.
            </motion.p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <img
                src="/assets/banner4.png"
                alt="Chess pieces representing strategy"
                className="w-full h-[32rem] rounded-lg object-cover bg-orange-50"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-white"
          >
            35+
          </motion.div>
          <p className="text-white text-xl mt-4">YEARS OF EXPERIENCE</p>
        </div>
      </div>

      {/* Industries Served Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 text-center mb-12">
            Industries Served
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                <h3 className="text-base md:text-lg font-medium text-center">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;