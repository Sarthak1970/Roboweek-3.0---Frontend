import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "../components/OpeningImageCarousel";

const Mission =
  "RoboWeek 3.0 is dedicated to fostering innovation in robotics through collaborative learning and hands-on experience. We bring together students, professionals, and enthusiasts to create solutions that push the boundaries of what's possible in robotics.";

const objectives = [
  "Promote robotics education and innovation",
  "Build a community of robotics enthusiasts",
  "Create real-world robotics solutions",
  "Connect students with industry leaders"
];

const About = () => {
  return (
    <div className="min-h-screen py-20 z-1000 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-squidFont">
            About <span className="text-pink-400 font-bold">RoboWeek 3.0</span>
          </h1>
        </motion.div>

        {/* Mission and Objectives Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-20">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-lg bg-black/20 p-8 rounded-xl border border-pink-500/100 shadow-lg hover:border-pink-500 transition-all duration-300 h-full"
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-6 font-squidFont">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">{Mission}</p>
          </motion.div>

          {/* Objectives Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-lg bg-black/20 p-8 rounded-xl border border-pink-500/100 shadow-lg hover:border-pink-500 transition-all duration-300 h-full"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4 font-squidFont">Key Objectives</h3>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <motion.li key={index} whileHover={{ x: 10 }} className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 shadow-lg shadow-pink-500/50"></span>
                  <span className="text-gray-300">{objective}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-black/20 rounded-xl p-8 border border-pink-500/100 shadow-lg hover:border-pink-500 transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center font-squidFont">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "4000+", label: "Participants" },
              { number: "100+", label: "Projects Completed" },
              { number: "200+", label: "Partner Organizations" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-pink-400 mb-2 text-shadow-glow">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Carousel Section */}
        <div className="mt-20">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
