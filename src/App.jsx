import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Resume from './pages/Resume';
import Layout from './components/Layout';

// We'll wrap routes with Layout except for the landing page
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page route - no layout wrapper */}
        <Route path="/" element={<Landing />} />
        
        {/* All other routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;