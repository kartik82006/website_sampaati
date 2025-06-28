import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import TeamMembers from './TeamMembers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:teamName" element={<TeamMembers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
