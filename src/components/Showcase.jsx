import { motion } from 'framer-motion'

const Showcase = () => {
  const screenshots = [
    { title: 'Dashboard', description: 'Real-time sensor data monitoring', image: '/assets/img/HOME.jpg' },
    { title: 'Device Control', description: 'Manual pump control & settings', image: '/assets/img/CONTROL.jpg' },
    { title: 'Schedules', description: 'Manage watering schedules', image: '/assets/img/SCHEDULE.jpg' },
    { title: 'EcoLearn', description: 'Learn smart gardening in ease', image: '/assets/img/ECOLEARN.jpg' },
  ]

  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            See EcoSprinkle in Action
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Watch how our smart irrigation system helps you monitor and care for your plants effortlessly
          </p>
        </motion.div>

        {/* Demo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/img/eco1.png"
              alt="EcoSprinkle App Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 rounded-lg aspect-[9/16] mb-4 flex items-center justify-center overflow-hidden">
                {screenshot.image ? (
                  <img
                    src={screenshot.image}
                    alt={`${screenshot.title} Screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl opacity-50">📱</div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
              <p className="text-sm opacity-80">{screenshot.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold mb-2">✓ QR Pairing</div>
            <p className="opacity-80">Easy device setup in seconds</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">✓ Live Data</div>
            <p className="opacity-80">Real-time sensor updates</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">✓ Auto Mode</div>
            <p className="opacity-80">Intelligent watering decisions</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase