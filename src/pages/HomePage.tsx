import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Award, Star, ChevronRight, Phone, Mail, MapPin, 
  Briefcase, Monitor, Heart, Trophy, Calendar, ChevronDown
} from 'lucide-react';

const companies = [
  {
    name: 'Elite Career Solutions',
    description: 'Connecting skilled candidates with the right opportunities in IT and Non-IT industries.',
    path: '/career-solutions',
    icon: Briefcase,
    color: 'from-blue-600 to-blue-700',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg'
  },
  {
    name: 'Elite Digital Marketing',
    description: 'Helping brands grow online with targeted strategies and creative campaigns.',
    path: '/digital-marketing',
    icon: Monitor,
    color: 'from-purple-600 to-purple-700',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
  },
  {
    name: 'Elite Speech & Hearing Centre',
    description: 'Dedicated therapy services for children with speech, language, and hearing challenges.',
    path: '/speech-hearing',
    icon: Heart,
    color: 'from-green-600 to-green-700',
    image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg'
  },
  {
    name: 'Elite Sports Academy',
    description: 'Promoting inclusive sports and fitness programs for special children.',
    path: '/sports-academy',
    icon: Trophy,
    color: 'from-orange-600 to-orange-700',
    image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg'
  },
  {
    name: 'Elite Weekend Dayouts',
    description: 'Safe and engaging weekend outings designed for special children.',
    path: '/weekend-dayouts',
    icon: Calendar,
    color: 'from-yellow-600 to-yellow-700',
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-teal-400/5 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Empowering Lives Through
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              A comprehensive ecosystem of services spanning career solutions, digital growth, 
              therapeutic care, sports development, and enriching experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#companies" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 cursor-pointer"
              >
                Explore Our Companies
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Arrow Down Effect */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="w-12 h-12 text-white drop-shadow-lg animate-bounce" />
        </a>
      </motion.div>
      {/* End Arrow Down Effect */}

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Elite Groups
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Elite Groups is a diversified organization committed to transforming lives through innovative services 
              and inclusive solutions. Our portfolio spans multiple industries, each designed to address unique needs 
              with excellence and compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5</h3>
              <p className="text-gray-600">Specialized Companies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our diverse portfolio of specialized companies, each dedicated to excellence in their respective fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={company.image} 
                      alt={company.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${company.color} opacity-80`} />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{company.name}</h3>
                    <p className="text-gray-600 mb-6">{company.description}</p>
                    <Link 
                      to={company.path}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Parent",
                company: "Elite Speech & Hearing Centre",
                review: "The speech therapy program has transformed my child's communication skills. The therapists are incredibly patient and skilled.",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                role: "Job Seeker",
                company: "Elite Career Solutions",
                review: "Found my dream job through Elite Career Solutions. Their guidance and support throughout the process was exceptional.",
                rating: 5
              },
              {
                name: "Maria Garcia",
                role: "Business Owner",
                company: "Elite Digital Marketing",
                review: "Our online presence has grown tremendously since partnering with Elite Digital Marketing. Highly recommended!",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.review}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role} • {review.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What services does Elite Groups offer?",
                answer: "Elite Groups offers comprehensive services through five specialized companies: career solutions, digital marketing, speech and hearing therapy, sports programs for special children, and weekend dayouts."
              },
              {
                question: "Are the programs suitable for children with special needs?",
                answer: "Yes, three of our companies (Elite Speech & Hearing Centre, Elite Sports Academy, and Elite Weekend Dayouts) are specifically designed for children with special needs, providing inclusive and supportive environments."
              },
              {
                question: "How can I get started with Elite Career Solutions?",
                answer: "You can visit our Elite Career Solutions page to learn about our services, or contact us directly to schedule a consultation for career guidance and job placement assistance."
              },
              {
                question: "Do you provide digital marketing services for small businesses?",
                answer: "Absolutely! Elite Digital Marketing works with businesses of all sizes, from startups to large enterprises, providing customized digital marketing solutions to help grow your online presence."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your life with our services? Contact us today to learn more about how we can help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">info@elitegroups.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-300">
                    123 Business District,<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Interactive Map Coming Soon</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="">Select Service Interest</option>
                  <option value="career">Elite Career Solutions</option>
                  <option value="digital">Elite Digital Marketing</option>
                  <option value="speech">Elite Speech & Hearing Centre</option>
                  <option value="sports">Elite Sports Academy</option>
                  <option value="dayouts">Elite Weekend Dayouts</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;