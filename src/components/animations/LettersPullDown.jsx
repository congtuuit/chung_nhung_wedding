'use client';
import { motion } from 'framer-motion';
import React from 'react';

export function LettersPullDown({ text, className = '' }) {
  const splittedText = text.split('');

  return (
    <div className="flex">
      {splittedText.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: i * 0.05 } }}
          className={className}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
