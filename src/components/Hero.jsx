import { FaMobileAlt, FaPlay, FaCheckCircle, FaWater, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [soilMoisture, setSoilMoisture] = useState(0)
  const [lastIrrigation, setLastIrrigation] = useState(0)
  const [batteryLevel, setBatteryLevel] = useState(0)

  useEffect(() => {
    // Soil Moisture - 1 per second (45% total)
    const soilInterval = setInterval(() => {
      setSoilMoisture(prev => {
        if (prev >= 45) {
          clearInterval(soilInterval)
          return 45
        }
        return prev + 1
      })
    }, 1000)

    // Last Irrigation - 100ms per increment (180 total for 3:00)
    const irrigationInterval = setInterval(() => {
      setLastIrrigation(prev => {
        if (prev >= 180) { // 3 hours * 60 minutes = 180
          clearInterval(irrigationInterval)
          return 180
        }
        return prev + 1
      })
    }, 100)

    // Battery Level - 1 per second (60% total)
    const batteryInterval = setInterval(() => {
      setBatteryLevel(prev => {
        if (prev >= 60) {
          clearInterval(batteryInterval)
          return 60
        }
        return prev + 1
      })
    }, 1000)

    return () => {
      clearInterval(soilInterval)
      clearInterval(irrigationInterval)
      clearInterval(batteryInterval)
    }
  }, [])

  // Format last irrigation time from minutes to "X:XX pm" format
  const formatLastIrrigation = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    const period = hours >= 12 ? 'pm' : 'am'
    const displayHours = hours > 12 ? hours - 12 : hours
    return `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`
  }

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 via-blue-50 to-white"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm"
            >
              <img src="/assets/img/eslogo.png" alt="EcoSprinkle" className="w-5 h-5 object-contain animate-pulse" />
              <span className="font-semibold tracking-wide text-sm">
                IoT Smart Irrigation System
              </span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-gray-900 leading-[1.1] mb-6">
              Water Smarter,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                Grow Better
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
              Transform your plant care with real-time monitoring and automated watering. 
              <span className="font-semibold text-gray-700"> Save more  water</span> while keeping your plants perfectly hydrated.
            </p>

            {/* Key Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 md:mb-8">
              {[
                { icon: FaWater, text: 'Real-time Monitoring' },
                { icon: FaCheckCircle, text: 'Auto Watering' },
                { icon: FaClock, text: 'Smart Scheduling' },
                { icon: FaMobileAlt, text: 'Remote Control' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-primary text-xs sm:text-sm" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a 
                href="#download" 
                className="group relative inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaMobileAlt className="relative z-10 text-sm sm:text-base" />
                <span className="relative z-10 text-sm sm:text-base">Download App</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Phone Mockup */}
            <div className="relative z-10">
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {/* Phone Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold">9:41 AM</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-white/30 rounded-sm"></div>
                      <div className="w-4 h-4 bg-white/30 rounded-sm"></div>
                      <div className="w-4 h-4 bg-white/30 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">My Garden</h3>
                        <p className="text-sm text-gray-500">Last updated: Just now</p>
                      </div>
                      <img src="/assets/img/eslogo.png" alt="EcoSprinkle" className="w-12 h-12 object-contain" />
                    </div>

                    {/* Soil Moisture Card */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-2xl p-6 text-white shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium opacity-90">Soil Moisture</span>
                        <FaWater className="text-2xl opacity-80" />
                      </div>
                      <div className="text-5xl font-black mb-2">{soilMoisture}%</div>
                      <div className="flex items-center justify-between text-sm opacity-90">
                        <span>Perfect Level</span>
                        <FaCheckCircle />
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${soilMoisture}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-white rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div className="text-3xl font-bold text-blue-700">
                          {formatLastIrrigation(lastIrrigation)}
                        </div>
                        <div className="text-xs text-blue-600 font-medium mt-1">Last Irrigation</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border border-cyan-200">
                        <div className="text-3xl font-bold text-cyan-700">{batteryLevel}%</div>
                        <div className="text-xs text-cyan-600 font-medium mt-1">Battery Level</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                      <FaWater />
                      <span>Water Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-primary text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Status</div>
                  <div className="text-sm font-bold text-gray-900">Online</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaWater className="text-secondary text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Saved</div>
                  <div className="text-sm font-bold text-gray-900">120L</div>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl -z-10 transform scale-110"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero