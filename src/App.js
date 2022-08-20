import logo from './logo.svg';
import './App.css';
import Home from './mainpages/Home';
import Profile from './mainpages/Profile';
import About from './mainpages/About';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/about" element={<About/>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
