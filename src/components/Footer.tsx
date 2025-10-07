import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>

type CompanyKey = 'home'|'career' | 'marketing' | 'speech' | 'sports' | 'weekend';

interface FooterProps {
  company: CompanyKey;
}

const companyNumbers: Record<CompanyKey, string[]> = {
  home: ['+91 9626296856','+91 9962900424'],
  career: ['+91 8122842482', '+044-42697264'],
  marketing: ['+91 8939540201'],
  speech: ['+91 7305969724', '+044-48067961'],
  sports: ['+91 9705465342', '+91 9791007729'],
  weekend: ['+91 9705465342', '+91 9791007729'],
};

// ✅ New mail IDs record
const companyMails: Record<CompanyKey, string[]> = {
  home: ['elitegroupz58@gmail.com'],
  career: ['elitecareersolutions02@gmail.com'],
  marketing: ['eliteadsdigitalmarketing@gmail.com'],
  speech: ['elitespeechhearingcentre@gmail.com '],
  sports: ['elitesportsacademyheadoffice@gmail.com'],
  weekend: ['eliteweekendouting@gmail.com'],
};

const Footer: React.FC<FooterProps> = ({ company }) => {
  const navigate = useNavigate();

  // Navigate to a page and scroll to the top
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className='bg-black/30 w-18 h-18 rounded-lg border-2 border-yellow-400 hover:border-yellow-600'>
              <img src="/Logo.png" alt="EliteGroupz Logo" className="w-14 h-14 "/>
              </div>
              <span className="text-2xl font-bold">Elite Groupz</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming lives through comprehensive services spanning career solutions, Ads & Digital marketing,
              therapy services, sports programs, and enriching experiences for special children.
            </p>
            <div className="flex space-x-4 ">
              <a href="https://www.instagram.com/elitegroupz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://chat.whatsapp.com/L8kfoF42zgnDhlQp7fbD7s" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@elitegroupz02" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center hover:bg-red-800 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Companies</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                <button
                  onClick={() => handleNavigation('/career-solutions')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Elite Career Solutions
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-purple-400" />
                <button
                  onClick={() => handleNavigation('/digital-marketing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Elite Ads & Digital Marketing
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-green-400" />
                <button
                  onClick={() => handleNavigation('/speech-hearing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Elite Speech & Hearing Centre
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-orange-400" />
                <button
                  onClick={() => handleNavigation('/sports-academy')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Elite Sports Academy
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-yellow-400" />
                <button
                  onClick={() => handleNavigation('/weekend-dayouts')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Elite Weekend Outings
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div>
                {companyNumbers[company].map((number, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${number}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      {number}
                    </a>
                  </div>
                ))}
              </div>

              {/* Dynamic Mails */}
              <div>
                {companyMails[company].map((email, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      {email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  No:10, Harini Complex 3rd <br /> Floor, Bharathidasan Street,
                  Valasaravakkam, Chennai,<br /> Tamil Nadu 600087
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Elite Groupz. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
