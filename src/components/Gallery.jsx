import { motion } from 'framer-motion'
import { Clock, Users } from 'lucide-react'

const recipeItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
    title: 'Avocado Tuna Salad',
    tag: 'Veg, food, fresh'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    title: 'Spanish Cauliflower Rice',
    tag: 'Veg, food, fresh'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
    title: 'Asian Marinated Chicken Leg',
    tag: 'Veg, food, fresh'
  }
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-recipe-text mb-2">
            Latest On Collection
          </h2>
        </motion.div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {recipeItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative mb-6">
                <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden bg-white shadow-xl ring-8 ring-gray-100 mx-auto group-hover:ring-recipe-green/20 transition-all duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-recipe-text mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-recipe-gray mb-3">
                  <Clock size={16} />
                  <span>{item.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
