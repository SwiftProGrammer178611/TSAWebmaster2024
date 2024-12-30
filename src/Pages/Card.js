import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

function Card({ kalaam, onCardClick, isOpenCard, onToggleCard }) {
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isOpenCard) {
      gsap.to(cardRef.current, { scale: 1.1, zIndex: 30, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        contentRef.current,
        { x: "-50%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(cardRef.current, { scale: 1, zIndex: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(contentRef.current, { x: "-100%", opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isOpenCard]);

  return (
    <div
      ref={cardRef}
      className={`card bg-green5 w-64 p-4 m-2 rounded-xl shadow-sm shadow-slate-100 relative allcards cursor-pointer overflow-visible ${
        isOpenCard ? "" : "darkened"
      }`}
      style={{ zIndex: isOpenCard ? 30 : 10 }}
      onClick={() => onToggleCard(kalaam.id)}
    >
      <img
        className="w-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57_n4BxJY1GlfQNFUu107Ok9-sNMrdRcwdQ&s"
        alt="thumbnail"
      />
      <h2 className="text-xl text-white">{kalaam.title}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-3xl"
        onClick={(e) => {
          e.stopPropagation();
          onCardClick(kalaam.id);
        }}
      >
        View Details
      </button>
      <div
        ref={contentRef}
        className="absolute left-full top-0 bg-green5 p-4 rounded-xl border-b-2 w-64 flex flex-col justify-between"
        style={{
          transform: "translateX(-100%)",
          zIndex: 20,
          pointerEvents: isOpenCard ? "auto" : "none",
        }}
      >
        <div>
          <h3 className="text-lg text-white mb-2">{kalaam.title}</h3>
          <p className="text-sm text-gray-300">{kalaam.lines || "No description available."}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-3xl mt-4"
            onClick={() => onCardClick(kalaam.id)}
          >
            View Full Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;