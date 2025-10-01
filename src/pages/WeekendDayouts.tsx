import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Camera, Music, Palette, 
  Users, Heart, Smile, Sun, Trees, Award, Activity
} from 'lucide-react';
import Footer from '../components/Footer';

const WeekendDayouts: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-48 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Space */}
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center mb-8">
                <img src='\ELITE DAYOUTS.jpg' alt='Logo' className="w-32 h-32 object-contain rounded-xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Elite Weekend
                <span className="block text-orange-300">Dayouts</span>
              </h1>
              <p className="text-xl text-yellow-100 mb-8">
                Creating magical weekend experiences for special children through safe, engaging, 
                and joyful outdoor adventures and enriching activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                </motion.div>
                <a 
                  href="#about" 
                  className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Our Activities
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Book Adventure
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
                src="https://img.freepik.com/free-photo/kid-playing-with-paper-plane_23-2151582205.jpg" 
                alt="Weekend Dayouts"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Weekend Adventure Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated activities designed to provide enriching experiences while ensuring safety and engagement for special children.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: "Nature Exploration",
                description: "Outdoor trips to parks, farms, gardens, and scenic locations with guided nature activities.",
                color: "from-green-500 to-green-600",
                activities: ["Park Visits", "Farm Tours", "Garden Walks", "Nature Crafts"]
              },
              {
                icon: Palette,
                title: "Creative Workshops",
                description: "Art, music, and craft activities that stimulate creativity and self-expression.",
                color: "from-purple-500 to-purple-600",
                activities: ["Art & Painting", "Music Sessions", "Craft Making", "Storytelling"]
              },
              {
                icon: Users,
                title: "Social Adventures",
                description: "Group activities designed to build friendships and improve social interaction skills.",
                color: "from-blue-500 to-blue-600",
                activities: ["Group Games", "Team Building", "Social Skills", "Friendship Activities"]
              },
              {
                icon: Activity,
                title: "Sensory Experiences",
                description: "Therapeutic recreation activities including movement, dance, and sensory play.",
                color: "from-pink-500 to-pink-600",
                activities: ["Sensory Play", "Movement Therapy", "Dance Activities", "Texture Exploration"]
              },
              {
                icon: Camera,
                title: "Adventure Photography",
                description: "Teaching children to capture memories while exploring new places and experiences.",
                color: "from-orange-500 to-orange-600",
                activities: ["Photo Sessions", "Memory Making", "Exploration", "Creative Expression"]
              },
              {
                icon: Sun,
                title: "International Trips",
                description: "Special organized international adventures for broader cultural exposure and experiences.",
                color: "from-yellow-500 to-yellow-600",
                activities: ["Cultural Tours", "International Experiences", "Educational Travel", "Global Adventures"]
              }
            ].map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                  <p className="text-gray-600 mb-6">{activity.description}</p>
                  <ul className="space-y-2">
                    {activity.activities.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
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

      {/* Special Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Special Programs & Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique themed events and seasonal programs that create lasting memories and foster personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Festival Celebrations",
                description: "Special celebration events during festivals with themed activities, cultural experiences, and community bonding.",
                image: "https://images.pexels.com/photos/8535315/pexels-photo-8535315.jpeg",
                highlights: ["Cultural Activities", "Traditional Games", "Festive Crafts", "Community Bonding"]
              },
              {
                title: "Talent Shows",
                description: "Platforms for children to showcase their unique abilities and talents in a supportive environment.",
                image: "https://images.pexels.com/photos/8535305/pexels-photo-8535305.jpeg",
                highlights: ["Performance Opportunities", "Skill Showcasing", "Confidence Building", "Recognition & Awards"]
              },
              {
                title: "Seasonal Camps",
                description: "Extended weekend programs during school holidays with immersive activities and learning experiences.",
                image: "https://images.pexels.com/photos/8535290/pexels-photo-8535290.jpeg",
                highlights: ["Extended Activities", "Skill Development", "New Friendships", "Personal Growth"]
              },
              {
                title: "Parent-Free Adventures",
                description: "Confidence-building sessions where children explore independently with trained caregivers.",
                image: "https://images.pexels.com/photos/8535285/pexels-photo-8535285.jpeg",
                highlights: ["Independence Building", "Confidence Growth", "Social Skills", "Self-Reliance"]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative mb-6">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{program.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Care */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety & Comprehensive Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your child's safety and well-being are our top priorities. We ensure every adventure is both exciting and secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Trained Caregivers",
                description: "Experienced staff trained in special needs care and emergency response procedures."
              },
              {
                icon: MapPin,
                title: "Safe Transportation",
                description: "Fully equipped vehicles with safety features and trained drivers for secure travel."
              },
              {
                icon: Users,
                title: "Small Group Ratios",
                description: "Low caregiver-to-child ratios ensuring personalized attention and supervision."
              },
              {
                icon: Activity,
                title: "Medical Support",
                description: "On-site medical assistance and emergency protocols for any health-related needs."
              },
              {
                icon: Smile,
                title: "Individual Care Plans",
                description: "Customized care approaches based on each child's specific needs and requirements."
              },
              {
                icon: Award,
                title: "Regular Communication",
                description: "Constant updates to parents with photos, videos, and progress reports throughout the day."
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Adventure Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glimpses of the joy, laughter, and unforgettable moments from our weekend adventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://img.freepik.com/free-photo/kid-playing-with-paper-plane_23-2151582205.jpg",
              "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg",
              "https://images.pexels.com/photos/8535320/pexels-photo-8535320.jpeg",
              "https://images.pexels.com/photos/8535310/pexels-photo-8535310.jpeg",
              "https://images.pexels.com/photos/8535295/pexels-photo-8535295.jpeg",
              "https://images.pexels.com/photos/8535300/pexels-photo-8535300.jpeg"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-xl"
              >
                <img 
                  src={image} 
                  alt={`Adventure ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Start Your Child's Adventure Journey</h2>
            <p className="text-xl text-yellow-100 mb-8">
              Give your child the gift of adventure, friendship, and unforgettable experiences. 
              Book their next weekend dayout and watch them discover the joy of exploration!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Book Adventure
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
                View Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer company="weekend" />
    </div>
  );
};

export default WeekendDayouts;