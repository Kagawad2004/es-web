import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaCheckCircle, FaTint, FaClock, FaMoneyBillWave, FaLeaf } from 'react-icons/fa'

const ProblemSolution = () => {
  const problems = [
    {
      icon: <FaTint className="text-4xl" />,
      title: "Water Wastage",
      description: "Over-watering leads to 30-50% water waste, harming plants and the environment.",
      color: "from-red-500 to-red-500"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Time Consuming",
      description: "Manual watering takes valuable time and often happens at wrong schedules.",
      color: "from-red-500 to-red-500"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: "High Costs",
      description: "Inefficient irrigation increases water bills and maintenance expenses.",
      color: "from-red-500 to-red-500"
    }
  ]

  const solutions = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Smart Automation",
      description: "AI-powered watering based on real-time soil moisture and weather data.",
      stats: "50% Water Savings",
      color: "from-primary to-primary-dark"
    },
    {
      icon: <FaTint className="text-4xl" />,
      title: "Precision Control",
      description: "Water only when needed with accurate sensor readings and smart scheduling.",
      stats: "99% Accuracy",
      color: "from-primary to-primary-dark"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "24/7 Monitoring",
      description: "Remote control and real-time notifications from anywhere, anytime.",
      stats: "Always Connected",
      color: "from-primary to-primary-dark"
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              The Problem & Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
              Smart Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Traditional irrigation wastes resources and time. EcoSprinkle brings intelligent automation to save water, money, and your precious time.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-red-50 border-2 border-red-200 rounded-2xl px-6 py-3">
              <FaExclamationTriangle className="text-red-500 text-2xl" />
              <span className="text-red-700 font-bold text-lg">Current Problems</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="text-white">
                      {problem.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider with Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-full shadow-2xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-primary/10 border-2 border-primary rounded-2xl px-6 py-3">
              <FaCheckCircle className="text-primary text-2xl" />
              <span className="text-primary-dark font-bold text-lg">EcoSprinkle Solution</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark group-hover:bg-clip-text transition-all duration-300">
                    {solution.title}
                  </h3>
                  <p className="relative text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Stats Badge */}
                  <div className={`relative inline-flex items-center bg-gradient-to-r ${solution.color} text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                    {solution.stats}
                  </div>

                  {/* Check Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FaCheckCircle className="text-primary text-3xl" />
                  </div>

                  {/* Bottom Gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.color} rounded-b-3xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Ready to Save Water & Money?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl">
              Join thousands of smart gardeners using EcoSprinkle to optimize their irrigation
            </p>
            <a
              href="#download"
              className="group relative inline-flex items-center space-x-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 px-10 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started Free
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolution
