'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function NamesSection({ data, startAnimation = false, time = 0 }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => setAnimate(true), time);
      return () => clearTimeout(timer);
    }
  }, [startAnimation, time]);

  const pullDownLetter = (text) =>
    text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: -20, opacity: 0 }}
        animate={animate ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{ delay: i * 0.08, duration: 2, ease: 'easeOut' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));

  return (
    <div className="relative z-10" style={{ width: '100%' }}>
      <h1 className="text-left font-['SVN-VeryBerry'] text-5xl leading-tight">
        {pullDownLetter(data.groom)}
      </h1>
      <p className="mb-1 mt-1 text-center font-['SVN-VeryBerry'] text-4xl">
        {pullDownLetter('&')}
      </p>
      <h1 className="text-right font-['SVN-VeryBerry'] text-5xl leading-tight">
        {pullDownLetter(data.bride)}
      </h1>
    </div>
  );
}
