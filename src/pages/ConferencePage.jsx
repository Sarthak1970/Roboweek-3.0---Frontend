import React from 'react';
import CountdownTimer from '../components/Timer';
import Button from '../components/Button';

const speakers = [
  {
    name: "To be revealed!",
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
  },
  {
    name: "To be revealed!",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
  },
  {
    name: "To be revealed!",
    image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg",
  },
];

const ConferencePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      {/* Header Section */}
      <header className="text-center py-10 relative z-[100] mt-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4">
          Roboweek 3.0<span className="text-pink-400"> Conference</span>
        </h1>
        <CountdownTimer />
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-4 font-semibold text-center">
          Join us for an event featuring top industry professionals, insightful talks, and unparalleled networking opportunities.
        </p>
      </header>

      {/* Submit Button */}
      <Button text="Submit Your Abstract" iconLink={<i className="ri-corner-right-down-line"></i>} />

      {/* Featured Speakers Section */}
      <section className="mt-12 relative z-[100] px-4 w-full max-w-7xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Featured <span className="text-pink-400">Speakers</span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-center text-gray-300 mb-8">
          Stay tuned for the unveiling of our esteemed speakers who will share their expertise on emerging trends and technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-lg border border-gray-600 rounded-xl p-4 md:p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-40 md:h-48 flex items-center justify-center rounded-lg mb-4 bg-pink-400/10 border border-pink-400/30">
                <i className="ri-user-3-line text-6xl text-pink-400/50"></i>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white">{speaker.name}</h2>
              <p className="text-sm md:text-base text-gray-400 mt-2 font-semibold">
                Details coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops & Sessions Section */}
      <section className="relative flex flex-col z-[100] mt-12 text-center mb-12 px-4 w-full max-w-5xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Workshops & Sessions
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8">
          Participate in interactive workshops and hear from leading experts in the field.
        </p>

        {/* Glowing Sign */}
        <div className="relative bg-black border-4 border-pink-400 rounded-lg shadow-lg py-6 px-6 md:px-12 animate-pulse">
          <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
            Session Details
          </h3>
          <p className="text-lg md:text-xl font-semibold text-pink-400 mt-2">
            To Be Revealed Soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConferencePage;
