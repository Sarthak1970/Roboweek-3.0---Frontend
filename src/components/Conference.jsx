import React, { useEffect, useRef } from 'react';

const Conference = () => {
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current);
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current);
    if (paragraph3Ref.current) observer.observe(paragraph3Ref.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraph1Ref.current) observer.unobserve(paragraph1Ref.current);
      if (paragraph2Ref.current) observer.unobserve(paragraph2Ref.current);
      if (paragraph3Ref.current) observer.unobserve(paragraph3Ref.current);
    };
  }, []);

  return (
    <section className="relative w-full py-24 bg-black/20 backdrop-blur-lg min-h-[80vh] z-0 border-t-4 border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 mb-8 leading-tight opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          RoboWeek 3.0 Conference
        </h1>

        <p 
          ref={paragraph1Ref}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300"
        >
          Join us for an exciting conference with industry leaders and innovators. Learn from expert speakers, explore cutting-edge technology, and engage in insightful discussions with like-minded individuals. Whether you're a student, professional, or hobbyist, this is your chance to gain valuable insights into the future of robotics.
        </p>

        <p 
          ref={paragraph2Ref}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500"
        >
          Throughout the conference, we will cover a wide range of topics including artificial intelligence, automation, machine learning, and the latest trends in robotics. Attendees will also have the opportunity to network with experts, collaborate on projects, and gain firsthand knowledge from some of the leading figures in the field.
        </p>

        <p 
          ref={paragraph3Ref}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-700"
        >
          Don't miss out on this unique opportunity to connect, learn, and be inspired. Stay tuned for more details about the schedule, guest speakers, and special events. We can't wait to see you there!
        </p>
      </div>
    </section>
  );
};

export default Conference;