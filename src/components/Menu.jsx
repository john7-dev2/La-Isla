import { motion } from 'framer-motion'

const menuItems = [
  {
    name: 'PICANTE',
    description: 'Spicy and Refreshing Drink With Tequila and Spices With Bold Flavour',
    price: '980'
  },
  {
    name: 'MARGARITA',
    description: '(Lime / Peach / Watermelon)',
    price: '980'
  },
  {
    name: 'BLOODY MARY',
    description: '',
    price: '860'
  },
  {
    name: 'CAPRIOSKA',
    description: '(Classic/Watermelon)',
    price: '870'
  },
  {
    name: 'PINA COLADA',
    description: '',
    price: '910'
  },
  {
    name: 'MOJITO',
    description: '(Classic/Watermelon)',
    price: '940'
  },
  {
    name: 'DAIQUIRI',
    description: '',
    price: '940'
  },
  {
    name: 'MARTINI/SOUTHSIDE/GIMLET',
    description: '(Classic / Kiwi/ Lychee/ Cucumber)',
    price: '940'
  },
  {
    name: 'MINT JULEP',
    description: 'Bourbon whisky, Simple syrup with fresh mint',
    price: '860'
  },
  {
    name: 'WHISKY SOUR / OLD FASHIONED',
    description: '',
    price: '890'
  },
  {
    name: 'BELLINI',
    description: 'Sparkling Wine and Peach Schnapps',
    price: '980'
  },
  {
    name: 'MIMOSA',
    description: 'Sparkling Wine And Orange Juice',
    price: '980'
  },
  {
    name: 'APEROL SPITZER',
    description: 'Aperol Liquer With Sparkling Wine',
    price: '980'
  },
  {
    name: 'SANGRIA',
    description: 'An Exotic Concoction of Red Wine Wine With Fresh Fruits',
    price: '980'
  },
  {
    name: 'LONG ISLAND ICED TEA',
    description: 'All Time Favorite',
    price: '1010'
  },
  {
    name: 'SHOOTERS',
    description: 'Kamikaze & Lemon Drop',
    price: '430'
  },
  {
    name: 'BEER',
    description: 'King Fisher Ultra',
    price: '620'
  }
]

const Menu = () => {
  return (
    <section id="menu" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5e6d3] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mb-6 md:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-[#8B6F47] mb-3 md:mb-4">
              La isla
            </h2>
            <p className="text-lg sm:text-xl text-[#8B6F47] mb-1 md:mb-2">Cocktail Hour</p>
            <p className="text-xl sm:text-2xl font-serif italic text-[#8B6F47]">Buy 1 get 1 free</p>
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile: Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mb-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border-2 border-[#8B6F47]/10 hover:border-[#8B6F47]/30 transition-all"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-sm font-bold text-[#8B6F47] mb-2 uppercase tracking-wide leading-tight">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-gray-600 italic mb-3 flex-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#8B6F47]/10">
                    <span className="text-xs text-gray-500 font-medium">Price</span>
                    <span className="text-lg font-bold text-[#8B6F47]">₹{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: List Layout */}
          <div className="hidden md:block bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[#8B6F47]/20 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#8B6F47] mb-1 uppercase tracking-wide">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 italic">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-[#8B6F47]">₹{item.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Footer Note - Desktop */}
            <div className="mt-8 pt-6 border-t border-[#8B6F47]/20">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                No other discount offers can be taken on Happy Hour Prices,<br />
                including Zomato Gold, Diner, Swiggy or any other 3rd party platform.<br />
                Payment directly to La Isla through UPI, Debit Card or Cash.<br />
                <span className="font-semibold">Taxes as applicable</span>
              </p>
            </div>
          </div>

          {/* Footer Note - Mobile */}
          <div className="md:hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 mt-4">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              No other discount offers can be taken on Happy Hour Prices, including Zomato Gold, Diner, Swiggy or any other 3rd party platform. Payment directly to La Isla through UPI, Debit Card or Cash. <span className="font-semibold">Taxes as applicable</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
