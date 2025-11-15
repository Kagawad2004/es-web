import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Feedback', href: '#feedback' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src="/assets/img/eslogo.png" 
              alt="EcoSprinkle Logo" 
              className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-display font-black">
              <span className={`${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>Eco</span>
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Sprinkle</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-white/50'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1V-Ywfg47kK5OC9ECsCtnTdMlE0fMj0w6/view?usp=sharing1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-2.5 px-6 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                Download App
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-primary bg-primary/10'
                  : 'text-primary bg-white/50'
              }`}
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
