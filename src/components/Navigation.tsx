import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Building2 } from 'lucide-react';

const companies = [
  { name: 'Elite Career Solutions', path: '/career-solutions', color: 'text-blue-600' },
  { name: 'Elite Ads & Digital marketing', path: '/digital-marketing', color: 'text-purple-600' },
  { name: 'Elite Speech & Hearing Centre', path: '/speech-hearing', color: 'text-green-600' },
  { name: 'Elite Sports Academy', path: '/sports-academy', color: 'text-orange-600' },
  { name: 'Elite Weekend Dayouts', path: '/weekend-dayouts', color: 'text-yellow-600' },
];

const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isCompaniesOpen, setIsCompaniesOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Home button and logo click
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If already on the home page, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the home page and scroll to the top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Delay to ensure navigation completes
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/50 backdrop-blur-lg shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
         className="flex items-center space-x-3 cursor-pointer"
            onClick={handleHomeClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>

            {/* <img src='\ELITE HOME.jpg' alt='Logo' className="w-16 h-16 object-contain rounded-xl"></img> */}
            
            <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-black' : 'text-white'} hover:text-blue-600`}>
              Elite Groupz
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className={`font-bold text-xl transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'
                } ${location.pathname === '/' ? 'text-blue-600' : ''}`}
            >
              Home
            </button>
            <a href="#about" className={`font-bold text-xl transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
              About
            </a>

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`font-bold flex items-center space-x-1 text-xl transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
                <span>Companies</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/50 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200 overflow-hidden ring-1 ring-blue-200"
                  >
                    {companies.map((company, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.04 * index, duration: 0.18 }}
                      >
                        <Link
                          to={company.path}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-all border-b border-gray-100 last:border-0 group"
                        >
                          <div className={`w-2.5 h-2.5 rounded-full ${company.color.replace('text-', 'bg-')} shadow group-hover:scale-110 transition-transform`} />
                          <span className={`font-semibold text-l ${scrolled ? 'text-black' : 'text-black'} group-hover:text-blue-600 transition-colors`}>
                            {company.name}
                          </span>
                          <span className="ml-auto text-l text-gray-400 group-hover:text-blue-400 transition-colors">
                            &rarr;
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contact" className={`font-bold text-xl transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>


        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/50 border-t border-gray-100 shadow-lg rounded-b-xl overflow-hidden backdrop-blur-lg"
            >
              <div className="px-4 py-4 space-y-4">
                <button
                  onClick={handleHomeClick}
                  className="block font-bold text-black hover:text-blue-600"
                >
                  Home
                </button>

                <a
                  href="#about"
                  className="block font-bold text-black hover:text-blue-600"
                >
                  About
                </a>

                <div className="space-y-2">
                  <button
                    onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                    className="flex justify-between w-full font-bold text-black hover:text-blue-600"
                  >
                    Companies
                    <span>{isCompaniesOpen ? "▲" : "▼"}</span>
                  </button>

                  <AnimatePresence>
                    {isCompaniesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {companies.map((company, index) => (
                          <Link
                            key={index}
                            to={company.path}
                            className="block text-sm font-bold text-black hover:text-blue-600"
                          >
                            {company.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#contact"
                  className="block font-bold text-black hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden bg-blue-600 bg-purple-600 bg-green-600 bg-orange-600 bg-yellow-600" />
    </motion.nav>
  );
};

export default Navigation;