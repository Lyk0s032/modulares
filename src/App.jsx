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
import PanelAdmin from './components/panel/panel'
import RoutesComponent from './components/routes'
function App() {
  return (
    <div className="modulares">
      <Router>
        <Routes>
          <Route path='/*' element={<RoutesComponent />} />
          <Route path='/panel/*' element={<PanelAdmin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
