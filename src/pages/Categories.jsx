import { motion } from 'framer-motion'
import { ChefHat, Leaf, Coffee, Pizza, Cake, Fish, Soup, Salad } from 'lucide-react'

const categories = [
  {
    icon: ChefHat,
    name: 'Clean Eating',
    description: 'Wholesome recipes with fresh, natural ingredients',
    recipeCount: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
    color: 'bg-green-100'
  },
  {
    icon: Leaf,
    name: 'Vegan & Vegetarian',
    description: 'Plant-based dishes full of flavor and nutrition',
    recipeCount: 95,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600',
    color: 'bg-emerald-100'
  },
  {
    icon: Coffee,
    name: 'Breakfast & Brunch',
    description: 'Start your day with delicious morning meals',
    recipeCount: 78,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600',
    color: 'bg-amber-100'
  },
  {
    icon: Pizza,
    name: 'Italian Cuisine',
    description: 'Classic and modern Italian recipes',
    recipeCount: 85,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    color: 'bg-red-100'
  },
  {
    icon: Cake,
    name: 'Desserts & Baking',
    description: 'Sweet treats and baked goods for every occasion',
    recipeCount: 110,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600',
    color: 'bg-pink-100'
  },
  {
    icon: Fish,
    name: 'Seafood',
    description: 'Fresh fish and seafood recipes',
    recipeCount: 62,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523e?w=600',
    color: 'bg-blue-100'
  },
  {
    icon: Soup,
    name: 'Soups & Stews',
    description: 'Comforting bowls of warmth and flavor',
    recipeCount: 54,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
    color: 'bg-orange-100'
  },
  {
    icon: Salad,
    name: 'Salads',
    description: 'Fresh, crisp, and nutritious salad recipes',
    recipeCount: 72,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    color: 'bg-lime-100'
  }
]

const Categories = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-recipe-peach">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-recipe-text mb-6">
              Recipe <span className="text-recipe-yellow">Categories</span>
            </h1>
            <p className="text-recipe-gray text-lg max-w-2xl mx-auto">
              Explore our collection of recipes organized by cuisine, meal type, and dietary preferences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-square">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">{category.recipeCount} Recipes</span>
                        <category.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-recipe-text" />
                  </div>
                  <h3 className="text-xl font-bold text-recipe-text mb-2 group-hover:text-recipe-green transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-recipe-gray text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="text-recipe-green text-sm font-medium">
                    {category.recipeCount} recipes →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-recipe-peach">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-recipe-text mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-recipe-gray text-lg mb-8">
              Browse all our recipes or use the search to find exactly what you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-recipe-green hover:bg-recipe-green/90 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg"
              >
                Browse All Recipes
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-recipe-text text-recipe-text px-8 py-3.5 rounded-full font-medium text-sm hover:bg-recipe-text hover:text-white transition-all"
              >
                Search Recipes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Categories
