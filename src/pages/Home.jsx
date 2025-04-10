import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const banners = [
    '/assets/Banners/01.jpg',
    '/assets/Banners/02.jpg',
    '/assets/Banners/03.jpg',
    '/assets/Banners/04.jpg',
    '/assets/Banners/05.jpg',
    '/assets/Banners/06.jpg',
    '/assets/Banners/07.jpg',
    '/assets/Banners/08.jpg',
    '/assets/Banners/09.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.5 },
  };

  return (
    <>
    <div className='mt-16'>
    <div className="relative w-full my-auto overflow-hidden shadow-lg">
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentIndex}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="w-full h-full object-cover"
        >
          <div className="w-full flex justify-center items-center">
            <img
              src={banners[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="max-w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 md:h-3 w-2 md:w-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            animate={{
              scale: currentIndex === index ? 1.2 : 1,
              opacity: currentIndex === index ? 1 : 0.7,
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default HeroSlider;
