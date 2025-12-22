import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import './style.css';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Education from './pages/education';
import Technology from './pages/technology';
import Donation from './pages/donation';
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="technologies" element={<Technology />} />
          <Route path="donation" element={<Donation />}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
