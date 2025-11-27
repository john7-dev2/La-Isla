import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-2xl font-bold text-recipe-text">1food</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/categories" 
              className={`text-sm font-medium transition-colors ${
                isActive('/categories') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Contact
            </Link>
          </nav>

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
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block py-2 transition-colors ${
                isActive('/') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              onClick={closeMenu}
              className={`block py-2 transition-colors ${
                isActive('/blog') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`block py-2 transition-colors ${
                isActive('/about') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/categories" 
              onClick={closeMenu}
              className={`block py-2 transition-colors ${
                isActive('/categories') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`block py-2 transition-colors ${
                isActive('/contact') ? 'text-recipe-green' : 'text-recipe-text hover:text-recipe-green'
              }`}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
