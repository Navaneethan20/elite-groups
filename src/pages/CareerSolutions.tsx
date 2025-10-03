import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, GraduationCap, FileText, MessageSquare, 
  TrendingUp, Building, CheckCircle, Star, ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const CareerSolutions: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id='#' className="relative pt-48 pb-48 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Space */}
              <div className="w-24 h-24 bg-white/20 bg-white/30 rounded-xl flex items-center justify-center mb-8">
                <img src='\ELITE CAREER SOLUTIONS LOGO.jpg' alt='Logo' className="w-24 h-24 object-contain rounded-xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Elite Career
                <span className="block text-teal-400">Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted partner in connecting skilled professionals with the right opportunities 
                across IT and Non-IT industries.
              </p>
              <div className="flex flex-row sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                </motion.div>
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 hover:shadow-lg cursor-pointerr"
                >
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 bg-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative gpu-boost"
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Career Solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 gpu-boost"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career solutions designed to bridge the gap between talent and opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "IT & Software Placements",
                description: "Specialized recruitment for development, testing, networking, AI, cybersecurity, and data roles.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Building,
                title: "Non-IT Placements",
                description: "Opportunities in HR, finance, sales, healthcare, education, logistics, and customer support.",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: GraduationCap,
                title: "Campus Hiring Programs",
                description: "Partnership with colleges for student placements, internships, and fresher programs.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: TrendingUp,
                title: "Experienced Hiring",
                description: "Recruitment support for mid-level and senior professionals across industries.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: FileText,
                title: "Resume Building",
                description: "Personalized CV preparation and career guidance for job readiness.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: MessageSquare,
                title: "Interview Training",
                description: "Soft skill development sessions to improve communication and professionalism.",
                color: "from-pink-500 to-pink-600"
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8233.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">How We Work</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our streamlined process ensures the perfect match between candidates and employers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative overflow-hidden">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Understanding your career goals, skills, and preferences through detailed consultation."
              },
              {
                step: "02", 
                title: "Profile Enhancement",
                description: "Resume building, skill assessment, and interview preparation tailored to your needs."
              },
              {
                step: "03",
                title: "Job Matching",
                description: "Connecting you with relevant opportunities from our extensive employer network."
              },
              {
                step: "04",
                title: "Placement Support",
                description: "Ongoing support throughout the interview process and successful placement."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{process.title}</h3>
                <p className="text-black">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-[-20px]">
                    <ArrowRight className="w-6 h-6 text-blue-600 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Patel",
                role: "Software Developer",
                company: "TechCorp Solutions",
                image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
                story: "Elite Career Solutions helped me transition from a non-technical background to my dream job in software development."
              },
              {
                name: "Priya Sharma",
                role: "HR Manager", 
                company: "Global Enterprises",
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
                story: "The personalized approach and interview training gave me the confidence to secure my ideal HR position."
              },
              {
                name: "Rahul Kumar",
                role: "Data Analyst",
                company: "Analytics Pro",
                image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
                story: "From resume building to final placement, the support was exceptional. Highly recommended!"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role} at {story.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{story.story}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you find the perfect opportunity that matches your skills and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:elitecareersolutions02@gmail.com?subject=Schedule Consultation Request"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-300 transition-colors cursor-pointer inline-block">
                Schedule Consultation
              </a>
              
             <a href="https://wa.me/918122842482?text=Hello,I would like to get in touch with Elite Groupz."
                target="_blank"
                className="px-8 py-4 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center gap-2 inline-block">
                <FaWhatsapp className="w-6 h-6" />
                Contact via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer company="career" />
    </div>
    
  );
  
};

export default CareerSolutions;