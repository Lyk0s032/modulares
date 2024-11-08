import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Home from './components/home'
import Nav from './components/nav'
import Fotter from './components/fotter'
import Lockers from './components/lockers/lockers'
import Product from './components/product/product'
import Mesas from './components/mesas/mesas'
import Sillas from './components/sillas/siilas'
import Archivo from './components/archivos/archivos'
function App() {
  return (
    <div className="modulares">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services/lockers/*' element={<Lockers />} />
          <Route path='/services/mesas/*' element={<Mesas />} />
          <Route path='/services/sillas/*' element={<Sillas />} />
          <Route path='/services/archivo/*' element={<Archivo />} />


          <Route path='/product/:producto/*' element={<Product />} />

        </Routes>
        <Fotter />
      </Router>
    </div>
  )
}

export default App
