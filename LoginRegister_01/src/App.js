import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <div className="home">  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
