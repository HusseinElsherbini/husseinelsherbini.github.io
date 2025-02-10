import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, Book, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  
  // Navigation menu items configuration with proper routing paths
  const menuItems = [
    { 
      icon: <Code className="w-6 h-6" />, 
      title: 'Projects', 
      desc: 'From 8-bit computers to self-balancing robots', 
      color: 'text-green-500',
      path: '/projects'
    },
    { 
      icon: <Book className="w-6 h-6" />, 
      title: 'Blog', 
      desc: 'Thoughts on engineering and building things', 
      color: 'text-blue-500',
      path: '/blog'
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: 'Resume', 
      desc: 'The official rundown of what I do', 
      color: 'text-purple-500',
      path: '/resume'
    },
    { 
      icon: <User className="w-6 h-6" />, 
      title: 'About', 
      desc: 'More about my journey and interests', 
      color: 'text-yellow-500',
      path: '/about'
    }
  ];

  // Handle navigation with proper routing
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.3 }}
    >
      {menuItems.map((item, index) => (
        <motion.button
          key={item.title}
          onClick={() => handleClick(item.path)}
          className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group bg-white text-left w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-4">
            <div className={`${item.color} p-2 rounded-lg transition-transform group-hover:scale-110`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-gray-900 font-mono text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-mono">
                {item.desc}
              </p>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Navigation;