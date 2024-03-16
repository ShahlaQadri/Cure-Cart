import { useState } from 'react'

import './App.css'

import Header from './Components/header/Header'
import Homepage from './pages/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <Homepage/>
    </>
  )
}

export default App
