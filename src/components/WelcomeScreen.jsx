import React from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-6xl font-bold text-gray-900 mb-6">
        Hi, I'm Hussein
        <motion.span
          className="inline-block ml-2"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          👋
        </motion.span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Just another engineer trying to build cool stuff without setting anything on fire... yet.
      </p>
      <motion.div
        className="animate-bounce mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-gray-500">Scroll to continue</p>
        <div className="w-6 h-6 mx-auto mt-2 border-2 border-gray-400 border-t-0 border-l-0 rotate-45" />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;