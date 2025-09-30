import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Ear, MessageCircle, Users, Brain, 
  Award, BookOpen, Activity, Stethoscope, Smile
} from 'lucide-react';
import Footer from '../components/Footer';

const SpeechHearing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-48 bg-gradient-to-br from-green-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-teal-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Space */}
              <div className="w-32 h-18 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-8">
                <img src='\ELITE SPEECH AND HEARING CENTRE LOGO.jpg' alt='Logo' className="w-32 h-18 object-contain rounded-xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Elite Speech &
                <span className="block text-teal-400">Hearing Centre</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Dedicated to helping children overcome speech, language, and hearing challenges 
                through compassionate care and evidence-based therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-white text-green-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
                >
                  Book Assessment
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg" 
                alt="Speech Therapy"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Therapy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care and specialized programs designed to support children's communication development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Speech Therapy",
                description: "Comprehensive treatment for delayed speech, articulation issues, and stammering.",
                color: "from-green-500 to-green-600",
                benefits: ["Articulation Training", "Language Development", "Fluency Improvement", "Voice Therapy"]
              },
              {
                icon: Ear,
                title: "Hearing Assessments",
                description: "Early detection and screening for hearing-related challenges in children.",
                color: "from-teal-500 to-teal-600",
                benefits: ["Audiometry Tests", "Tympanometry", "OAE Screening", "Hearing Aid Fitting"]
              },
              {
                icon: Brain,
                title: "Language Development",
                description: "Specialized programs for children facing communication and language delays.",
                color: "from-blue-500 to-blue-600",
                benefits: ["Vocabulary Building", "Grammar Skills", "Social Communication", "Reading Readiness"]
              },
              {
                icon: Stethoscope,
                title: "Auditory Verbal Therapy",
                description: "Specialized therapy for hearing-impaired children with hearing aids or cochlear implants.",
                color: "from-purple-500 to-purple-600",
                benefits: ["Listening Skills", "Spoken Language", "Auditory Processing", "Family Training"]
              },
              {
                icon: Users,
                title: "Parent Counseling",
                description: "Guidance and support for parents with home-based activities and progress tracking.",
                color: "from-orange-500 to-orange-600",
                benefits: ["Home Programs", "Progress Monitoring", "Family Support", "Educational Guidance"]
              },
              {
                icon: Activity,
                title: "Behavioral Support",
                description: "Specialized support for children with autism, ADHD, and learning difficulties.",
                color: "from-pink-500 to-pink-600",
                benefits: ["Social Skills", "Behavior Management", "Sensory Integration", "Group Therapy"]
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conditions We Specialize In</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert therapists provide specialized care for a wide range of speech, language, and hearing conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Speech Delays",
                description: "Late talking, unclear speech, pronunciation difficulties",
                image: "https://images.pexels.com/photos/8535211/pexels-photo-8535211.jpeg"
              },
              {
                title: "Language Disorders",
                description: "Difficulty understanding or using language appropriately",
                image: "https://images.pexels.com/photos/8535252/pexels-photo-8535252.jpeg"
              },
              {
                title: "Hearing Loss",
                description: "Conductive, sensorineural, or mixed hearing impairments",
                image: "https://images.pexels.com/photos/8535227/pexels-photo-8535227.jpeg"
              },
              {
                title: "Autism Spectrum",
                description: "Communication challenges related to autism spectrum disorders",
                image: "https://images.pexels.com/photos/8535236/pexels-photo-8535236.jpeg"
              }
            ].map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={condition.image} 
                    alt={condition.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{condition.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{condition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Elite Speech & Hearing Centre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Therapists",
                description: "Licensed and experienced speech-language pathologists and audiologists"
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Personalized treatment plans designed with empathy and understanding"
              },
              {
                icon: BookOpen,
                title: "Evidence-Based Methods",
                description: "Using the latest research-backed therapeutic techniques and approaches"
              },
              {
                icon: Users,
                title: "Family-Centered Approach",
                description: "Involving families in the therapy process for optimal outcomes"
              },
              {
                icon: Smile,
                title: "Child-Friendly Environment",
                description: "Creating a fun, engaging, and comfortable space for children"
              },
              {
                icon: Activity,
                title: "Progress Tracking",
                description: "Regular assessments and detailed progress reports for transparency"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Child's Journey to Better Communication</h2>
            <p className="text-xl text-green-100 mb-8">
              Take the first step towards improving your child's speech, language, and hearing abilities. 
              Schedule a comprehensive assessment with our expert therapists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Book Assessment
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer company="speech" />
    </div>
  );
};

export default SpeechHearing;