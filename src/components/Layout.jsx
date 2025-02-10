import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();

  return (
    <motion.div 
      className="flex min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Sidebar />

      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          className="flex-1 ml-48"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto px-4 py-12">
            <Outlet />
          </div>
        </motion.main>
      </AnimatePresence>
    </motion.div>
  );
};

export default Layout;