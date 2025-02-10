import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Terminal from '../components/Terminal';
import WelcomeScreen from '../components/WelcomeScreen';

const Landing = () => {
  const navigate = useNavigate();
  
  // Refs for managing component state and animations
  const currentView = useRef('welcome');
  const scrollRef = useRef(null);
  const animationTimer = useRef(null);
  const scrollTimeout = useRef(null);

  // State management
  const [activeView, setActiveView] = useState('welcome');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  // Terminal command sequence
  const commands = [
    { 
      prompt: 'whoami', 
      response: "A curious engineer who enjoys building things"
    },
    { 
      prompt: 'ls projects/', 
      response: '8-bit-computer.txt  robot.txt  experiments.txt'
    },
    { 
      prompt: 'cat interests.txt', 
      response: 'Hardware design 🔧\nEmbedded systems 🤖\nDigital logic ⚡\nMaking things work (sometimes) 🛠️'
    },
    { 
      prompt: 'sudo launch menu', 
      response: 'Initializing navigation interface...'
    }
  ];

  // Reset terminal state
  const resetTerminal = useCallback(() => {
    setCommandHistory([]);
    setShowNavMenu(false);
    setIsAnimating(false);
    setAnimationStarted(false);
    if (animationTimer.current) {
      clearTimeout(animationTimer.current);
    }
  }, []);

  // Add a command to the terminal with typing animation
  const addCommand = async ({ prompt, response }) => {
    if (currentView.current !== 'terminal') return;
    
    setIsAnimating(true);
    setCommandHistory(prev => [...prev, { 
      prompt,
      response: '',
      isComplete: false
    }]);

    const chars = response.split('');
    let currentResponse = '';

    for (let i = 0; i < chars.length; i++) {
      if (currentView.current !== 'terminal') {
        setIsAnimating(false);
        return;
      }
      
      currentResponse += chars[i];
      setCommandHistory(prev => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = {
          prompt,
          response: currentResponse,
          isComplete: i === chars.length - 1
        };
        return newHistory;
      });
      await new Promise(resolve => setTimeout(resolve, 25));
    }

    setIsAnimating(false);
  };

  // Start the terminal animation sequence
  const startTerminalAnimation = async () => {
    if (animationStarted || currentView.current !== 'terminal') return;
    setAnimationStarted(true);
    
    for (const command of commands) {
      if (currentView.current !== 'terminal') {
        setAnimationStarted(false);
        return;
      }
      await addCommand(command);
    }
    
    if (currentView.current === 'terminal') {
      animationTimer.current = setTimeout(() => setShowNavMenu(true), 500);
    }
  };

  // Handle navigation from menu items
  const handleNavigation = useCallback((path) => {
    // Add exit animation delay before navigation
    setTimeout(() => {
      navigate(path);
    }, 100);
  }, [navigate]);

  // Scroll handler with debouncing and performance optimization
  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout to debounce scroll events
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }

      // Use requestAnimationFrame for smooth handling
      scrollTimeout.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const welcomeThreshold = viewportHeight * 0.2;
        
        if (scrollY < welcomeThreshold) {
          if (currentView.current !== 'welcome') {
            currentView.current = 'welcome';
            setActiveView('welcome');
            resetTerminal();
          }
        } else if (currentView.current === 'welcome') {
          currentView.current = 'terminal';
          setActiveView('terminal');
          requestAnimationFrame(() => {
            if (currentView.current === 'terminal') {
              startTerminalAnimation();
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
      if (scrollTimeout.current) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, [resetTerminal]);

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-full max-w-4xl p-8">
          <AnimatePresence mode="wait">
            {activeView === 'welcome' ? (
              <WelcomeScreen />
            ) : (
              <Terminal
                commandHistory={commandHistory}
                isAnimating={isAnimating}
                showNavMenu={showNavMenu}
                onNavigate={handleNavigation}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1]">
        <div ref={scrollRef} style={{ height: '200vh' }} />
      </div>
    </div>
  );
};

export default Landing;