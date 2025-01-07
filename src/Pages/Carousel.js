import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Carousel() {
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.children;
    slidesRef.current = slides;
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    // Function to animate the carousel
    const goToSlide = (index) => {
      const offset = -index * slideWidth;
      gsap.to(carousel, { x: offset, duration: 0.8, ease: "power2.out" });
    };

    // Event Listeners for Buttons
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handlePrevClick = () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
      goToSlide(currentIndex);
    };

    const handleNextClick = () => {
      currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
      goToSlide(currentIndex);
    };

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    // Cleanup event listeners on unmount
    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-64 bg-gray-100">
      <div
        id="carousel"
        ref={carouselRef}
        className="flex w-full h-full"
      >
        <div className="flex-shrink-0 w-full h-full bg-red-500 flex items-center justify-center">
          <h2 className="text-white text-2xl">Slide 1</h2>
        </div>
        <div className="flex-shrink-0 w-full h-full bg-blue-500 flex items-center justify-center">
          <h2 className="text-white text-2xl">Slide 2</h2>
        </div>
        <div className="flex-shrink-0 w-full h-full bg-green-500 flex items-center justify-center">
          <h2 className="text-white text-2xl">Slide 3</h2>
        </div>
      </div>
      <button
        id="prev"
        ref={prevButtonRef}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
      >
        Prev
      </button>
      <button
        id="next"
        ref={nextButtonRef}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
