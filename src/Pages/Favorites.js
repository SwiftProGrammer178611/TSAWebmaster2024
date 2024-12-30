import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../navbar';
import Card from './Card';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Favorite() {
  gsap.registerPlugin(ScrollTrigger);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const navigate = useNavigate();
  const [openCardId, setOpenCardId] = useState(null); // Replaces hoveredCard with openCardId state
  const overlayRef = useRef(null);

  function handleKalaamClick(id) {
    navigate(`/kalaam/${id}`);
  }

  function handleCardToggle(id) {
    setOpenCardId((prevId) => (prevId === id ? null : id)); // Toggles between opening and closing the card
  }

  useEffect(() => {
    const overlay = document.getElementById("overlay234");
    const tl = gsap.timeline({ paused: true }).to(overlay, {
      autoAlpha: 0,
      y: "-100vh", // Changed to negative value to move up
      ease: "none",
      duration: 1
    });

    ScrollTrigger.create({
      trigger: document.body, // Changed to trigger on the entire body
      start: "top top",
      end: "+=100%",
      scrub: true,
      onUpdate: (self) => {
        tl.progress(self.progress);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
      </div>

      <section id="overlay234" className="overlay234">
        <h1>Welcome To Your Favorites</h1>
      </section>

      <section className="content234">
        <h2>Here's a nice bit of content.</h2>

        <div className='pl-4 pr-4'>
          <div className='w-full h-8 bg-green5 text-white rounded-full flex space-x-72 pl-16'>
            <button className='text-white'>Hamd</button>
            <button className='text-white'>Naat</button>
            <button className='text-white'>Irfani</button>
            <button className='text-white'>Mankabat</button>
            <button className='text-white'>Salaam</button>
          </div>
        </div>

        <div className="pt-8 flex pl-16 flex-wrap relative">
          {favorites.length > 0 ? (
            favorites.map((kalaam) => (
              <Card
                key={kalaam.id}
                kalaam={kalaam}
                onCardClick={handleKalaamClick}
                isOpenCard={openCardId === kalaam.id} // Manage open state
                onToggleCard={handleCardToggle} // Toggle the card on click
              />
            ))
          ) : (
            <p className="text-white">No favorites found</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Favorite;
