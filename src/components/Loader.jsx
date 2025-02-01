import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const SquidLoader = () => {
  const gridRef = useRef(null);
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background first
      gsap.from(bgRef.current, {
        opacity: 0,
        scale: 0.8,

      });

      const card = cardRef.current;
      const gridBoxes = gridRef.current.querySelectorAll('div');

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left - width/2) / width * 20;
        const y = (clientY - top - height/2) / height * 20;
        
        gsap.to(card, {
          x: x * 2,
          y: y * 2,
          scale: 1.05,
          // duration: 0.2,
          ease: 'power2.out',
          overwrite: true 
        });

        gsap.to(gridBoxes, {
          scale: 1.5,
          // duration: 0.2,
          // ease: 'power2.out',
          // overwrite: true
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.3,
          // ease: 'power2.out',
          overwrite: true
        });

        gsap.to(gridBoxes, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: true
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      const loadingTimeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 3000);

      return () => {
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
      <div ref={bgRef} className="absolute inset-0 opacity-0 bg-[radial-gradient(circle,#FF0F7B_1px,transparent_1px)] bg-[20px_20px] transform scale-90" />
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4 p-4">
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className="border-2 border-[#FF0F7B]/20 rounded-full transition-all duration-500 hover:bg-[#FF0F7B]/20" />
        ))}
      </div>
      <div ref={cardRef} className="relative w-96 h-64 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 [transform-style:preserve-3d] cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        <div className="absolute inset-2 rounded-xl border border-white/10">
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-6">
            <div className="relative  [transform-style:preserve-3d] w-16 h-16 rounded-full border-4 border-[#FF0F7B] shadow-[0_0_25px_#FF0F7B,inset_0_0_15px_#FF0F7B] animate-bounce" />
            <div className="relative translate-y-10 [transform-style:preserve-3d] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#FF0F7B] drop-shadow-[0_0_20px_#FF0F7B] animate-spinSlow" />
            <div className="relative  [transform-style:preserve-3d] w-16 h-16 border-4 border-[#FF0F7B] shadow-[0_0_25px_#FF0F7B,inset_0_0_15px_#FF0F7B]" />
          </div>
        </div>
      </div>
      <div className="text-[#FF0F7B] font-squidFont p-2 text-2xl font-bold tracking-[0.3em] mt-8 relative  animate-float">
        {loadingComplete ? 'ENTER' : 'LOADING'}
        <span className="after:content-[''] after:animate-dots"></span>
      </div>
      {loadingComplete && (
        <button 
          onClick={handleEnter}
          className="text-[#FF0F7B] font-squidFont p-2 text-2xl font-bold tracking-[0.3em] mt-8 relative shadow-[0_0_15px_#FF0F7B] animate-float cursor-pointer"
        >
          START GAME
          <span className="after:content-[''] after:animate-dots"></span>
        </button>
      )}
    </div>
  );
};

export default SquidLoader;