// SpotlightText.js
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const SpotlightText = () => {
  const textRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update mouse position
  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Move spotlight dynamically based on mouse position
    gsap.to(textRef.current, {
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 165, 0, 0.6) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)`,
      duration: 0.1, // Smooth transition
    });
  };

  // Reset the background when mouse leaves
  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      background: 'none',
      duration: 0.5,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        ref={textRef}
        className="relative text-4xl font-bold text-gray-800 cursor-pointer p-12 w-64 h-64 rounded-full border-4 border-gray-600"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        Hello World
      </div>
    </div>
  );
};

export default SpotlightText;
