"use client"
import { useEffect, useState } from 'react';

const DBHeader = () => {
  const [loaded, setLoaded] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer1 = setTimeout(() => setEmailVisible(true), 300);
    const timer2 = setTimeout(() => setPhoneVisible(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <header className={`fixed top-15 border-xl left-0 w-full z-50 text-black transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background GIF */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <img 
          src="https://img1.picmix.com/output/stamp/normal/6/4/3/4/2454346_b817a.gif" 
          alt="background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo section - replace with your actual logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3 bg-blue-900 rounded-full p-2 flex items-center justify-center">
              <span className="text-white font-bold text-xl animate-pulse">DB</span>
            </div>
            <img src="https://greenairtechnologies.co.in/images/DB-Logo.png" alt="" />
          </div>
          
          {/* Contact info with staggered animations */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
            {/* Email */}
            <div className={`flex items-center transition-all duration-500 ${emailVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sales@gatindia.co.in" className="hover:text-blue-200 transition-colors">
                sales@gatindia.co.in
              </a>
            </div>
            
            {/* Phone */}
            <div className={`flex items-center transition-all duration-500 ${phoneVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919899825626" className="hover:text-blue-200 transition-colors">
                +91 9899825626
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DBHeader;