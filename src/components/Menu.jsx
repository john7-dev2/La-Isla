import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-recipe-text mb-4">
            LET'S CONNECT WITH US
          </h2>
          <p className="text-recipe-gray text-sm sm:text-base">
            supportive for the bets update
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:flex-1 px-6 py-3.5 rounded-full border-2 border-gray-300 focus:border-recipe-green focus:outline-none text-sm"
          />
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-recipe-yellow hover:bg-recipe-yellow/90 text-recipe-text px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
