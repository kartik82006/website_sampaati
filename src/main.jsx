import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import TeamMembers from './TeamMembers.jsx';
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero.jsx';
import SectionDivider from './SectionDivider.jsx';
import TimelineDemo from "./timeline-demo.jsx";
import DepartmentCarousel from './Departments.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
              <div className="relative">
                <Navbar />
                <div className="pt-[38px]"> {/* This padding matches navbar height */}
                  <Hero/>
                  <Home />
                  
                  <SectionDivider label = "Timeline Begins"/>
                  <TimelineDemo/>
                  <DepartmentCarousel />
                  <Footer />
                </div>
                
              </div>
            </>} />
        <Route path="/members/:department" element={<TeamMembers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
