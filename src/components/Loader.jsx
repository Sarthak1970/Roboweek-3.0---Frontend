import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const SquidLoader = () => {
  const gridRef = useRef(null);
  const cardRef = useRef(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const gridItems = gridRef.current.querySelectorAll('div');
      
      // Simplified grid animation without stagger
      gsap.fromTo(gridItems, 
        { 
          scale: 0,
          opacity: 0,
          rotation: 0,
          backgroundColor: '#FF0F7B'
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power4.inOut',
          backgroundColor: 'transparent'
        }
      );

      const card = cardRef.current;
      let isFlipped = false;
      
      const handleClick = () => {
        isFlipped = !isFlipped;
        gsap.to(card, {
          rotationY: isFlipped ? 180 : 0,
          duration: 1,
          ease: 'power4.out',
          transformPerspective: 1000 
        });
      };

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left - width/2) / width * 20;
        const y = (clientY - top - height/2) / height * 20;
        
        gsap.to(card, {
          x: x * 2,
          y: y * 2,
          scale: 1.05,
          duration: 0.1,
          ease: 'power2.out',
          overwrite: true 
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: true
        });
      };

      card.addEventListener('click', handleClick);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      const loadingTimeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 3000);

      return () => {
        card.removeEventListener('click', handleClick);
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(loadingTimeout);
      };
    });

    return () => ctx.revert(); 
  }, []);

  const handleEnter = () => {
    navigate('/Home');
  };

  return (
    <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-black z-50 animate-fadeIn">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#FF0F7B_1px,transparent_1px)] bg-[20px_20px] animate-pulse" />
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4 p-4">
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className="border-2 border-[#FF0F7B]/20 rounded-full transition-all duration-300 hover:bg-[#FF0F7B]/20" />
        ))}
      </div>
      <div ref={cardRef} className="relative w-96 h-64 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 [transform-style:preserve-3d] cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        <div className="absolute inset-2 rounded-xl border border-white/10">
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-6">
            <div className="relative  [transform-style:preserve-3d] w-16 h-16 rounded-full border-4 border-[#FF0F7B] shadow-[0_0_25px_#FF0F7B,inset_0_0_15px_#FF0F7B] animate-bounce" />
            <div className="relative translate-y-10 [transform-style:preserve-3d] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#FF0F7B] drop-shadow-[0_0_20px_#FF0F7B] animate-spinSlow" />
            <div className="relative  [transform-style:preserve-3d] w-16 h-16 border-4 border-[#FF0F7B] shadow-[0_0_25px_#FF0F7B,inset_0_0_15px_#FF0F7B] animate-pulse" />
          </div>
        </div>
      </div>
      <div className="text-[#FF0F7B] font-squidFont p-2 text-2xl font-bold tracking-[0.3em] mt-8 relative shadow-[0_0_15px_#FF0F7B] animate-float">
        {loadingComplete ? 'PRESS ENTER' : 'LOADING'}
        <span className="after:content-[''] after:animate-dots"></span>
      </div>
      {loadingComplete && (
        <button 
          onClick={handleEnter}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-[#FF0F7B] to-[#F89B29] text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_#FF0F7B] relative overflow-hidden group pixelated"
          style={{fontFamily: "'Press Start 2P', cursive"}}
        >
          <span className="relative z-10 font-squidFont tracking-[0.2em] text-shadow-[0_0_5px_#FF0F7B]">START GAME</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F89B29] to-[#FF0F7B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF0F7B] rounded-full shadow-[0_0_15px_#FF0F7B] animate-bounce"></div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/10 rounded-full animate-ping"></div>
        </button>
      )}
    </div>
  );
};

export default SquidLoader;