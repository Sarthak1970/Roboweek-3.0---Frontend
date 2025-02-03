import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import FloatingShape from './components/FloatingShape';
import ConferencePage from './pages/ConferencePage';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'
import SquidLoader from './components/Loader.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  
  if (location.pathname === '/') {
    return children;
  }

  return (
    <div id='main-container' className="flex flex-col bg-black">
      <Navbar />
      <FloatingShape />
      <main className="w-screen min-h-screen flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="relative z-[0] opacity-50">
        <SplashCursor />
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<SquidLoader />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ashish" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/conference" element={<ConferencePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;