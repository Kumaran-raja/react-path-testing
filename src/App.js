import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
