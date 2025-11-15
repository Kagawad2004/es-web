import { FaLeaf, FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaLeaf className="text-primary text-3xl" />
              <span className="text-2xl font-display font-bold">
                Eco<span className="text-primary">Sprinkle</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              An intelligent IoT-based automated plant watering system. 
              Smart irrigation for healthier plants and water conservation.
            </p>
             <p className="text-gray-400 mb-4">
              Assumption College of Davao 
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kagawad2004/ecosprinkle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:contact@ecosprinkle.com"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#tech" className="text-gray-400 hover:text-primary transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-primary transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Kagawad2004/ecosprinkle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Setup Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} EcoSprinkle. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Made by{' '}
          <a 
            href="https://www.facebook.com/profile.php?id=100074828277737" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            GeneSix
          </a>{' '}
          for a sustainable future
        </div>
      </div>
    </footer>
  )
}

export default Footer