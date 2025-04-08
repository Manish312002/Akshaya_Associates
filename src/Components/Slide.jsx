import React, { useState } from 'react';
import { motion } from 'framer-motion';

const successStories = [
  {
    id: 1,
    title: "Suprabha Protective Products Pvt. Ltd.",
    description:
      "A pioneering corrosion solutions leader with over 4 decades of innovative eco-friendly VCI technology, revolutionizing anticorrosion solutions in India.",
    image: "/assets/Suprabha.jpg",
    link: "https://suprabha.com/",
    details: [
      "First & only SO VCI® manufacturer globally with IATF 16949 certification",
      "Developed bio-degradable, eco-friendly Organic Vapour Corrosion Inhibition Technology",
      "Strong emphasis on R&D with a committed panel of scientists and technologists"
    ],
    challenge: "Developing environmentally friendly and effective corrosion prevention solutions",
    solution: "Proprietary SO VCI® technology with focus on organic materials and human safety",
    impact: "Became a leading INR 1,000 million group with global market presence"
  },
  {
    id: 2,
    title: "Eetamax Energy Solutions",
    description:
      "A manufacturer of high-performance industrial lights and lighting control solutions with over two decades of experience in energy-efficient technologies.",
    image: "/assets/etamax.jpeg",
    link: "https://www.industrialledsolutions.net/",
    details: [
      "300+ products for indoor and outdoor lighting applications",
      "State-of-the-art design facility with photometric, thermal, and electronics labs",
      "Connected lighting solutions using DALI, RF, and IoT technologies"
    ],
    challenge: "Providing energy-efficient and smart lighting solutions for industrial and infrastructure needs",
    solution: "Comprehensive lighting systems with features like daylight harvesting, dimming, and energy monitoring",
    impact: "Serving multinational corporations with ISO 9001:2015 certified and BIS-approved products"
  },
  {
    id: 3,
    title: "Innoverve Inventions Pvt. Ltd.",
    description:
      "An innovative automation solutions provider specializing in CNC machines, industrial robotics, and IoT solutions for manufacturing industries.",
    image: "/assets/innoverve.jpg",
    link: "https://www.innoverveinventions.com/",
    details: [
      "First manufacturer of CNC Metal Spinning Machines in India",
      "Developed Motion Controllers with Android phone-based operation",
      "Diversified into Industrial Robotics and IoT solutions since 2020"
    ],
    challenge: "Providing advanced automation solutions for manufacturing and packaging industries",
    solution: "Comprehensive range of CNC machines, retrofit solutions, and robotic automation",
    impact: "Supporting Make in India initiative with indigenous technology development"
  },
  {
    id: 4,
    title: "Rust Free Globe Pvt Ltd",
    description:
      "A pioneering company offering green rust prevention solutions across multiple industrial sectors since 2017.",
    image: "/assets/rust.jpeg",
    link: "https://www.rustfreeglobe.com/",
    details: [
      "Established strong dealer and distributor network in India and abroad",
      "Serving multi-disciplinary sectors including Automobile, Chemicals, Railways, and Marine",
      "Focus on reducing maintenance costs and extending resource lifecycle"
    ],
    challenge: "Providing cost-effective and environmentally friendly rust prevention",
    solution: "Comprehensive rust prevention solutions tailored to various industrial needs",
    impact: "Helping companies lower maintenance costs and protect valuable resources"
  }
];

const SuccessStoriesPage = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const StoryModal = ({ story, onClose }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-10">
          {/* Image Section */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={story.image} 
              alt={story.title} 
              className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          
          {/* Content Section */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{story.title}</h2>
            <p className="text-gray-600">{story.description}</p>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-600 mb-2">Key Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {story.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">Challenge</h3>
                <p className="text-gray-600">{story.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">Solution</h3>
                <p className="text-gray-600">{story.solution}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-orange-600 mb-2">Impact</h3>
              <p className="text-gray-600">{story.impact}</p>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <a 
                href={story.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              >
                Visit Website
              </a>
              <button 
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center py-32 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Success Stories</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
          Discover how our innovative solutions have transformed businesses across various industries, driving growth, efficiency, and technological advancement.
        </p>
      </header>

      {/* Stories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
};

export default SuccessStoriesPage;