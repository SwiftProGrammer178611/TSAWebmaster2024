import React, { useState } from "react";

const CardCarousel = () => {
  // State definitions
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Card data
  const cards = [
    {
      id: 1,
      imgSrc: "m.JPG",
      alt: "Restaurant interior with green wall",
      name: "Green Oasis Restaurant",
      rating: 5,
      review: "Beautiful interior design with living walls",
    },
    {
      id: 2,
      name: "Sarah Chen",
      rating: 5,
      review:
        "The atmosphere was incredible! The living wall creates such a unique dining experience.",
      imgSrc: "c1.png",
      alt: "Review card - Sarah",
    },
    {
      id: 3,
      name: "Michael Patel",
      rating: 4,
      review:
        "Fantastic ambiance and great service. The plant-based menu is innovative.",
      imgSrc: "c2.png",
      alt: "Review card - Michael",
    },
    {
      id: 4,
      name: "Emma Wilson",
      rating: 5,
      review:
        "Best vegan restaurant I've been to! The green wall creates such a peaceful atmosphere.",
      imgSrc: "c1.png",
      alt: "Review card - Emma",
    },
    {
      id: 5,
      name: "David Thompson",
      rating: 4,
      review:
        "Innovative cuisine in a stunning setting. The vertical garden is breathtaking.",
      imgSrc: "c2.png",
      alt: "Review card - David",
    },
  ];

  // Helper function to get visible cards
  const getVisibleCards = () => {
    const totalCards = cards.length;
    return [
      cards[(currentIndex - 1 + totalCards) % totalCards],
      cards[currentIndex],
      cards[(currentIndex + 1) % totalCards],
      cards[(currentIndex + 2) % totalCards],
      cards[(currentIndex - 2 + totalCards) % totalCards],
    ];
  };

  // Navigation handlers
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setIsAnimating(false);
    }, 1000); // Match animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  // Star rating renderer
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  // Style generator for cards
  const getCardStyle = (index) => {
    const baseStyles =
      "absolute w-[300px] h-[450px] rounded-2xl transition-all duration-[1000ms] ease-in-out bg-white shadow-xl";

    let positionStyles = {
      transform: "",
      opacity: 0,
      zIndex: 0,
    };

    if (!isAnimating) {
      if (index === 0) {
        positionStyles = {
          transform: "translate-x-[-320px] scale-90",
          opacity: 70,
          zIndex: 10,
        };
      } else if (index === 1) {
        positionStyles = {
          transform: "translate-x-0 scale-100",
          opacity: 100,
          zIndex: 20,
        };
      } else if (index === 2) {
        positionStyles = {
          transform: "translate-x-[320px] scale-90",
          opacity: 70,
          zIndex: 10,
        };
      }
    } else {
      if (direction > 0) {
        if (index === 0) {
          positionStyles = {
            transform: "translate-x-[-640px] scale-80",
            opacity: 0,
            zIndex: 0,
          };
        } else if (index === 1) {
          positionStyles = {
            transform: "translate-x-[-320px] scale-90",
            opacity: 70,
            zIndex: 10,
          };
        } else if (index === 2) {
          positionStyles = {
            transform: "translate-x-0 scale-100",
            opacity: 100,
            zIndex: 20,
          };
        } else if (index === 3) {
          positionStyles = {
            transform: "translate-x-[320px] scale-90",
            opacity: 70,
            zIndex: 10,
          };
        }
      } else {
        if (index === 4) {
          positionStyles = {
            transform: "translate-x-[-320px] scale-90",
            opacity: 70,
            zIndex: 10,
          };
        } else if (index === 0) {
          positionStyles = {
            transform: "translate-x-0 scale-100",
            opacity: 100,
            zIndex: 20,
          };
        } else if (index === 1) {
          positionStyles = {
            transform: "translate-x-[320px] scale-90",
            opacity: 70,
            zIndex: 10,
          };
        } else if (index === 2) {
          positionStyles = {
            transform: "translate-x-[640px] scale-80",
            opacity: 0,
            zIndex: 0,
          };
        }
      }
    }

    const opacityClass = `opacity-${positionStyles.opacity}`;
    const zIndexClass = `z-${positionStyles.zIndex}`;

    return `${baseStyles} ${positionStyles.transform} ${opacityClass} ${zIndexClass}`;
  };

  return (
    <div className="relative h-screen w-full bg-green-50 flex items-center justify-center">
      <div className="relative w-[960px] h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-30">
          {currentIndex + 1} / {cards.length}
        </div>

        <div className="relative w-full h-[500px] flex items-center justify-center">
          {getVisibleCards().map((card, index) => (
            <div key={`${card.id}-${index}`} className={getCardStyle(index)}>
              <div className="h-full flex flex-col">
                <div className="h-3/5 relative">
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                <div className="h-2/5 p-4 bg-white rounded-b-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2">{card.name}</h3>
                    <div className="mb-2">{renderStars(card.rating)}</div>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {card.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gray-700 text-white rounded-r hover:bg-gray-600 transition-colors duration-200 z-30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gray-700 text-white rounded-l hover:bg-gray-600 transition-colors duration-200 z-30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
