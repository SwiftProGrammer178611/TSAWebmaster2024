import { useEffect, useRef } from 'react';
import React from 'react';
import Navbar from '../navbar';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import Footer from './Footer';
import Carousel from './Carousel';
import FoodItemCard from './FoodItemCard';
import GoogleMapComponent from './GoogleMapsComponent';
import CardCarousel from './CardCarousel.js';
import AnimatedButton from './AnimatedButton.js';
import ScrollTriggerComponent from './ScorllTriggerComponent.js';

gsap.registerPlugin(Observer, ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.to(".myHero", {
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".myHero",
        scrub: true,
        start: "top top",
        end: "bottom top"
      }
    });
    gsap.to(".BioImg3", {
      scrollTrigger: {
        trigger: ".BioImg3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        toggleActions: "play pause reverse pause",
      },
      x: -50,
      duration: 2,
    });
    const tl = gsap.timeline({ paused: true });
    // Updated fade-in and scale effect for .img1
    gsap.fromTo(".img1", {
      opacity: 0, // start with opacity 0
      scale: 1, // start with default scale
      x: 0,
    }, {
      opacity: 1, // fade in to opacity 1
      //scale: 0.9, // apply slight scale
      duration: 2,
      ease: "power1.out",
      x: 50,
      scrollTrigger: {
        trigger: ".img1",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none",
      }
    });
    const cards = document.querySelectorAll('.biographycard');
    cards.forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        scale: 0.5,
      }, {
        opacity: 1,
        //duration: 2.5,
        ease: "power1.out",
        scale: 1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "center center",
          scrub: true,
          toggleActions: "restart none reverse none",
        }
      });
    });
  }, []);
  useEffect(() => {
    // GSAP ScrollTrigger animation for title (h1)
    gsap.fromTo(
      '.bio-title',
      {
        x: -200, // start off-screen to the right
        opacity: 0, // initially invisible
      },
      {
        x: 0, // end at the original position
        opacity: 1, // become visible
        duration: 1, // duration of the animation
        scrollTrigger: {
          trigger: '.bio-title', // the element that triggers the animation
          start: 'top 70%', // trigger animation when the element reaches 80% from the top of the viewport
          end: 'top 30%', // animation ends when the top of the element reaches 20% into the viewport
          scrub: true, // makes the animation tie to the scroll position
        },
      }
    );

    // GSAP ScrollTrigger animation for text (p)
    gsap.fromTo(
      '.bio-text',
      {
        x: -200, // start off-screen to the right
        opacity: 0, // initially invisible
      },
      {
        x: 0, // end at the original position
        opacity: 1, // become visible
        duration: 1, // duration of the animation
        scrollTrigger: {
          trigger: '.bio-text', // the element that triggers the animation
          start: 'top 70%', // trigger animation when the element reaches 80% from the top of the viewport
          end: 'top 30%', // animation ends when the top of the element reaches 20% into the viewport
          scrub: true, // makes the animation tie to the scroll position
        },
      }
    );
  }, []);

  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      rotation: 10,
      backgroundColor: "#4CAF50",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      rotation: 0,
      backgroundColor: "#6200EE",
      duration: 0.3,
    });
  };
  const buttons = gsap.utils.toArray(".button");
  buttons.forEach((item) => {
    let span = item.querySelector("span");
    let tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    item.addEventListener("mouseenter", () => tl.play(0));
  });


  return (
    <div>

      <Navbar />
      <div className='relative myWrapper'>
        {/* Hero Section */}
        <img src="https://static.wixstatic.com/media/985cc1_664053acd66e48348af81c62c7129ec7~mv2.jpg/v1/fill/w_824,h_754,fp_0.51_0.44,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EVANGELINE_PERGANTIS_PLNT_BURGER_NOMA_(1of1).jpg" className=' object-contain myHero bg-opacity-50' />
        <div className='absolute top-0 left-0 w-full bg-opacity-50'>

          <div class="relative customCarouselSpacing">
            <p class="absolute bottom-0  left-0 m-0 font-custom customStyling bg-black bg-opacity-50 text-white">
              <div className='pb-1 font-custom2'>Rise and Sprout Cafe</div>
              <div className='text-3xl font-custom2'>CHECKOUT OUR NEWEST RECIPE!</div>
              <div className='pt-3'>
                <button className='bg-black p-2 rounded-full font-custom2 w-64'>ORDER NOW</button>
              </div>

            </p>
          </div>
        </div>

        {/* Recoomendation Items Seciton */}
        <div className="parallax bg-aestheticGreen RecSpace">
          <div className="parallax-layer layer1">
            <div className='flex'>
              <div>
                <h1 className=' pt-16 font-black pl-32 text-5xl font-custom text-textGreen'>This Weeks Hottest Picks</h1>
                <div className='pl-16 pt-8 flex flex-row items-center'>
                  <div className='p-8'>
                    <FoodItemCard />
                  </div>
                  <div className='p-8'>
                    <FoodItemCard />
                  </div>
                  <div className='p-8'>
                    <FoodItemCard />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        {/* BioSection Section */}
        <div className="parallax bg-aestheticGreen">
          <div className="parallax-layer layer1">
            <div className="flex">
              <div>
                <h1 className="bio-title pt-16 font-black pl-32 text-5xl font-custom text-textGreen">
                  The Beauty of Eating Guilt Free
                </h1>
                <div
                  className="bio-text font-custom pt-8 pl-32 font-thin text-2xl parallaxSpacing"
                >
               When eating at Rise and Sprout, you can be rest assured that there will never be a plate with animal meat leaving our kitchen.
                    It is our promise that everything we serve is locally sourced, fresh, and completely vegetarian.
                  <br />
                  <AnimatedButton />
                </div>


              </div>
              <img
                className="p-16 w-1/2 rounded-full BioImg3"
                src="https://i.ytimg.com/vi/mtlNWU2nm-g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACARCcQKel2sDj3UYTXeQNAV5ecQ"
                alt="Biography Image"
              />
              <hr />
            </div>
          </div>
        </div>

        {/* Menu Prev. Section */}
        <div className='pb-32'>
          <div className="max-w-[800px] mx-auto w-full flex items-center justify-center flex-wrap">
            <h1 className="bio-title pb-16 font-black pl-32 text-5xl font-custom text-textGreen">
              Choose From a wide variety of options
            </h1>
          </div>
          <ScrollTriggerComponent/>
        </div>
        
        {/* Maps Section */}
        <div className="parallax bg-myGreen">
          <div className="parallax-layer layer1">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 w-full px-4">
                <h1 className="pt-16 font-black pl-32 text-5xl font-custom text-textGreen">
                  Where to Find Us
                </h1>
                <p className="pt-8 font-custom pl-32 font-thin text-2xl parallaxSpacing">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p className="pt-16 pl-32 font-thin text-lg font-custom parallaxSpacing">
                  Call us at: 1800-789-900
                </p>
                <p className="pl-32 font-thin text-lg font-custom parallaxSpacing">
                  Lorem ipsumIpsum DOlor
                </p>

              </div>

              {/* Map Container */}
              <div className="md:w-1/2 w-full px-4 pt-10 mt-8 md:mt-0">
                <GoogleMapComponent />
              </div>
            </div>
          </div>
        </div>


        {/* Sliding Section 1 */}


        {/* Add: min-h-screen if more spacing required in the line below */}
        <div className=" biographycard min-h-[800px]  flex items-center justify-center font-sans p-8">
          {/* Card container - adjust max-w-{size} and w-full to change width, and min-h-{size} to change height */}
          <div className="biographycard bg-beige2 p-8 rounded-lg shadow-lg max-w-6xl w-full min-h-[500px]">
            {/* Content container - adjust flex properties here if needed */}
            <div className="flex justify-between items-start">
              {/* Text content - adjust w-2/3 to change the width of the text section */}
              <div className="w-2/3 pr-8">
                <h1 className="text-5xl text-beige mb-6">Biography</h1>
                {/* Adjust text-lg or text-xl to change paragraph text size */}
                <p className="text-lg text5 text-beige">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-8 flex justify-start">
                  <div className="w-32 h-10 bg-gray0900 rounded-full flex items-center justify-start pl-2">
                    <div className="flex space-x-5">
                      <div className="pl-8 w-5 h-5 rounded-full bg-yellow-900 border-dotted border-2 border-black"></div>
                      <div className="pl-16 w-5 h-5 rounded-full bg-orange-900"></div>
                      <div className="pl-32 w-5 h-5 rounded-full bg-blue-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image container - adjust w-1/3 to change the width of the image section */}
              <div className="w-1/3">
                {/* Adjust image size and positioning here */}
                <img src="./CardOne.JPG" alt="Biography Image" className="w-full h-full rounded-lg" />

              </div>

            </div>
          </div>
        </div>

        <div className="biographycard min-h-[800px]  flex items-center justify-center font-sans p-8">
          {/* Card container - adjust max-w-{size} and w-full to change width, and min-h-{size} to change height */}
          <div className=" bg-beige2 p-8 rounded-lg shadow-lg max-w-6xl w-full min-h-[500px]">
            {/* Content container - adjust flex properties here if needed */}
            <div className="flex justify-between items-start">
              {/* Text content - adjust w-2/3 to change the width of the text section */}
              <div className="w-2/3 pr-8">
                <h1 className="text-5xl text-beige mb-6">Biography</h1>
                {/* Adjust text-lg or text-xl to change paragraph text size */}
                <p className="text-lg text-beige">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-8 flex justify-start">
                  <div className="w-32 h-10 bg-gray0900 rounded-full flex items-center justify-start pl-2">
                    <div className="flex space-x-5">
                      <div className="pl-8 w-5 h-5 rounded-full bg-yellow-900 border-dotted border-2 border-black"></div>
                      <div className="pl-16 w-5 h-5 rounded-full bg-orange-900"></div>
                      <div className="pl-32 w-5 h-5 rounded-full bg-blue-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image container - adjust w-1/3 to change the width of the image section */}
              <div className="w-1/3">
                {/* Adjust image size and positioning here */}
                <img src="img2.jpg" alt="Biography Image" className="w-full h-full rounded-lg" />

              </div>

            </div>
          </div>
        </div>

        <div className="biographycard min-h-[800px]  pb-64 flex items-center justify-center font-sans p-8">
          {/* Card container - adjust max-w-{size} and w-full to change width, and min-h-{size} to change height */}
          <div className=" bg-beige2 p-8 rounded-lg shadow-lg max-w-6xl w-full min-h-[500px]">
            {/* Content container - adjust flex properties here if needed */}
            <div className="flex justify-between items-start">
              {/* Text content - adjust w-2/3 to change the width of the text section */}
              <div className="w-2/3 pr-8">
                <h1 className="text-5xl text-beige mb-6">Biography</h1>
                {/* Adjust text-lg or text-xl to change paragraph text size */}
                <p className="text-lg text-beige">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-8 flex justify-start">
                  <div className="w-32 h-10 bg-gray0900 rounded-full flex items-center justify-start pl-2">
                    <div className="flex space-x-5">
                      <div className="pl-8 w-5 h-5 rounded-full bg-yellow-900 border-dotted border-2 border-black"></div>
                      <div className="pl-16 w-5 h-5 rounded-full bg-orange-900"></div>
                      <div className="pl-32 w-5 h-5 rounded-full bg-blue-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image container - adjust w-1/3 to change the width of the image section */}
              <div className="w-1/3">
                {/* Adjust image size and positioning here */}
                <img src="img6.jpg" alt="Biography Image" className="w-full h-full rounded-lg" />

              </div>

            </div>
          </div>
        </div>
        <CardCarousel />
        <hr />
        <Footer />
      </div>
    </div>

  );
}

export default Home;




