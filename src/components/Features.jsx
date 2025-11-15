import { FaLeaf, FaCalendarAlt, FaMobileAlt, FaMicrochip, FaLock, FaChartLine, FaWifi, FaBell } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Smart Irrigation',
      description: 'Real-time soil moisture monitoring with automated watering based on customizable thresholds',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: 'Scheduling & Automation',
      description: 'Multiple watering schedules with auto mode for intelligent watering decisions',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: 'Mobile Control',
      description: 'Real-time monitoring and control from anywhere with push notifications',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: 'IoT Hardware',
      description: 'ESP32-powered with DHT22 sensor, soil moisture sensor, and pump relay control',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: 'Security',
      description: 'JWT authentication, password encryption, and device-specific security keys',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs for activity logs and water usage tracking',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaWifi className="text-4xl" />,
      title: 'WiFi Provisioning',
      description: 'Easy device setup with QR code pairing and automatic reconnection',
     gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    },
    {
      icon: <FaBell className="text-4xl" />,
      title: 'Smart Alerts',
      description: 'Real-time notifications for plant health status and watering activities',
      gradient: 'from-emerald-500 to-green-600',
      glowColor: 'emerald'
    }
  ]

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <FaLeaf className="animate-pulse" />
            <span className="font-semibold">Key Features</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Everything You Need for
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
              Smart Plant Care
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive IoT solution combining hardware, software, and intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`inline-flex bg-gradient-to-br ${feature.gradient} text-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="text-2xl sm:text-3xl lg:text-4xl">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Border Animation */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: '💧', value: '50%', label: 'Water Savings', desc: 'vs traditional methods', gradient: 'from-blue-500 to-cyan-500' },
            { icon: '📱', value: '24/7', label: 'Remote Monitoring', desc: 'From anywhere', gradient: 'from-purple-500 to-pink-500' },
            { icon: '⚡', value: 'IoT', label: 'Powered Technology', desc: 'ESP32 + Sensors', gradient: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-500 mt-1">
                    {stat.desc}
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
