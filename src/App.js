
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Serviços from './pages/Serviços'
import Contato from './pages/Contato'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Serviços" element={<Serviços />} />
          <Route path="/Contato" element={<Contato/>} />         
        </Routes>
      </Router>
    </div>
  )
}

export default App
