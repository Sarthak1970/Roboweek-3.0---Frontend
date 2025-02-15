import { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', section:'hero', href: '/Home', icon: 'ri-home-line' },
    { name: 'About', href: '/about', icon: 'ri-information-line' },
    { name: 'Events', href: '/events', icon: 'ri-calendar-event-line' },
    { name: 'Team', href: '/team', icon: 'ri-team-line' },
    { name: 'Sponsors', href: '/sponsors', icon: 'ri-money-dollar-circle-line' },
    { name: 'Conference', href: '/conference', icon: 'ri-slideshow-line' },
    { name: 'Contact', href: '#contact', icon: 'ri-mail-line' },
  ];

  const handleScrollToContact = (event) => {
    event.preventDefault();
    if (window.location.pathname !== '/Home') {
      navigate('/Home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); 
  };

  const handleNavigation = (href, event) => {
    event.preventDefault();
    navigate(href);
    window.scrollTo(0, 0);
    setIsOpen(false); 
  };

  return (
    <>
      <nav
        className={`hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[1000] ${isOpen ? 'w-64' : 'w-12'} transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-pink-500/10`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="backdrop-blur-lg bg-black/20 border border-pink-500/30 rounded-2xl transition-all duration-500 ease-in-out hover:bg-black/30">
          <div className="flex flex-col items-center gap-3 py-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.name === 'Contact' ? '#' : item.href}
                onClick={(e) => item.name === 'Contact' ? handleScrollToContact(e) : handleNavigation(item.href, e)}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 
                  transition-all duration-500 ease-in-out transform
                  hover:text-pink-400 hover:bg-pink-500/10 hover:scale-105
                  ${!isOpen && 'justify-center'} group relative`}
              >
                <i className={`${item.icon} text-2xl transition-transform px-[3px] duration-500 ease-in-out group-hover:scale-110`}></i>
                {isOpen ? (
                  <span className="text-base font-medium transition-opacity duration-500 ease-in-out">
                    {item.name}
                  </span>
                ) : (
                  <span className="absolute left-full ml-3 px-3 py-2 bg-black/80 text-pink-400 text-base rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out 
                    transform translate-x-2 group-hover:translate-x-0
                    whitespace-nowrap shadow-lg">
                    {item.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed top-4 right-4 z-[1000]">
        {isOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[999]">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.name === 'Contact' ? '#' : item.href}
                  onClick={(e) => item.name === 'Contact' ? handleScrollToContact(e) : handleNavigation(item.href, e)}
                  className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  <i className={`${item.icon} text-2xl`}></i>
                  <span className="text-xl font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
