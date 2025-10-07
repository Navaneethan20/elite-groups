import React from 'react';
import { motion } from 'framer-motion';
import { 
   Heart, Users, Activity, Target, 
  Award, Zap, Smile,  Star
} from 'lucide-react';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const SportsAcademy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-48 bg-gradient-to-br from-orange-800 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Space */}
              <div className="w-32 h-18 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center mb-8">
                <img src='\ELITE SPORTS.jpg' alt='Logo' className="w-32 h-18 object-contain rounded-xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Elite Sports
                <span className="block text-yellow-400">Academy</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Empowering special children through inclusive sports programs that promote physical, 
                mental, and social development in a supportive environment.
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
                  className="px-8 py-4 bg-white text-orange-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Our Programs
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 bg-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Enroll Now
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
                src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg" 
                alt="Sports Academy"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
        <a
          href="https://chat.whatsapp.com/L8kfoF42zgnDhlQp7fbD7s"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-8 bg-green-500 font-semibold text-black rounded-full px-5 py-4 shadow-lg flex items-center gap-2 hover:bg-green-600 border border-black transition-all z-50 sm:px-5 sm:py-4 sm:text-base sm:gap-2
             px-3 py-2 text-sm gap-1 sm:shadow-lg"
        >
            <FaWhatsapp size={24} />
            <span className="hidden sm:inline">
              Join Group
            </span>
        </a>
      </section>

      {/* Programs Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Sports Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored athletic programs designed specifically for children with special needs, focusing on individual growth and achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Adaptive Physical Education",
                description: "Customized PE programs for children with autism, ADHD, cerebral palsy, and learning differences.",
                color: "from-orange-500 to-orange-600",
                activities: ["Modified Sports", "Motor Skills", "Coordination", "Balance Training"]
              },
              {
                icon: Target,
                title: "Indoor Sports Training",
                description: "Safe indoor activities including table tennis, bowling, basketball shooting, and skill-building games.",
                color: "from-yellow-500 to-yellow-600",
                activities: ["Table Tennis", "Bowling", "Basketball", "Skill Games"]
              },
              {
                icon: Zap,
                title: "Outdoor Adventure Sports",
                description: "Engaging outdoor activities including athletics, cycling, relay races, and nature-based games.",
                color: "from-red-500 to-red-600",
                activities: ["Athletics", "Cycling", "Relay Races", "Nature Games"]
              },
              {
                icon: Heart,
                title: "Yoga & Wellness",
                description: "Mindfulness and physical wellness programs including yoga, meditation, and relaxation techniques.",
                color: "from-green-500 to-green-600",
                activities: ["Kids Yoga", "Breathing Exercises", "Relaxation", "Mindfulness"]
              },
              {
                icon: Users,
                title: "Team Building Sports",
                description: "Group activities designed to build social skills, teamwork, and confidence through collaborative play.",
                color: "from-blue-500 to-blue-600",
                activities: ["Group Games", "Team Sports", "Social Skills", "Cooperation"]
              },
              {
                icon: Smile,
                title: "Sensory Integration Activities",
                description: "Specialized programs that help children process sensory information through movement and play.",
                color: "from-purple-500 to-purple-600",
                activities: ["Sensory Play", "Movement Therapy", "Integration Exercises", "Fun Activities"]
              }
            ].map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Support */}
      <section className="py-20 bg-white relative overflow-hidden ">
        <video preload="auto"  className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://cdn.pixabay.com/video/2019/05/22/23881-337972830_tiny.mp4" // Replace with your video URL or local path
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">  
            <h2 className="text-4xl font-bold text-white mb-6">Children We Support</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our inclusive programs are designed to support children with various special needs and developmental conditions.
            </p>
          </div>  
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-white">
            {[
              {
                title: "Autism Spectrum Disorder",
                description: "Structured activities that support social interaction and communication skills.",
                image: "https://images.pexels.com/photos/8535319/pexels-photo-8535319.jpeg",
                color: "bg-blue-100"
              },
              {
                title: "ADHD",
                description: "High-energy activities that help improve focus and self-regulation skills.",
                image: "https://images.pexels.com/photos/8535260/pexels-photo-8535260.jpeg",
                color: "bg-green-100"
              },
              {
                title: "Cerebral Palsy",
                description: "Adaptive sports programs that work within each child's physical capabilities.",
                image: "https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg",
                color: "bg-purple-100"
              },
              {
                title: "Learning Differences",
                description: "Multi-sensory approaches that accommodate different learning styles and abilities.",
                image: "https://images.pexels.com/photos/8535295/pexels-photo-8535295.jpeg",
                color: "bg-orange-100"
              }
            ].map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${condition.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={condition.image} 
                    alt={condition.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{condition.title}</h3>
                <p className="text-sm text-gray-600">{condition.description}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our specialized sports programs contribute to the overall development and well-being of special children.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Physical Health",
                description: "Improved strength, coordination, balance, and overall fitness through adapted physical activities.",
                benefits: ["Better Motor Skills", "Increased Strength", "Enhanced Coordination", "Improved Balance"]
              },
              {
                icon: Smile,
                title: "Mental Well-being",
                description: "Boosted self-esteem, reduced anxiety, and improved mood through achievement and success.",
                benefits: ["Higher Self-Esteem", "Reduced Stress", "Improved Mood", "Better Focus"]
              },
              {
                icon: Users,
                title: "Social Development",
                description: "Enhanced social skills, teamwork abilities, and meaningful peer relationships.",
                benefits: ["Social Skills", "Teamwork", "Friendships", "Communication"]
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Special Events & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular events and special activities that bring our community together and celebrate achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Annual Sports Meet",
                description: "A celebration of achievements with adapted competitive events, awards, and family participation.",
                image: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
                features: ["Adapted Competitions", "Achievement Awards", "Family Participation", "Celebration Events"]
              },
              {
                title: "Seasonal Workshops",
                description: "Special seasonal activities and workshops that keep children engaged throughout the year.",
                image: "https://images.pexels.com/photos/8535299/pexels-photo-8535299.jpeg",
                features: ["Seasonal Themes", "Special Activities", "Skill Building", "Fun Learning"]
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="relative mb-6">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {event.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Inclusive Sports Community</h2>
            <p className="text-xl text-orange-100 mb-8">
              Give your child the opportunity to grow, learn, and thrive through adaptive sports and physical activities. 
              Join our supportive community today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://wa.me/9791007729?text=I%20want%20to%20enroll%20my%20child' target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                <FaWhatsapp className="w-6 h-6 inline-block mr-2 " />
                Enroll Your Child
              </a>
              <a href='tel:9705465342' className="px-8 py-4 bg-white/10 bg-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
                Schedule Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer company="sports" />
    </div>
  );
};

export default SportsAcademy;