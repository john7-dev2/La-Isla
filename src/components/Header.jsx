import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ opacity: 0.8 }}
            className="flex items-center gap-2"
          >
            <span className="text-3xl font-bold text-recipe-text">La Isla</span>
            <span className="text-3xl font-bold text-recipe-orange">Delhi</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-sm text-recipe-text hover:text-recipe-orange transition-colors font-medium">Menu</a>
            <a href="#cocktails" className="text-sm text-recipe-text hover:text-recipe-orange transition-colors font-medium">Cocktails</a>
            <a href="#events" className="text-sm text-recipe-text hover:text-recipe-orange transition-colors font-medium">Events</a>
            <a href="#gallery" className="text-sm text-recipe-text hover:text-recipe-orange transition-colors font-medium">Gallery</a>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-recipe-blue hover:bg-recipe-blue/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Reserve Table
          </motion.button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-recipe-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-4">
            <a href="#menu" className="block text-recipe-text hover:text-recipe-orange transition-colors py-2">Menu</a>
            <a href="#cocktails" className="block text-recipe-text hover:text-recipe-orange transition-colors py-2">Cocktails</a>
            <a href="#events" className="block text-recipe-text hover:text-recipe-orange transition-colors py-2">Events</a>
            <a href="#gallery" className="block text-recipe-text hover:text-recipe-orange transition-colors py-2">Gallery</a>
            <button className="block w-full bg-recipe-blue text-white px-6 py-3 rounded-full text-center font-medium mt-4">
              Reserve Table
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
