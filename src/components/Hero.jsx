import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-20">
      {/* Food Images Background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-8">
        {/* Left side food images */}
        <div className="space-y-2 md:space-y-4">
          <div className="h-40 md:h-64 rounded-xl md:rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" 
              alt="Food" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-32 md:h-48 rounded-xl md:rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" 
              alt="Food" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Right side food images */}
        <div className="space-y-2 md:space-y-4 pt-0 md:pt-12 hidden md:block">
          <div className="h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" 
              alt="Food" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800" 
              alt="Food" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* White Card Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-recipe-orange mx-auto mb-6"></div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-recipe-text mb-4 md:mb-6 leading-tight">
            <span className="text-4xl sm:text-5xl md:text-6xl">🍸</span><br className="md:hidden" />
            <span className="block mt-2">Cocktail Bar &</span>
            <span className="text-recipe-orange block">Global Cuisine</span>
          </h1>
          
          {/* Description */}
          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            <p className="text-recipe-gray text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              <span className="text-xl sm:text-2xl">🌴</span> Where Tulum meets Delhi
            </p>
            <p className="text-recipe-gray text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              <span className="text-lg sm:text-xl">☕️</span> Artisanal coffee around the clock
            </p>
          </div>
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-recipe-orange hover:bg-recipe-orange/90 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Explore Menu
          </motion.button>
          
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-recipe-orange mx-auto mt-6"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
