import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  FileText, 
  Book, 
  Terminal, 
  User 
} from 'lucide-react';

const Sidebar = () => {
  // Get current location to highlight active link
  const location = useLocation();

  const sidebarItems = [
    { icon: Code, label: 'Projects', path: '/projects' },
    { icon: Book, label: 'Blog', path: '/blog' },
    { icon: Terminal, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: FileText, label: 'Resume', path: '/resume' }
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-full w-48 bg-white border-r border-gray-200 p-6"
    >
      {/* Logo/Home link */}
      <Link to="/" className="block mb-12">
        <div className="text-2xl font-bold text-gray-900">H</div>
      </Link>

      {/* Navigation Links */}
      <nav className="space-y-4">
        {sidebarItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={label}
            to={path}
            className={`flex items-center gap-3 transition-colors group
              ${location.pathname === path 
                ? 'text-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Icon className={`w-5 h-5 ${
              location.pathname === path 
                ? 'text-blue-600' 
                : 'group-hover:text-blue-600'
            }`} />
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 text-xs text-gray-400">
        © 2024 Hussein Elsherbini
      </div>
    </motion.div>
  );
};

export default Sidebar;