import { motion } from 'framer-motion'
import { Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Healthy Breakfast Recipes',
    excerpt: 'Start your day right with these nutritious and delicious breakfast ideas that will keep you energized throughout the morning.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800',
    author: 'Sarah Johnson',
    date: 'Nov 25, 2024',
    readTime: '5 min read',
    category: 'Breakfast'
  },
  {
    id: 2,
    title: 'Mediterranean Diet: A Complete Guide',
    excerpt: 'Discover the secrets of the Mediterranean diet and how it can transform your health with fresh ingredients and simple recipes.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    author: 'Michael Chen',
    date: 'Nov 22, 2024',
    readTime: '8 min read',
    category: 'Healthy Eating'
  },
  {
    id: 3,
    title: 'Quick & Easy Weeknight Dinners',
    excerpt: 'Busy schedule? These quick dinner recipes take 30 minutes or less and are perfect for hectic weeknights.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    author: 'Emma Davis',
    date: 'Nov 20, 2024',
    readTime: '6 min read',
    category: 'Quick Meals'
  },
  {
    id: 4,
    title: 'Mastering Homemade Pasta',
    excerpt: 'Learn the art of making fresh pasta from scratch with our step-by-step guide and pro tips.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    author: 'Marco Rossi',
    date: 'Nov 18, 2024',
    readTime: '10 min read',
    category: 'Italian Cuisine'
  },
  {
    id: 5,
    title: 'Vegan Desserts That Everyone Will Love',
    excerpt: 'Indulge in these plant-based desserts that are so delicious, no one will believe they\'re vegan!',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
    author: 'Lisa Anderson',
    date: 'Nov 15, 2024',
    readTime: '7 min read',
    category: 'Desserts'
  },
  {
    id: 6,
    title: 'Asian Street Food at Home',
    excerpt: 'Bring the flavors of Asian street markets to your kitchen with these authentic and easy-to-follow recipes.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
    author: 'David Kim',
    date: 'Nov 12, 2024',
    readTime: '9 min read',
    category: 'Asian Cuisine'
  }
]

const Blog = () => {
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
              Our <span className="text-recipe-yellow">Blog</span>
            </h1>
            <p className="text-recipe-gray text-lg max-w-2xl mx-auto">
              Discover recipes, cooking tips, and culinary inspiration from our food experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-recipe-green text-white px-4 py-1.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-recipe-text mb-3 group-hover:text-recipe-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-recipe-gray text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-recipe-gray">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-recipe-gray">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
