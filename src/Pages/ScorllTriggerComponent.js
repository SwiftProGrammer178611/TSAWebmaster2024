import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent = () => {
  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    gsap.set(".box", { y: 100 });

    ScrollTrigger.batch(".box", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.to(batch, { opacity: 0, y: -100, duration: 1.5, overwrite: true }), // Adjust the duration as needed
    });

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", { y: 0 }));
  }, []);

  return (
    <>
      <div className="max-w-[800px] mx-auto w-full flex items-center justify-center flex-wrap">
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-red-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-purple-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-orange-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-green-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-blue-500"></div>

        {/* Repeat the boxes as needed */}
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-red-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-purple-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-orange-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-green-500"></div>
        <div className="box w-[31%] h-[15vh] m-1 opacity-0 transform bg-blue-500"></div>
      </div>
    </>
  );
};

export default ScrollTriggerComponent;
