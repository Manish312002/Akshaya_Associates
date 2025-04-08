import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
    const services = [
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
        image: "/Services/Anti-Corrosion.png",
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
        route: "/success-stories/eetamax"
      },
    ];
  
    return (
      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="bg-orange-600 text-white px-6 py-2 rounded-md">
                Our Service
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto px-4 mb-12 mt-10"
          >
            <h2 className="text-xl sm:text-2xl leading-relaxed text-gray-800">
              We work alongside businesses that are industry leaders and
              <br className="hidden sm:block" />
              trailblazers, spanning across a variety of industries.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {
                    service.route? (
                      <Link
                        to={service.route}
                        className="text-[#ea580c] font-semibold hover:text-blue-800"
                      >
                        {service.name}
                      </Link>
                    ) : (
                      <h3 className="text-[#ea580c] font-semibold">{service.name}</h3>
                    )
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ServicesGrid;