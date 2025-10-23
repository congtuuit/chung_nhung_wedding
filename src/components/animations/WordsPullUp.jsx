'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function WordsPullUp({ text, className = '' }) {
  const splittedText = text.split(' ');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <span className="flex justify-center flex-wrap">
      {splittedText.map((word, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          custom={i}
          className={`text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] pr-2 ${className}`}
        >
          {word === '' ? '\u00A0' : word}
        </motion.span>
      ))}
    </span>
  );
}
