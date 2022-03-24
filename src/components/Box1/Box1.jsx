import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        animate={{
          x: isAnimating ? [0, 1000] : [1000, 0],
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0
        }}
        transition={{
          type: 'spring',
          stiffness: 50, // increase this number to make it more bouncy
          damping: 10 // increase this number to make it slower
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      >

      </motion.div>
    </div>
  )
}
