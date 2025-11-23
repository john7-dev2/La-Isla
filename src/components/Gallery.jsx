import { motion } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    title: 'Exquisite Recipe',
    // ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600',
    title: 'Cookie Therapy',
    // ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    title: 'Exquisite Diner Recipe',
    // ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-recipe-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="w-16 h-0.5 bg-recipe-orange mx-auto mb-4 md:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-recipe-text mb-2">
            Our <span className="text-recipe-orange">Gallery</span>
          </h2>
          <p className="text-recipe-gray text-sm sm:text-base mt-3">
            Moments from La Isla Delhi
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
            >
              {/* Follow Button */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
                <button className="bg-recipe-blue text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium hover:bg-recipe-blue/90 transition-all shadow-lg">
                  Follow
                </button>
              </div>
              
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Mobile: Gradient Overlay */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-3 md:p-6">
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-recipe-text mb-1 md:mb-3 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-recipe-gray line-clamp-2 md:line-clamp-none">
                  <span className="font-semibold hidden md:inline">Ingredients:</span> {item.ingredients}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
