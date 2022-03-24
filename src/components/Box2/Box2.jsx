import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Box2 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className='box-container'>
      <motion.div
        className='box'
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.8,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      >
      </motion.div>
    </div>
  )
}
