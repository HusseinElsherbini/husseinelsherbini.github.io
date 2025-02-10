import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';

const Terminal = ({ commandHistory, isAnimating, showNavMenu }) => {
  const CursorAnimation = () => (
    <motion.span
      className="inline-block w-2.5 h-5 bg-green-500"
      animate={{ opacity: [1, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 1,
        ease: "steps(2)"
      }}
    />
  );

  return (
    <motion.div
      className="w-full min-h-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="font-mono text-lg space-y-4">
        {commandHistory.map(({ prompt, response }, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center">
              <span className="text-green-500">hussein@portfolio</span>
              <span className="text-gray-500">:~$ </span>
              <span className="text-green-500">{prompt}</span>
            </div>
            {response && (
              <div className="text-gray-700 ml-4 whitespace-pre-wrap">
                {response}
              </div>
            )}
          </div>
        ))}
        
        {!isAnimating && !showNavMenu && (
          <div className="flex items-center">
            <span className="text-green-500">hussein@portfolio</span>
            <span className="text-gray-500">:~$ </span>
            <CursorAnimation />
          </div>
        )}
        
        {isAnimating && (
          <div className="flex items-center">
            <CursorAnimation />
          </div>
        )}

        <AnimatePresence mode="wait">
          {showNavMenu && !isAnimating && <Navigation />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Terminal;