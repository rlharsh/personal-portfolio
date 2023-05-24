import React from 'react'
import Overlay from './Components/overlay/overlay'
import Navbar from './Components/navbar/navbar'
import Home from './pages/home'

import './assets/css/app.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App