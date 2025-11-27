import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 border-4 border-recipe-green/20 border-t-recipe-green rounded-full mx-auto mb-4"
        />
        <p className="text-recipe-gray font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
