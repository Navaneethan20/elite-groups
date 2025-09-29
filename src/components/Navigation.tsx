import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Building2 } from 'lucide-react';

const companies = [
  { name: 'Elite Career Solutions', path: '/career-solutions', color: 'text-blue-600' },
  { name: 'Elite Digital Marketing', path: '/digital-marketing', color: 'text-purple-600' },
  { name: 'Elite Speech & Hearing Centre', path: '/speech-hearing', color: 'text-green-600' },
  { name: 'Elite Sports Academy', path: '/sports-academy', color: 'text-orange-600' },
  { name: 'Elite Weekend Dayouts', path: '/weekend-dayouts', color: 'text-yellow-600' },
];

const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/50 backdrop-blur-lg shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-black' : 'text-white'} hover:text-blue-600`}>
              Elite Groups
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-bold transition-colors hover:text-blue-600 ${
                scrolled ? 'text-black' : 'text-white'
              } ${location.pathname === '/' ? 'text-blue-600' : ''}`}
            >
              Home
            </Link>
            <a href="#about" className={`font-bold transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
              About
            </a>
            
            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`font-bold flex items-center space-x-1 transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
                <span>Companies</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white/40 backdrop-blur-xl  rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    {companies.map((company, index) => (
                      <Link
                        key={index}
                        to={company.path}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Point color uses company.color */}
                          <div className={`w-2 h-2 rounded-full ${company.color.replace('text-', 'bg-')}`} />
                          <span className="font-medium text-gray-800 hover:text-blue-600 transition-colors">{company.name}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contact" className={`font-bold transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-4">
                <Link to="/" className="block font-bold text-black hover:text-blue-600">
                  Home
                </Link>
                <a href="#about" className="block font-bold text-black hover:text-blue-600">
                  About
                </a>
                <div className="space-y-2">
                  <p className="font-bold text-black">Companies</p>
                  {companies.map((company, index) => (
                    <Link
                      key={index}
                      to={company.path}
                      className="block pl-4 text-sm font-bold text-black hover:text-blue-600"
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
                <a href="#contact" className="block font-bold text-black hover:text-blue-600">
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