import { motion } from 'framer-motion';
import teamData from '../../public/data/test.json';  
import Button from '../components/Button';

const Team = () => {
  return (
    <div className="min-h-screen py-20 z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16 backdrop-blur-lg bg-black/10 p-8 rounded-2xl border border-pink-500/50"
        >
          <h1 className="text-6xl font-squidFont font-bold text-white mb-4">Our <span className="text-pink-400">Team</span></h1>
          <p className="text-xl text-gray-300">Meet the minds behind RoboWeek 3.0</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              viewport={{ once: true }}
              className="group h-[400px] [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 backdrop-blur-lg bg-black/10 rounded-2xl overflow-hidden border border-pink-500/50">
                  <img
                    src={member.ProfilePicture}
                    alt={member.Name}
                    className="w-full h-3/4 object-contain rounded-2xl  p-5 object-center"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-bold text-white mb-2">{member.Name.toUpperCase()}</h3>
                    <div className="text-pink-400 font-semibold">{member.Post.toUpperCase()}</div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-2xl overflow-hidden border border-pink-500/50">
                  <div className="flex flex-col justify-center h-full p-6 text-center"> {/* Center aligned */}
                    <div className="mb-4"> {/* Added margin bottom for spacing */}
                      <h3 className="text-xl font-bold text-white mb-2">{member.Name}</h3>
                      <div className="text-pink-400 font-semibold mb-4">{member.Post}</div>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.Techstack.split(',').map((tech, idx) => (
                          <span key={idx} className="bg-pink-500 text-white rounded-full px-3 py-1 text-sm">
                            {tech.trim()}
                          </span>
                        ))}
                      </div> {/* Techstack in rounded boxes */}
                    </div>
                    <div className="flex justify-center gap-6">
                      {member.Github && member.Github !== "Non active" && (
                        <a
                          href={member.Github}
                          className="text-pink-400 hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ri-github-fill text-2xl"></i>
                        </a>
                      )}
                      {member.LinkedIn && (
                        <a
                          href={member.LinkedIn}
                          className="text-pink-400 hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ri-linkedin-box-fill text-2xl"></i>
                        </a>
                      )}
                      {member.Instagram && member.Instagram !== "__" && (
                        <a
                          href={member.Instagram}
                          className="text-pink-400 hover:text-white transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ri-instagram-fill text-2xl"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 backdrop-blur-lg bg-black/10 rounded-2xl p-8 border border-pink-500/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Our Team</h2>
          <p className="text-center text-gray-300 mb-8">
            We're always looking for passionate individuals to join our team. 
            If you're interested in helping organize future events, get in touch!
          </p>
          <div className="text-center">
            <Button text={"Contact Us"} textSize="text-2xl" iconLink={<i className="ri-mail-line text-3xl"></i>} />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Team;