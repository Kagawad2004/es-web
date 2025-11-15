import { FaAndroid, FaApple, FaDownload, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Download = () => {
  const appDownloadUrl = 'https://drive.google.com/file/d/1V-Ywfg47kK5OC9ECsCtnTdMlE0fMj0w6/view?usp=sharing'
  const githubUrl = 'https://github.com/Kagawad2004/ecosprinkle'

  const handleDownload = () => {
    window.open(appDownloadUrl, '_blank')
  }

  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <FaDownload />
            <span className="font-semibold">Download App</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Get Started with
            <span className="text-primary"> EcoSprinkle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download the mobile app and start monitoring your plants in minutes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* App Preview Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl shadow-2xl inline-block">
              {/* Main App Screenshot */}
              <div className="relative z-10">
                <img 
                  src="/assets/img/qr-code.png" // Update with your app screenshot
                  alt="EcoSprinkle Mobile App"
                  className="w-64 h-auto mx-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* App Logo Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow-lg">
                {/* Optional: Add app logo here */}
              </div>
            </div>
          </motion.div>

          {/* Download Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">App Information</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-semibold">1.0.0+1</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-semibold">~50 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Requires:</span>
                  <span className="font-semibold">Android 6.0+ / iOS 12.0+</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="font-semibold">January 2024</span>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center space-x-3 bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full"
              >
                <FaAndroid className="text-2xl" />
                <span>Download for Android (APK)</span>
              </button>
              
              <button
                disabled
                className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-black text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl opacity-90 hover:opacity-100 w-full cursor-not-allowed"
              >
                <FaApple className="text-2xl" />
                <span>Coming Soon to iOS</span>
              </button>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gray-700 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-2xl" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                
             
              </div>
              <div className="text-center">
               
            
              </div>
              <div className="text-center">
               
              </div>
            </div>
          </motion.div>
        </div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Installation Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Download APK</h4>
              <p className="text-gray-600 text-sm">
                Click the download button or scan the QR code above
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Install App</h4>
              <p className="text-gray-600 text-sm">
                Enable "Install from unknown sources" if needed
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Start Monitoring</h4>
              <p className="text-gray-600 text-sm">
                Create account and pair your device
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download