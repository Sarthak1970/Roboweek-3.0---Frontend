import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const CreepyLoader = () => {
  const gridRef = useRef(null);
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced background animation with flicker effect
      gsap.from(bgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(bgRef.current, {
            opacity: 0.8,
            duration: 0.2,
            repeat: 3,
            yoyo: true,
            ease: 'power1.inOut'
          });
        }
      });

      const card = cardRef.current;
      const gridBoxes = gridRef.current.querySelectorAll('div');

      // Add random flicker animation to grid boxes
      gridBoxes.forEach(box => {
        gsap.to(box, {
          opacity: () => Math.random() * 0.5 + 0.5,
          duration: () => Math.random() * 0.5 + 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left - width/2) / width * 20;
        const y = (clientY - top - height/2) / height * 20;
        
        gsap.to(card, {
          x: x * 2,
          y: y * 2,
          scale: 1.05,
          ease: 'power2.out',
          overwrite: true 
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.3,
          overwrite: true
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          rotateY: 180,
          duration: 0.5,
          ease: 'power2.inOut'
        });
      };

      const handleMouseExit = () => {
        gsap.to(card, {
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseExit);

      const loadingTimeout = setTimeout(() => {
        setLoadingComplete(true);
      }, 5000);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseExit);
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
      <div ref={bgRef} className="absolute inset-0 opacity-0 bg-[radial-gradient(circle,#ff0000_1px,transparent_1px)] bg-[20px_20px] transform scale-90" />
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4 p-4">
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className="border-2 border-[#ff0000]/20 rounded-full transition-all duration-500 hover:bg-[#ff0000]/20" />
        ))}
      </div>
      <div ref={cardRef} className="relative w-96 h-64 rounded-2xl backdrop-blur-lg bg-black border border-white/10 [transform-style:preserve-3d] cursor-pointer shadow-[0_8px_32px_0_rgba(255,0,0,0.3)] transition-transform duration-500 group hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-2 rounded-xl border border-white/10 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-6">
            <div className="relative [transform-style:preserve-3d] w-16 h-16 rounded-full border-4 border-[#ff0000] shadow-[0_0_25px_#ff0000,inset_0_0_15px_#ff0000] animate-bounce">
              {/* <div className="absolute inset-0 rounded-full bg-[#ff0000] opacity-20 animate-pulse" /> */}
            </div>
            <div className="relative translate-y-10 [transform-style:preserve-3d] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#ff0000] drop-shadow-[0_0_20px_#ff0000] animate-spinSlow">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ff0000] rounded-full shadow-[0_0_10px_#ff0000]" />
            </div>
            <div className="relative [transform-style:preserve-3d] w-16 h-16 border-4 border-[#ff0000] shadow-[0_0_25px_#ff0000,inset_0_0_15px_#ff0000] animate-pulse">
              <div className="absolute inset-0 bg-[#ff0000] opacity-10 animate-spin" />
            </div>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute inset-2 rounded-xl border border-white/10 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black/50 flex items-center justify-center group-hover:[transform:rotateY(0deg)] transition-transform duration-500">
          <div className="text-[#ff0000] text-2xl font-creepy text-center px-4 animate-flicker">
            WELCOME TO THE VOID
            <div className="text-sm mt-2">They're watching you...</div>
            <div className="text-xs mt-4 opacity-50 animate-pulse">Don't look behind you...</div>
          </div>
        </div>
      </div>
      <div className="text-[#ff0000] font-creepy p-2 text-2xl text-center font-bold tracking-[0.3em] mt-8 relative animate-float">
        {loadingComplete ? 'DO YOU DARE TO CONTINUE ' : 'LOADING YOUR SOUL'}
        <span className="inline-block w-6">
          <span className="animate-dots">.</span>
          <span className="animate-dots animation-delay-200">.</span>
          <span className="animate-dots animation-delay-400">.</span>
        </span>
      </div>
      {loadingComplete && (
        <button 
          onClick={handleEnter}
          className="text-[#ff0000] font-creepy rounded-xl backdrop-blur-sm p-5 text-2xl font-bold tracking-[0.3em] mt-8 relative shadow-[0_0_15px_#ff0000] animate-float cursor-pointer hover:text-white hover:bg-[#ff0000] transition-all duration-300 border border-[#ff0000]/50 hover:border-[#ff0000] group"
        >
          <span className="group-hover:opacity-0 transition-all duration-300">ENTER THE VOID</span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">YOUR FATE AWAITS</span>
          <span className="after:content-[''] after:animate-dots after:text-[#ff0000] after:blur-[1px]"></span>
        </button>
      )}
    </div>
  );
};

export default CreepyLoader;