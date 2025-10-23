'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function TypingEffect({ text = 'Typing Effect', className = '', startAnimation = false, time = 0 }) {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => setAnimate(true), time);
      return () => clearTimeout(timer);
    }
  }, [startAnimation, time]);

  return (
    <p className={`flex flex-wrap gap-0.8 ${className}`}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05, ease: 'easeOut' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </p>
  );
}
