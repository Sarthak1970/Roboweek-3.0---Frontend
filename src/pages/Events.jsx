import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const { user } = useAuth() || {};

  const events = [
    {
      title: "PathFinder",
      type: "competition",
      date: "极Mar 22, 2025",
      description: "Driven By code, Guided By Lines !",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "4:00 PM  - 6:00 PM",
        prize: "₹ 70000000",
        teamSize: "1-4 members",
      },
      rulebookLink: "https://example.com/rulebook/pathfinder",
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738154215/pathfinder_dec5zk.png', 
    },
    {
      title: "Bowl Bot Derby",
      type: "competition",
      date: "Mar 23, 2025",
      description: "BALANCE . NAVIGATE . BOWL TO WIN !",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "9:00 AM - 12:00 PM",
        prize: "₹ 70000000",
        teamSize: "1-4 members",
      },
      rulebookLink: "https://极example.com/rulebook/competition3",
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738154212/BowlBotDerby_zhwklt.png', 
    },
    {
      title: "MECHA MAYHEM",
      type: "competition",
      date极: "Mar 22, 2025",
      description: "BOOK YOUR TICKET TO THE FUTURE !",
      categories: ["requirments 极1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "2:00 PM - 4:00 PM",
        prize: "₹ XXXX",
        teamSize: "1-4 members",
      },
      rulebookLink: "https://example.com/rulebook/competition3",
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738154205/MECHA_MAYHEM_1_hevnpv.png',
    },
    {
      title: "SPECTRUM SPRINT",
      type: "competition",
      date: "Mar 24, 2025",
      description: "CATCH THE RAINBOW !",
      categories: ["requirments 1", "requirments 2", "requirments 3"],
      details: {
        venue: "NIT Hamirpur",
        time: "9:00 AM - 12:00 PM",
        prize: "₹ 700000000000000000000",
        teamSize: "1-4 members",
      },
      rulebookLink: "https://example.com/rulebook/competition3",
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738154216/2_bstjsa.png', 
    },
    {
      title: "✨ To be revealed",
      type: "workshop",
      date: "To be revealed",
      description: "Get ready for an inspiring Hackathon! Details coming soon.",
      categories: ["Coming Soon"],
      details: {
        venue: "NIT Hamirpur",
        time: "To be revealed",
        prize: "Certificate of Attendance",
        teamSize: "Individual",
        requirements: ["No special requirements at this time."],
        rules: ["Registration required", "Be on time"]
      },
      rulebookLink: null,
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738513188/IMG_7732_pwb5sv.png'
    },
    {
      title: "✨To be revealed",
      type: "workshop",
      date: "To be revealed",
      description: "An exciting speaker will be announced soon. Stay tuned!",
      categories: ["Coming Soon"],
      details: {
        venue: "NIT Hamirpur",
        time: "To be revealed",
        prize: "Certificate of Attendance",
        teamSize: "Individual",
        requirements: ["No special requirements at this time."],
        rules: ["Registration required", "Be on time"]
      },
      rulebookLink: null,
      image: 'https://res.cloudinary.com/dosnuagvu/image/upload/v1738513187/WhatsApp_Image_2025-02-02_at_21.47.24_3c737600_toupm4.jpg'
    },
    {
      title: "✨ Workshop to be revealed",
      type: "Hackathon",
      date: "To be revealed",
      description: "Exciting details about this workshop will be shared soon. Stay tuned for updates!",
      categories: ["Coming Soon"],
      details: {
        venue: "NIT Hamirpur",
        time: "To be revealed",
        prize: "Participation Certificate",
        teamSize: "To be announced",
        requirements: ["No special requirements at this time."],
        rules: ["No late entries allowed.", "Follow the session guidelines."]
      },
      rulebookLink: null
    },
    {
      title: "✨ Workshop to be revealed",
      type: "Hackathon",
      date: "To be revealed",
      description: "Exciting details about this workshop will be shared soon. Stay tuned for updates!",
      categories: ["Coming Soon"],
      details: {
        venue: "NIT Hamirpur",
        time: "To be revealed",
        prize: "Participation Certificate",
        teamSize: "极To be announced",
        requirements: ["No special requirements at this time."],
        rules: ["No late entries allowed.", "Follow the session guidelines."]
      },
      rulebookLink: null
    }
  ];
    
  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'competition', label: 'Competitions' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'Hackathon', label: 'Hackathons' },
  ];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.type === selectedCategory);

  const handleRegister = (event) => {
    if (!user) {
      alert("Please login to register for events");
      return;
    }
    alert(`Successfully registered for ${event.title}`);
  };
const EventImageOrPlaceholder = ({ event }) => {
    if (event.type === "Hackathon") {
      return (
        <div className="w-3/4 h-48 mx-auto flex items-center justify-center border-2 border-dashed border-pink-500/50 rounded-xl bg-pink-500/10">
          <div className="text-center px-4">
            <p className="text-pink-400 text-xl font-bold mb-2">✨</p>
            <p className="text-pink-400 font-semibold">Will be revealed soon</p>
          </div>
        </div>
      );
    }
    
    return event.image ? (
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-3/4 h-auto object-cover object-top mx-auto"
      />
    ) : null;
  };

  return (
    <div className="relative z-[100] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-squidFont">
            Events at <span className="text-pink-400">RoboWeek 3.0</span>
          </h1>
          <p className="text-xl text-pink-100">Discover exciting events and competitions</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-pink-500/10 text-pink-400 hover:bg-pink-500/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
              className="backdrop-blur-lg bg-black/20 rounded-xl border border-pink-500/30 overflow-hidden hover:border-pink-500 transition-all duration-300 cursor-pointer p-4"
            >
              <EventImageOrPlaceholder event={event} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-400 mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-pink-400">{event.date}</div>
                  <div className="text-pink-400">{event.details.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black/90 border border-pink-500/30 rounded-xl p-8 overflow-y-auto"
              >
                {selectedEvent.type === "Hackathon" ? (
                  <div className="w-full h-72 flex items-center justify-center border-2 border-dashed border-pink-500/50 rounded-xl bg-pink-500/10 mb-6">
                    <div className="text-center px-4">
                      <p className="text-pink-400 text-3xl font-bold mb-2">✨</p>
                      <p className="text-pink-400 text-xl font-semibold">Will be revealed soon</p>
                    </div>
                  </div>
                ) : selectedEvent.image && (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-72 object-cover rounded-xl mb-6"
                  />
                )}
                
                <h2 className="text-3xl font-bold text-pink-400 mb-4">{selectedEvent.title}</h2>
                {/* Rest of the modal content remains the same */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;