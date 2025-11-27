import { motion } from 'framer-motion'
import { Heart, Users, Award, Target } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion for Food',
    description: 'We believe in creating recipes with love and dedication, bringing joy to every meal.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a community of food lovers who share, learn, and grow together.'
  },
  {
    icon: Award,
    title: 'Quality Recipes',
    description: 'Every recipe is tested and perfected to ensure the best results for your kitchen.'
  },
  {
    icon: Target,
    title: 'Simple & Tasty',
    description: 'Making cooking accessible with easy-to-follow recipes that deliver amazing flavors.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Head Chef & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'With 15 years of culinary experience, Sarah brings creativity and expertise to every recipe.'
  },
  {
    name: 'Michael Chen',
    role: 'Recipe Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Michael specializes in Asian fusion cuisine and healthy meal planning.'
  },
  {
    name: 'Emma Davis',
    role: 'Food Photographer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Emma captures the beauty of food, making every dish look as good as it tastes.'
  }
]

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-recipe-peach">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-recipe-text mb-6">
              About <span className="text-recipe-yellow">1food</span>
            </h1>
            <p className="text-recipe-gray text-lg max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make cooking simple, enjoyable, and accessible for everyone. 
              From quick weeknight dinners to special occasion feasts, we're here to inspire your culinary journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-recipe-text mb-6">
                Our <span className="text-recipe-green">Story</span>
              </h2>
              <div className="space-y-4 text-recipe-gray leading-relaxed">
                <p>
                  Founded in 2020, 1food started as a small blog sharing family recipes and has grown into 
                  a thriving community of food enthusiasts from around the world.
                </p>
                <p>
                  What began in a home kitchen has evolved into a comprehensive resource for home cooks 
                  of all skill levels. We believe that great food doesn't have to be complicated, and 
                  everyone deserves access to delicious, nutritious meals.
                </p>
                <p>
                  Today, we're proud to serve millions of home cooks with tested recipes, cooking tips, 
                  and culinary inspiration that makes everyday cooking a joy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                  alt="Our Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-recipe-peach">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-recipe-text mb-4">
              Our <span className="text-recipe-yellow">Values</span>
            </h2>
            <p className="text-recipe-gray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-recipe-green/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-recipe-green" />
                </div>
                <h3 className="text-xl font-bold text-recipe-text mb-3">
                  {value.title}
                </h3>
                <p className="text-recipe-gray text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-recipe-text mb-4">
              Meet Our <span className="text-recipe-green">Team</span>
            </h2>
            <p className="text-recipe-gray max-w-2xl mx-auto">
              The passionate people behind your favorite recipes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-8 ring-gray-100 group-hover:ring-recipe-green/20 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-recipe-text mb-2">
                  {member.name}
                </h3>
                <p className="text-recipe-green font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-recipe-gray text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
