import { motion } from 'framer-motion'

const About = () => {
  const categories = [
    {
      name: 'Sip & Paint',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400'
    },
    {
      name: 'Workshop',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400'
    },
    {
      name: 'Live Music',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400'
    },
    {
      name: 'Cocktails',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400'
    },
    {
      name: 'Espresso Bar',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
    },
    {
      name: 'Private Parties',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400'
    }
  ]

  return (
    <section id="events" className="py-12 md:py-20 px-0 md:px-4 lg:px-8 bg-recipe-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <div className="w-16 h-0.5 bg-recipe-orange mx-auto mb-4 md:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-recipe-text mb-2">
            Explore <span className="text-recipe-orange">Experiences</span>
          </h2>
          <p className="text-recipe-gray text-sm sm:text-base mt-3 md:mt-4">
            From cocktails to coffee, live music to art workshops
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide px-4">
          <div className="flex gap-4 pb-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-32 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-3 border-4 border-white shadow-xl ring-2 ring-recipe-orange/20">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 right-0 bg-recipe-orange text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    ✨
                  </div>
                </div>
                <h3 className="text-xs font-semibold text-recipe-text text-center leading-tight">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto px-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:shadow-xl transition-all">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-recipe-text text-center">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
