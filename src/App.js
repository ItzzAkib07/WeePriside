import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Services from './Component/Services';
import Booking from './Component/Booking';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Home" element={<Home/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
