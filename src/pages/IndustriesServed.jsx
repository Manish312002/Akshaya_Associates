import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IndustriesServed = () => {
  const industries = [
    {
      name: "Machine Manufacturers",
      image: "/Services/Machine Manufacturers.png",
    },
    {
      name: "Components Manufacturers",
      image: "/Services/Components Manufacturers.png",
    },
    {
      name: "Electrical Components Manufacturers",
      image: "/Services/Electrical Components Manufacturers.png",
    },
    {
      name: "Defense / Aerospace Components Manufacturers",
      image: "/Services/Defense_Aerospace Components Manufacturers.png",
    },
    {
      name: "OEM's",
      image: "/Services/OEMs.png",
    },
    {
      name: "Agriculture Machine Manufacturers",
      image: "/Services/Agriculture Machine Manufacturers.png",
    },
    {
      name: "Chemical Industries",
      image: "/Services/Chemical Industries.png",
    },
    {
      name: "Shipbuilding Industries",
      image: "/Services/Ship Building Industries.png",
    },
    {
      name: "Ship Repair Industries",
      image: "/Services/Ship Repair Industries.png",
    },
    {
      name: "Sugar Industries",
      image: "/Services/Sugar Industries.png",
    },
    {
      name: "Cement Industries",
      image: "/Services/Cement Industries.png",
    },
    {
      name: "Pharma Industries",
      image: "/Services/Pharma Industries.png",
    },
    {
      name: "Food Industries",
      image: "/Services/Food Industries.png",
    },
    {
      name: "Textile Industries",
      image: "/Services/Textile Industries.png",
    },
    {
      name: "Ports",
      image: "/Services/Ports.png",
    },
    {
      name: "Power Sector",
      image: "/Services/Power Sector.png",
       route: "/success-stories/eetamax"
    },
    {
      name: "Automobile Sector",
      image: "/Services/Automobile Sector.png",
    },
    {
      name: "Genset Manufacturers",
      image: "/Services/Genset Manufacturers.png",
    },
    {
      name: "Anti-Corrosion",
      image: "/Services/Anti-Corrosion .png",
      route: "/success-stories/suprabha"
    },
    {
      name: "Automation",
      image: "/Services/Automation.png",
      route: "/success-stories/innoverve"
    },
    {
      name: "Rust Prevention",
      image: "/Services/Rust Prevention.png",
      // name: "Rust Free Globe Private Limited",
      route: "/success-stories/rustfreeglobe"
    },
  ];
  

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Industry Leaders & Trailblazers
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We work alongside businesses that are industry leaders and trailblazers, 
            spanning across a variety of industries.
          </p>
        </motion.div>

        {/* Industries List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  {/* <industry.icon className="w-6 h-6 text-blue-600" /> */}
                  {
                    industry.route? (
                      <Link
                        to={industry.route}
                        className="text-[#ea580c] font-semibold hover:text-blue-800"
                      >
                        {industry.name}
                      </Link>
                    ) : (
                      <h3 className="text-[#ea580c] font-semibold">{industry.name}</h3>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesServed;