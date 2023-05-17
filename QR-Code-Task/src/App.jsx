import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading'
import QrCode from './QrCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <QrCode />
        <Heading />
      </div>
      
    </>
  )
}

export default App
