import { useEffect, useRef } from 'react';
import Navbar from '../navbar';
import '../App.css';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import Footer from './Footer';

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

    // gsap.to('.parallax-layer', {
    //   scrollTrigger: '.parallax-layer', // start the animation when ".box" enters the viewport (once),
    
    const tl = gsap.timeline({ paused: true });
  
    // tl.to(".containertxt", {
    //   scaleX: 4.3,
    //   scaleY: 4.3,
    //   transformOrigin: "bottom left",
    //   ease: "power1",
    //   duration: 2
    // });
  
    // ScrollTrigger.create({
    //   trigger: ".containertxt",
    //   start: "top bottom-=100",
    //   onEnter: () => tl.restart(),
    //   onEnterBack: () => tl.restart(),
    //   onLeave: () => tl.reverse(),
    //   onLeaveBack: () => tl.reverse(),
    // });

    // Updated fade-in and scale effect for .img1
    gsap.fromTo(".img1", {
      opacity: 0, // start with opacity 0
      scale: 1, // start with default scale
      x:0,
    }, {
      opacity: 1, // fade in to opacity 1
      //scale: 0.9, // apply slight scale
      duration: 2,
      ease: "power1.out",
      x:50,
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
          scrub:true,
          toggleActions: "restart none reverse none",
        }
      });
    });
  }, []);

  return (
    <div className='relative myWrapper'>
      {/* Hero Section */}
      <img src="m.JPG" className=' object-contain myHero bg-opacity-50' />
      <div className='absolute top-0 left-0 w-full bg-opacity-50'>
        <Navbar />
        <h1 className='text-gray-100 text-center text-9xl pt-64 text123445 bg-opacity-50'>Welcome</h1>
      </div>
      {/* Biography Section */}
      <div className="parallax">
        <div className="parallax-layer layer1">
          <div className='flex'>
            <div>
              <h1 className='text-white pt-16 font-bold pl-32 text-6xl'>Biography</h1>
              <p className='text-white pt-8 text56700 pl-32 font-thin text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img className=" p-16 w-1/3 BioImg3" src="img1.JPG" />
          </div>
        </div>
      </div>
    <hr/>

      {/* <div className='pt-64 pl-16 pr-16 pb-8'>
      <div className='p-4 containertxt '>
        <h1 className='transformingTxt text-white italic'>"Shaan Shahana Rahe, Dil Fakirana Rahae, Zehan Mai Tera Tasavoor, Gham Se yarana Rahe"</h1>
      </div>
      </div>
      <br/>
      <hr/> */}

{/* Sliding Section 1 */}


<div className='flex mycard1 '>
        <div className='contbio1'>
        <img src="img4.JPG" className='bioimg1 img1'/>
        </div>
        
        <div className='w-auto '>
        <p className='pt-64 textmy text-white text-2xl pl-32  pr-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
      </div>

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
            <img src="img1.jpg" alt="Biography Image" className="w-full h-full rounded-lg" />
            
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
   
                    <hr/>
   <Footer/>
</div>
  );
}

export default Home;




