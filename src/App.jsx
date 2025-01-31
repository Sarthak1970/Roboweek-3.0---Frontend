import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import FloatingShape from './components/FloatingShape';
import Login from './components/Login';
import ConferencePage from './pages/ConferencePage';
import Signup from './components/SignUp';
import Profile from './components/Profile';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'
import { Loader } from 'lucide-react';
import SquidLoader from './components/Loader.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};

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
    <AuthProvider>
      <Router>
        <div className="relative z-[0]">
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
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/conference" element={<ConferencePage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;