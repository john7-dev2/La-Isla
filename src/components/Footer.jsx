import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-recipe-footer py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo Icon */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block bg-recipe-orange p-2.5 md:p-3 rounded-lg">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">La Isla Delhi</h3>
          <div className="space-y-1.5 md:space-y-2">
            <p className="text-white/80 text-sm md:text-base">
              🍸 Cocktail Bar & Global Cuisine
            </p>
            <p className="text-white/80 text-sm md:text-base">
              🌴 Where Tulum meets Delhi
            </p>
            <p className="text-white/80 text-sm md:text-base">
              ☕️ Artisanal coffee around the clock
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-recipe-orange flex items-center justify-center text-white transition-all"
          >
            <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-recipe-orange flex items-center justify-center text-white transition-all"
          >
            <Facebook size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-recipe-orange flex items-center justify-center text-white transition-all"
          >
            <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-recipe-orange flex items-center justify-center text-white transition-all"
          >
            <Youtube size={16} className="md:w-[18px] md:h-[18px]" />
          </motion.a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 text-xs md:text-sm">
          <a href="#menu" className="text-white/70 hover:text-white transition-colors">Menu</a>
          <a href="#cocktails" className="text-white/70 hover:text-white transition-colors">Cocktails</a>
          <a href="#events" className="text-white/70 hover:text-white transition-colors">Events</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center">
          <p className="text-white/50 text-xs md:text-sm">
            Terms and Condition - Privacy Policy
          </p>
          <p className="text-white/50 text-xs mt-2">
            © 2024 La Isla Delhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
