import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { TimelineDemo } from './TimelineFloater'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="pt-[88px]"> {/* This padding matches navbar height */}
          <TimelineDemo />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
