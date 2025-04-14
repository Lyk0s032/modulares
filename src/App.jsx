import './css/index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import RoutesComponent from './components/routes'
function App() {
  return (
    <div className="modulares">
      <Router>
        <Routes>
          <Route path='/*' element={<RoutesComponent />} />
          {/* <Route path='/panel/*' element={<PanelAdmin />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
