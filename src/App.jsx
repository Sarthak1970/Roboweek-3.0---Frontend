import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
// import SplashCursor from './SplashCursor'
import Contact from './components/Contact.jsx';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router className="">
      
      <div className="relative  z-[0]">

      <SplashCursor />
      </div>
      
        <FloatingShape /> 
        <div id='main-container' className=" flex flex-col bg-black">
          <Navbar />
          <main className="w-screen min-h-screen flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={
                  <Events />
              } />
              <Route path="/team" element={<Team />} />
              <Route path="/ashish" element={<Events />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign" element={<Signup />} />
              <Route 
                path="/profile" 
                element={
                    <Profile />
                } 
              />
              <Route path="/conference" element={<ConferencePage />} />
              <Route path="/Contact" element={<Contact/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;