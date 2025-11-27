import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-recipe-text mb-6 leading-tight">
              DISCOVER<br />
              SIMPLE &<br />
              <span className="text-recipe-yellow">TASTY RECIPES</span>
            </h1>
            
            <p className="text-recipe-gray text-base sm:text-lg mb-8 max-w-md">
              Explore in-real ways,pies into a stable Strinker.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-recipe-green hover:bg-recipe-green/90 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg"
              >
                Explore Ideas
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-recipe-yellow hover:bg-recipe-yellow/90 text-recipe-text px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg"
              >
                View all categories
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Green Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full border-[20px] sm:border-[30px] md:border-[40px] border-recipe-green"></div>
              </div>
              
              {/* Salad Image */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden bg-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" 
                    alt="Fresh Salad" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
