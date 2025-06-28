import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectShowcase from './Project.jsx'
import App from './App.jsx'
import Teams from './Teams.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProjectShowcase/>
  </StrictMode>,
)
