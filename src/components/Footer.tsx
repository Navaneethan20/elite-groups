import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

type CompanyKey = 'career' | 'marketing' | 'speech' | 'sports' | 'weekend';

interface FooterProps {
  company: CompanyKey;
}

const companyNumbers: Record<CompanyKey, string[]> = {
  career: ['+91 8122842482', '+044-42697264'],
  marketing: ['+91 8939540201'],
  speech: ['+91 7305969724','+044-48067961'],
  sports: ['+91 9705465342','+91 9791007729'],
  weekend: ['+91 9705465342','+91 9791007729'],
};

const Footer: React.FC<FooterProps> = ({ company }) => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Elite Groups</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming lives through comprehensive services spanning career solutions, Ads & Digital marketing,
              therapy services, sports programs, and enriching experiences for special children.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Companies</h3>
            <ul className="space-y-3">
              <li><Link to="/career-solutions" className="text-gray-300 hover:text-white transition-colors">Elite Career Solutions</Link></li>
              <li><Link to="/digital-marketing" className="text-gray-300 hover:text-white transition-colors">Elite Ads & Digital marketing</Link></li>
              <li><Link to="/speech-hearing" className="text-gray-300 hover:text-white transition-colors">Elite Speech & Hearing Centre</Link></li>
              <li><Link to="/sports-academy" className="text-gray-300 hover:text-white transition-colors">Elite Sports Academy</Link></li>
              <li><Link to="/weekend-dayouts" className="text-gray-300 hover:text-white transition-colors">Elite Weekend Dayouts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 space-y-4">{companyNumbers[company].map((number, idx) => (
                  <div key={idx} className="flex items-center space-x-3 ">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href={`tel:${number}`} className="text-gray-300 hover:text-white">
                      {number}
                    </a>
                  </div>
                ))}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@elitegroups.com</span>
              </div>
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

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Elite Groups. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;