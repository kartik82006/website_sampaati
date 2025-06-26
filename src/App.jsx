import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/img1.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-center bg-cover h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${viteLogo})` }}>
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl m-10 p-10 font-bold">Hello World!</h1>
        </div>

      </div>
    </>
  )
}

export default App
