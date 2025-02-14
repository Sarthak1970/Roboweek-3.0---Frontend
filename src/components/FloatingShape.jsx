import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FloatingShape.css';

const FloatingShape = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;

    // GSAP animation for each shape
    shapes.forEach((shape, index) => {
      const duration = 15 + index * 3; // Vary the duration for each shape
      const delay = index * 1; // Stagger the start time

      gsap.to(shape, {
        duration: duration,
        x: () => Math.random() * 400 - 200, // Random horizontal movement
        y: () => Math.random() * 400 - 200, // Random vertical movement
        rotation: 360, // Full rotation
        scale: 1.2, // Scale up and down
        opacity: 0.7, // Opacity changes
        ease: 'power1.inOut',
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation
        delay: delay,
      });
    });
  }, []);

  return (
    <div>
      <div id='backGround' className="floating-shapes">
        <div className="shape" ref={(el) => (shapesRef.current[0] = el)}></div>
        <div className="shape" ref={(el) => (shapesRef.current[1] = el)}></div>
        <div className="shape" ref={(el) => (shapesRef.current[2] = el)}></div>
        <div className="shape" ref={(el) => (shapesRef.current[3] = el)}></div>
        <div className="shape" ref={(el) => (shapesRef.current[4] = el)}></div>
      </div>
    </div>
  );
};

export default FloatingShape;