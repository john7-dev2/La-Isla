import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    // Reset progress on route change
    setProgress(0)
    
    const timer = setTimeout(() => {
      setProgress(100)
    }, 100)

    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setProgress(0)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (progress === 0 && location.pathname) return null

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 h-1 bg-recipe-green z-[60] origin-left"
      style={{ transformOrigin: 'left' }}
    />
  )
}

export default ProgressBar
