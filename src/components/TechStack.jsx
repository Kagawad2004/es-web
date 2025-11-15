import { FaReact, FaNodeJs, FaDatabase, FaMicrochip, FaMobile } from 'react-icons/fa'
import { SiFlutter, SiMongodb, SiExpress, SiMqtt, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'

const TechStack = () => {
  const techStack = {
    frontend: {
      title: 'Mobile App',
      icon: <FaMobile className="text-5xl text-blue-500" />,
      technologies: [
        { name: 'Flutter/Dart', icon: <SiFlutter className="text-3xl text-blue-400" />, description: 'Cross-platform development' },
        { name: 'MQTT Client', icon: <SiMqtt className="text-3xl text-purple-500" />, description: 'Real-time IoT communication' },
        { name: 'Socket.IO', icon: <FaDatabase className="text-3xl text-green-500" />, description: 'WebSocket connections' },
        { name: 'FL Chart', icon: <FaMobile className="text-3xl text-orange-500" />, description: 'Data visualization' },
      ]
    },
    backend: {
      title: 'Backend Server',
      icon: <FaNodeJs className="text-5xl text-green-600" />,
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-600" />, description: 'Runtime environment' },
        { name: 'Express.js', icon: <SiExpress className="text-3xl text-gray-700" />, description: 'Web framework' },
        { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-500" />, description: 'NoSQL database' },
        { name: 'MQTT Broker', icon: <SiMqtt className="text-3xl text-purple-500" />, description: 'IoT messaging' },
      ]
    },
    hardware: {
      title: 'IoT Hardware',
      icon: <FaMicrochip className="text-5xl text-orange-500" />,
      technologies: [
        { name: 'ESP32', icon: <FaMicrochip className="text-3xl text-blue-600" />, description: 'Microcontroller' },
        { name: 'Soil Sensor', icon: <FaMicrochip className="text-3xl text-amber-700" />, description: 'Moisture monitoring' },
        { name: 'Relay Module', icon: <FaMicrochip className="text-3xl text-purple-600" />, description: 'Pump control' },
      ]
    }
  }

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <FaMicrochip />
            <span className="font-semibold">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Built with Modern
            <span className="text-primary"> Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful combination of IoT hardware, mobile development, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(techStack).map(([key, stack], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center mb-6">
                {stack.icon}
                <h3 className="text-2xl font-bold text-gray-900 mt-4">{stack.title}</h3>
              </div>
              <div className="space-y-4">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">System Architecture</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 text-center">
            <div className="bg-orange-500 rounded-xl p-6 min-w-[200px]">
              <FaMicrochip className="text-4xl mx-auto mb-2" />
              <div className="font-bold">ESP32 Firmware</div>
              <div className="text-sm opacity-80">Sensors + Pump</div>
            </div>
            <div className="text-3xl">↔</div>
            <div className="bg-purple-500 rounded-xl p-6 min-w-[200px]">
              <SiMqtt className="text-4xl mx-auto mb-2" />
              <div className="font-bold">MQTT Broker</div>
              <div className="text-sm opacity-80">WiFi Connection</div>
            </div>
            <div className="text-3xl">↔</div>
            <div className="bg-green-600 rounded-xl p-6 min-w-[200px]">
              <FaNodeJs className="text-4xl mx-auto mb-2" />
              <div className="font-bold">Node.js Backend</div>
              <div className="text-sm opacity-80">+ MongoDB</div>
            </div>
            <div className="text-3xl">↔</div>
            <div className="bg-blue-500 rounded-xl p-6 min-w-[200px]">
              <SiFlutter className="text-4xl mx-auto mb-2" />
              <div className="font-bold">Flutter App</div>
              <div className="text-sm opacity-80">HTTP + WebSocket</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
