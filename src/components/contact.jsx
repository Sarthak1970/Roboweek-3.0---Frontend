import React, { useState } from 'react';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === ''
    };
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({...prev, [name]: false}));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      setResult("Please fill all fields correctly");
      return;
    }

    setResult("Sending....");
    
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("access_key", "cf916255-9865-4e82-af49-e058d0353c02");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id='contact' className="relative z-[100] min-h-screen py-12 px-4 sm:px-6 lg:px-8 lg:text-left text-center">
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-black/50 border border-pink-500/50 rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="p-8 border-r border-pink-500/50">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Chat with us</h3>
                <p className="text-gray-300 mt-2">Our robot team is ready to assist.</p>
                <div className="space-y-2 mt-3">
                  <a href="mailto:robonith@nith.ac.in" className="text-pink-400 hover:text-pink-300 block">
                    robonith@nith.ac.in
                  </a>
                  <div className="text-gray-300">
                    <p>MILIND GUPTA: <a href="tel:+918957895881" className="text-pink-400 hover:text-pink-300">+91 8957895881</a></p>
                    <h4 className="mt-2 font-medium">For General Queries:</h4>
                    <p>PURUSHOTTAM SINGH: <a href="tel:+919031909034" className="text-pink-400 hover:text-pink-300">+91 9031909034</a></p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Visit us</h3>
                <div className="text-gray-300 mt-2 space-y-1">
                  <p>National Institute of Technology, Hamirpur</p>
                  <p>Anu, Hamirpur District</p>
                  <p>Himachal Pradesh, India</p>
                  <p>PIN Code: 177005</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 font-squidFont">Operating Hours</h3>
                <div className="text-gray-300 mt-2 space-y-1">
                  <p>Our robots work 24/7</p>
                  <p className="text-pink-400">AI Support Always Available</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 pt-8">
                <a href="https://github.com/robosocnith" className="text-pink-400 hover:text-pink-300 transform transition-all duration-300 hover:rotate-[360deg] hover:scale-150">
                  <i className="ri-github-fill text-3xl"></i>
                </a>
                <a href="https://www.facebook.com/robo.soc.nith/" className="text-pink-400 hover:text-pink-300 transform transition-all duration-300 hover:rotate-[360deg] hover:scale-150">
                  <i className="ri-facebook-line text-3xl"></i>
                </a>
                <a href="https://www.instagram.com/robosocnith/?hl=en" className="text-pink-400 hover:text-pink-300 transform transition-all duration-300 hover:rotate-[360deg] hover:scale-150">
                  <i className="ri-instagram-line text-3xl"></i>
                </a>
                <a href="https://www.youtube.com/@roboticssocietynith8888/" className="text-pink-400 hover:text-pink-300 transform transition-all duration-300 hover:rotate-[360deg] hover:scale-150">
                  <i className="ri-youtube-line text-3xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-pink-400 font-squidFont">Contact Us </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className={`text-center text-white mt-1 block w-full px-3 py-2 border-b ${
                        formErrors.name ? 'border-red-500' : 'border-pink-500'
                      } focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent`}
                      value={formData.name}
                      onChange={handleChange}
                      style={{ padding: '1rem' }}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className={`text-center text-white mt-1 block w-full px-3 py-2 border-b ${
                        formErrors.email ? 'border-red-500' : 'border-pink-500'
                      } focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent`}
                      value={formData.email}
                      onChange={handleChange}
                      style={{ padding: '1.25rem' }}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Tell us your queries...
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      className={`text-center text-white mt-1 block w-full px-3 py-2 border-b ${
                        formErrors.message ? 'border-red-500' : 'border-pink-500'
                      } focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-transparent`}
                      value={formData.message}
                      onChange={handleChange}
                      style={{ padding: '2.9rem' }}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    text="Submit"
                    onClick={handleSubmit}
                    textSize="text-sm"
                  />
                </div>
                {result && <p className="text-center text-pink-400 mt-4">{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
