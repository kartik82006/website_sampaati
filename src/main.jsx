import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ProjectShowcase from './Project.jsx';
import App from './App.jsx';
import TeamLeaders from './TeamLeaders.jsx';
import TeamMembers from './TeamMembers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeamLeaders />} />
        <Route path="/leaders" element={<TeamLeaders />} />
        <Route path="/team/:teamName" element={<TeamMembers />} />
        <Route path="/projects" element={<ProjectShowcase />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
