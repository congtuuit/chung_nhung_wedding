'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const wordVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }, // mỗi từ delay 0.3s
};

export default function SaveTheDate({ startAnimation = false, time = 1800 }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, time); // delay 100ms
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  const words = ['Save', 'The', 'Date'];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      className="relative z-10 mb-8 mt-16 flex justify-center gap-4 font-['SVN-Desire'] text-4xl"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
