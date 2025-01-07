import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FoodItemCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    
    gsap.fromTo(element,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      // Cleanup ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={cardRef} className="max-w-lg overflow-hidden bg-aestheticGreen rounded-2xl">
      <div className="relative">
        {/* Online Only Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-yellow-300 text-black font-medium font-custom px-4 py-1 rounded-full text-sm">
            ONLINE ONLY
          </span>
        </div>
        
        {/* Food Image */}
        <img
          src="https://media.istockphoto.com/id/848140072/photo/breakfast-vegan-plate.jpg?s=612x612&w=0&k=20&c=JNFmGjU9nZbRXH2y4ivrHGCfM0iLKgCg1UU3hbIsqkg="
          alt="Buffalo Chicken Salad"
          className="w-96 h-96 object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="pl-0 pt-8 pb-8">
        <h2 className="text-2xl font-custom font-bold tracking-tight mb-4">
          BUFFALO CHICKEN
        </h2>
        
        <p className="text-gray-600 font-custom w-96 mb-4">
          Blackened chicken, pickled onions, tomatoes, raw carrots, cilantro, blue cheese, 
          za'atar breadcrumbs, shredded kale, chopped romaine, sweetgreen hot sauce, caesar
        </p>
        
        <button className="font-custom inline-flex items-center text-black font-medium group">
          Order now 
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;