import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import gsap from 'gsap';

const AnimatedButton = () => {
  const containerRef = useRef(null);
  const hoverTextRef = useRef(null);
  const readMoreRef = useRef(null);

  useEffect(() => {
    const hoverLetters = hoverTextRef.current.textContent.split('').map((char) => (
      `<span class="inline-block transform translate-y-0">${char}</span>`
    )).join('');
    
    const readMoreLetters = readMoreRef.current.textContent.split('').map((char) => (
      `<span class="inline-block transform translate-y-full">${char}</span>`
    )).join('');

    hoverTextRef.current.innerHTML = hoverLetters;
    readMoreRef.current.innerHTML = readMoreLetters;

    gsap.set(readMoreRef.current.querySelectorAll('span'), {
      y: 20,
      opacity: 0
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(hoverTextRef.current.querySelectorAll('span'), {
      y: -20,
      opacity: 0,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.inOut"
    });

    gsap.to(readMoreRef.current.querySelectorAll('span'), {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverTextRef.current.querySelectorAll('span'), {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.inOut"
    });

    gsap.to(readMoreRef.current.querySelectorAll('span'), {
      y: 20,
      opacity: 0,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  return (
    // Wrap the button with Link to navigate to another page
    <Link to="/About">
      <button
        ref={containerRef}
        className="relative w-40 h-14 bg-gray-800 rounded-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            ref={hoverTextRef}
            className="text-white font-medium absolute"
          >
            Hover Me
          </p>
          <p
            ref={readMoreRef}
            className="text-white font-medium absolute"
          >
            Read More &nbsp;&gt;
          </p>
        </div>
      </button>
    </Link>
  );
};

export default AnimatedButton;
