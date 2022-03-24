import React from 'react'
import { motion, useAnimation } from 'framer-motion'

export const Box5 = () => {
  const control = useAnimation()

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: "100%",
            transition: {
              duration: 1
            }
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: -100,
            transition: {
              duration: 1
            }
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 1.5
            }
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 1.5
            }
          });
        }}
      >
        Square
      </button>
      <button onClick={() => control.stop()}>
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
}
