import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import VideoBg from './components/VideoBg'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

    </>
  )
}

export default App
