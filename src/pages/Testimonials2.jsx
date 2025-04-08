import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Anthom BuSpar",
    role: "MARKETING MANAGER",
    feedback:
      "Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
  },
  {
    name: "Matthew J. Wyman",
    role: "SENIOR CONSULTANT",
    feedback:
      "Targeting consultation apartments. ndulgence creative under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
  },
  {
    name: "Sarah Anderson",
    role: "PROJECT DIRECTOR",
    feedback:
      "Exceptional consultation experience. Strategic planning and innovative solutions drove remarkable outcomes. Highly recommended for business growth.",
  },
  {
    name: "Robert Chen",
    role: "DEVELOPMENT LEAD",
    feedback:
      "Outstanding strategic insights. Their comprehensive approach and detailed execution plan exceeded our expectations significantly.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-orange-500 rounded-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3 flex flex-col justify-center">
          <h2 className="text-5xl font-light text-white mb-4">Testimonials</h2>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                testimonials[currentIndex],
                testimonials[(currentIndex + 1) % testimonials.length],
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="p-6">
                    <p className="text-gray-700 text-lg">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                  <div className="mt-auto bg-[#4C1F00] p-4 flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-medium text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-blue-100 uppercase">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            {[0, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                }`}
                aria-label={`Show testimonials ${index + 1} and ${index + 2}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
