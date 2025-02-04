import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const prizesData = [
  {
    title: "First Prize",
    description: "₹15,000 + Exciting Goodies",
  },
  {
    title: "Second Prize",
    description: "₹10,000 + Exciting Goodies",
  },
  {
    title: "Third Prize",
    description: "₹5,000 + Exciting Goodies",
  },
];

const Prizes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === prizesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? prizesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 relative z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 font-squidFont">
          Welcome to the Game of Prizes
        </h2>
        
        <div className="relative flex justify-center items-center min-h-[600px]">
          <div className="relative w-full max-w-6xl h-[500px] overflow-visible flex justify-center items-center">
            {/* Previous Card */}
            <motion.div
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-80 opacity-50 cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105"
              style={{
                scale: 0.85,
                zIndex: 1
              }}
            >
              <div className="w-full backdrop-blur-lg bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-4 rounded-2xl border-2 border-pink-500/50 shadow-2xl">
                <div className="w-full h-44 flex items-center justify-center rounded-xl mb-4 border border-pink-500/50">
                  <p className="text-gray-300">Will be updated soon</p>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-squidFont text-center">
                  {prizesData[(currentIndex - 1 + prizesData.length) % prizesData.length].title}
                </h3>
              </div>
            </motion.div>

            {/* Current Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="relative w-96 z-20"
                onClick={handleNext} // Added click event to current card
              >
                <div className="w-full backdrop-blur-lg bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-8 rounded-2xl border-2 border-pink-500/50 shadow-2xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                    {currentIndex === 0 ? '🏆 Winner' : currentIndex === 1 ? '🥈 Runner Up' : '🥉 Second Runner Up'}
                  </div>
                  
                  <div className="w-full h-64 flex items-center justify-center rounded-xl mb-6 border border-pink-500/50 shadow-lg">
                    <p className="text-gray-300">Will be updated soon</p>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-squidFont text-center">
                    {prizesData[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-300 text-xl text-center">
                    {prizesData[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Card */}
            <motion.div
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-80 opacity-50 cursor-pointer hover:opacity-70 transition-all duration-300 hover:scale-105"
              style={{
                scale: 0.85,
                zIndex: 1
              }}
            >
              <div className="w-full backdrop-blur-lg bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-4 rounded-2xl border-2 border-pink-500/50 shadow-2xl">
                <div className="w-full h-44 flex items-center justify-center rounded-xl mb-4 border border-pink-500/50">
                  <p className="text-gray-300">Will be updated soon</p>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-squidFont text-center">
                  {prizesData[(currentIndex + 1) % prizesData.length].title}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {prizesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-pink-500 w-8' 
                  : 'bg-pink-500/40 hover:bg-pink-500/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
