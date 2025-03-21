import { motion } from "framer-motion";
import Button from "../components/Button";
import HoverRobotix from "/assets/sponserslogo/hoverrobotix.png";
import MentorX from "/assets/sponserslogo/mentorx.png";
import RevUp from "/assets/sponserslogo/revup.webp";
import EasemyTrip from "/assets/sponserslogo/easemytrip.png";
import LUCR8 from "/assets/sponserslogo/lucr8.jpeg";
import Unstop from "/assets/sponserslogo/unstop.svg";
import stockgro from "/assets/sponserslogo/stockgro.svg";
import Neugence from "/assets/sponserslogo/neugence_logo.jpg";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Title Partner",
      sponsors: [
        {
          name: "hoverRobotix",
          logo: HoverRobotix,
        },
      ],
    },
    {
      tier: "Mentoring Partner",
      sponsors: [
        {
          name: "MentorX",
          logo: MentorX,
        },
      ],
    },
    {
      tier: "Co-Title Sponsors",
      sponsors: [
        {
          name: "RevUp",
          logo: RevUp,
        },
        {
          name: "LUCR8",
          logo: LUCR8,
        },
      ],
    },
    {
      tier: "Powered By",
      sponsors: [
        {
          name: "unstop",
          logo: Unstop,
        },
      ],
    },
    {
      tier: "Travel Partner",
      sponsors: [
        {
          name: "EasemyTrip",
          logo: EasemyTrip,
        },
      ],
    },
    {
      tier: "Stock Market Education Partner",
      sponsors: [
        {
          name: "StockGro",
          logo: stockgro,
        },
      ],
    },
    {
      tier: "Upskilling Partner",
      sponsors: [
        {
          name: "Neugence",
          logo: Neugence,
        },
      ],
    },
  ];

  const handleSponsorClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=robonith@nith.ac.in&cc=22bme080@nith.ac.in&bcc=avisheetsrivastava@gmail.com&su=Roboweek%203.0%20Sponsorship%20Inquiry&body=Hello,%0A%0AI%20am%20interested%20in%20becoming%20a%20sponsor%20for%20Roboweek%203.0.%0A%0APlease%20let%20me%20know%20the%20details.%0A%0AThank%20you.",
      "_blank"
    );
  };
  

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 backdrop-blur-lg bg-black/20 p-6 rounded-3xl border border-pink-500/30"
        >
          <h1 className="relative z-10 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-300 mb-4 font-squidFont">
            Our Partners in Innovation
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Empowering the future of robotics together
          </p>
        </motion.div>

        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div
            key={tierIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-black/20 rounded-3xl p-5 border border-pink-500/30 mb-12"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
              <h2 className="text-2xl font-bold text-white px-4 font-squidFont">
                {tier.tier}
              </h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>

            <div
              className={`grid ${tier.sponsors.length === 1 ? 'grid-cols-1' : 
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-8 justify-items-center`}
            >
              {tier.sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  }}
                  className="backdrop-blur-lg bg-black/30 group relative overflow-hidden rounded-xl p-4 border border-pink-500/20 h-36 w-full max-w-md flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {sponsor.logo && (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-[90%] max-h-[90%] object-contain transition-opacity duration-500 group-hover:opacity-80"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-black/20 relative overflow-hidden rounded-3xl p-10 border border-pink-500/20"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-bold text-white font-squidFont">
              Join Our Mission
            </h2>
            <p className="text-md text-gray-300 max-w-2xl">
              Partner with us to shape the future of robotics and empower the
              next generation of innovators.
            </p>

            <Button
              text="Become a Sponsor"
              textSize="text-lg"
              iconLink={<i className="ri-rocket-line text-xl"></i>}
              onClick={handleSponsorClick}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
