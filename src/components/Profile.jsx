import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Button from './Button';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { user, logout } = useAuth();

  // Create random data for registered events
  const generateRandomEvents = () => {
    const events = [];
    for (let i = 0; i < 5; i++) {
      events.push({
        name: `Event ${i + 1}`,
        date: new Date(Date.now() + i * 86400000).toLocaleDateString(), // Next 5 days
        teamName: `Team ${i + 1}`,
        status: i % 2 === 0 ? 'Registered' : 'Pending', // Alternate status
        teamData: {
          teamLeader: `Leader ${i + 1}`,
          members: [`Member ${i + 1}A`, `Member ${i + 1}B`, `Member ${i + 1}C`],
        },
      });
    }
    return events;
  };

  const [registeredEvents, setRegisteredEvents] = useState(generateRandomEvents());

  return (
    <div className="min-h-screen py-20">
      <div className="realtive z-[1000] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative  inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-4xl text-pink-400">
                  {user?.name?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mt-4">{user?.name || 'Guest'}</h1>
          <p className="text-gray-400 mt-2">{user?.email || 'guest@example.com'}</p>
        </motion.div>

        {/* Profile Details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-lg bg-black/20 rounded-xl p-6 border border-pink-500/30 flex-1"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400">Name</label>
                <p className="text-white">{user?.name || 'Guest'}</p>
              </div>
              <div>
                <label className="text-gray-400">Email</label>
                <p className="text-white">{user?.email || 'guest@example.com'}</p>
              </div>
              {/* <div>
                <label className="text-gray-400">Member Since</label>
                <p className="text-white">
                  {user?.createdAt 
                    ? new Date(user.createdAt).toLocaleDateString()
                    : 'N/A'}
                </p> 
              </div>*/}
            </div>
          </motion.div>

          {/* Registered Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="backdrop-blur-lg bg-black/20 rounded-xl p-6 border border-pink-500/30 flex-1"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Registered Events</h2>
            <div className="space-y-4">
              {registeredEvents.map((event, index) => (
                <div 
                  key={index}
                  className="p-4 bg-black/30 rounded-lg border border-pink-500/20"
                >
                  <h3 className="text-white font-semibold">{event.name}</h3>
                  <p className="text-gray-400 text-sm">{event.date}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-300">Team: {event.teamName}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      event.status === 'Registered' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-400 text-sm">Team Leader: {event.teamData.teamLeader}</p>
                    <p className="text-gray-400 text-sm">Members: {event.teamData.members.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button
            text="Edit Profile"
            textSize="text-lg"
            iconLink={<i className="ri-edit-line"></i>}
          />
          <Button
            onClick={logout}
            text="Logout"
            textSize="text-lg"
            iconLink={<i className="ri-logout-box-line"></i>}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 