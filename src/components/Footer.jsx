// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // const footerRef = useRef(null);

  // useEffect(() => {
  //   const footer = footerRef.current;

  //   // 3D animation for individual cards
  //   const cards = footer.querySelectorAll(".card");
  //   gsap.fromTo(
  //     cards,
  //     { opacity: 0, y: 50, rotationY: 90 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       rotationY: 0,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: footer,
  //         start: "top bottom",
  //       },
  //     }
  //   );

  //   // Footer container fade-in
  //   gsap.fromTo(
  //     footer,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: footer,
  //         start: "top bottom",
  //       },
  //     }
  //   );
  // }, []);

  return (
    // <footer
    //   ref={footerRef}
    //   className="backdrop-blur-lg bg-black/20 border-t border-pink-500/30 text-white z-10"
    //   role="contentinfo" // Added to improve accessibility (defines the footer section)
    //   aria-labelledby="footer-heading" // Links to a heading for the footer for screen readers
    // >
    //   <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    //     <h2 id="footer-heading" className="sr-only">
    //       Footer Section
    //     </h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <article className="card backdrop-blur-lg bg-black/10 p-6 rounded-xl border border-pink-500/30">
    //         <h3 className="text-2xl font-bold text-pink-400">RoboWeek 3.0</h3>
    //         <p className="mt-4 text-gray-300">
    //           Join us in shaping the future of robotics through innovation and
    //           collaboration.
    //         </p>
    //       </article>
    //       <nav className="card backdrop-blur-lg bg-black/10 p-6 rounded-xl border border-pink-500/30">
    //         <h4 className="text-lg font-semibold text-pink-400">Quick Links</h4>
    //         <ul className="mt-4 space-y-2">
    //           <li>
    //             <a
    //               href="/about"
    //               className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
    //               aria-label="Learn more about us"
    //             >
    //               About Us
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/events"
    //               className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
    //               aria-label="View upcoming events"
    //             >
    //               Events
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/team"
    //               className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
    //               aria-label="Meet our team"
    //             >
    //               Team
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/sponsors"
    //               className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
    //               aria-label="Our sponsors"
    //             >
    //               Sponsors
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //       <article className="card backdrop-blur-lg bg-black/10 p-6 rounded-xl border border-pink-500/30">
    //         <h4 className="text-lg font-semibold text-pink-400">Contact Us</h4>
    //         <ul className="mt-4 space-y-2">
    //           <li className="text-gray-300">
    //             Email: <a href="mailto:robonith@nith.ac.in" className="text-pink-400 hover:underline">robonith@nith.ac.in</a>
    //           </li>
    //           <li className="text-gray-300">
    //             Phone: <a href="tel:+91XXXXXXXXXX" className="text-pink-400 hover:underline">+91 XXXXXXXXXX</a>
    //           </li>
    //         </ul>
    //       </article>
    //     </div>
        <div className="relative z-0 backdrop-blur-xl flex items-center justify-center mt-8 h-20  border-t border-pink-500/30 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Robotics Society NITH. All rights reserved.
          </p>
        </div>
      // </div>
    // </footer>
  );
};

export default Footer;
