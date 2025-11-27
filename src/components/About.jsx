import { motion } from 'framer-motion'

const About = () => {
  const categories = [
    { name: 'Clean Eating', icon: '>' },
    { name: 'Family Friendly', icon: '>' },
    { name: 'Estopean', icon: '>' },
    { name: 'Cheap', icon: '>' },
    { name: 'Healthy', icon: '>' }
  ]

  return (
    <section id="categories" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-recipe-peach">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-recipe-text mb-8">
              Experience Food<br />
              of the <span className="text-recipe-yellow">Real Taste</span>
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-recipe-text mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between py-3 px-4 bg-white/50 rounded-lg cursor-pointer hover:bg-white/80 transition-all"
                  >
                    <span className="text-recipe-text font-medium">{category.name}</span>
                    <span className="text-recipe-text">{category.icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-recipe-gray text-sm leading-relaxed">
                Explore recipe vartious.cors here
              </p>
              <p className="text-recipe-gray text-sm leading-relaxed">
                See foodstuffs in here.be.ice.kes.kes.kes
              </p>
              <p className="text-recipe-gray text-sm leading-relaxed">
                Discover recipe with best quality and tasty
                recipes.
              </p>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-recipe-text text-recipe-text px-8 py-3 rounded-full font-medium text-sm hover:bg-recipe-text hover:text-white transition-all mt-4"
              >
                Learn more
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Circular Food Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-white shadow-2xl ring-8 ring-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" 
                  alt="Delicious Food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
