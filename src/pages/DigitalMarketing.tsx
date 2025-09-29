import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Search, Facebook, Instagram, Youtube, Mail, 
  BarChart, Users, Zap, Target, TrendingUp, Smartphone
} from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-48 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Space */}
              <div className="w-16 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-8">
                <img src='public\ELITE DM.jpg' alt='Logo' className="w-16 h-18 object-contain rounded-xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Elite Digital{' '}
                <span className="inline-block bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Transform your brand's online presence with data-driven strategies, 
                creative campaigns, and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all cursor-pointer"
                >
                  Our Services
                </a>
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
                >
                  View Portfolio
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
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg" 
                alt="Digital Marketing"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Solutions That Drive Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social media management to SEO optimization, we offer comprehensive digital marketing services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Facebook,
                title: "Social Media Marketing",
                description: "Strategic campaigns across Instagram, Facebook, LinkedIn, YouTube, and more platforms.",
                color: "from-blue-500 to-blue-600",
                features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"]
              },
              {
                icon: Search,
                title: "Search Engine Optimization",
                description: "Improve your Google rankings and organic visibility with proven SEO strategies.",
                color: "from-green-500 to-green-600",
                features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]
              },
              {
                icon: Target,
                title: "Google Ads & PPC",
                description: "Targeted paid advertising campaigns for immediate reach and conversions.",
                color: "from-yellow-500 to-yellow-600",
                features: ["Campaign Setup", "Bid Management", "Ad Optimization", "ROI Tracking"]
              },
              {
                icon: Zap,
                title: "Branding & Creative",
                description: "Logo design, creative assets, posts, videos, and reels that capture attention.",
                color: "from-purple-500 to-purple-600",
                features: ["Logo Design", "Brand Guidelines", "Video Production", "Graphic Design"]
              },
              {
                icon: Smartphone,
                title: "Website Development",
                description: "Responsive business websites, landing pages, and portfolio sites that convert.",
                color: "from-pink-500 to-pink-600",
                features: ["Responsive Design", "E-commerce", "CMS Integration", "Speed Optimization"]
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Automated email campaigns and WhatsApp marketing for lead generation.",
                color: "from-red-500 to-red-600",
                features: ["Email Automation", "WhatsApp Campaigns", "Lead Nurturing", "A/B Testing"]
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
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped brands achieve remarkable growth through strategic digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "TechStartup Inc",
                industry: "Technology",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
                results: [
                  { metric: "Website Traffic", increase: "300%" },
                  { metric: "Social Followers", increase: "150%" },
                  { metric: "Lead Generation", increase: "250%" },
                  { metric: "Conversion Rate", increase: "180%" }
                ]
              },
              {
                company: "Fashion Boutique",
                industry: "E-commerce",
                image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
                results: [
                  { metric: "Online Sales", increase: "400%" },
                  { metric: "Brand Awareness", increase: "200%" },
                  { metric: "Customer Engagement", increase: "350%" },
                  { metric: "ROI", increase: "275%" }
                ]
              }
            ].map((case_study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="relative mb-6">
                  <img 
                    src={case_study.image} 
                    alt={case_study.company}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{case_study.company}</h3>
                    <p className="text-sm opacity-90">{case_study.industry}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {case_study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        +{result.increase}
                      </div>
                      <p className="text-sm text-gray-600">{result.metric}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              A systematic approach to digital marketing that delivers consistent results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Analysis",
                description: "Deep dive into your business goals, target audience, and competitive landscape.",
                icon: BarChart
              },
              {
                step: "02",
                title: "Creative Development",
                description: "Design compelling campaigns and content that resonates with your audience.",
                icon: Zap
              },
              {
                step: "03",
                title: "Campaign Launch",
                description: "Execute multi-channel campaigns with precision timing and targeting.",
                icon: Target
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Monitor performance, optimize for better results, and scale successful campaigns.",
                icon: TrendingUp
              }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-lg font-bold">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-purple-100">{process.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Dominate Digital?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a digital marketing strategy that transforms your online presence and drives real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all cursor-pointer">
                Start Your Campaign
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all cursor-pointer">
                Free Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;