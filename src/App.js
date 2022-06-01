import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import LoginForm from "./component/LoginForm";
import SignUpForm from './component/SignUpForm';
import BussinesCard from './component/BusinessCard/BusinessCard';
import AirBNB from './component/AirBNB/AirBNB';
import MemeGenerator from './component/MemeGenerator/MemeGenerator';
import TravelJournel from './component/TravelJournel/TravelJournel';
import Tenzies from './component/Tenzies/Tenzies';
import Quiz from './component/Quiz/Quiz';
import { useState } from "react";
function App() {
  const [islogin, setIslogin]=useState(false);
  const getmsg=()=>{
    setIslogin(true)
  }
  return (
    <div className="App">
       
       <BrowserRouter>
      <div className="navBar">
        <div className="heading">
          <h1>My Application</h1>
        </div>
        
        <nav className="navi">
        {islogin && <Link className="item" to="/My_Application_Frontend" onClick={()=>{setIslogin(false)}}>Log Out</Link>}
        <Link className="item" to={islogin?"/home":"/My_Application_Frontend"}>Home</Link>
        <Link className="item" to="/about">About</Link>
        <Link className="item" to="/contact">Contact</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/My_Application_Frontend" element={<LoginForm getmsg={getmsg}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signupform" element={<SignUpForm/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/businessCard" element={<BussinesCard/>}/>
          <Route path="/airBNB" element={<AirBNB/>}/>
          <Route path="/travelJournel" element={<TravelJournel/>}/>
          <Route path="/memeGenerator" element={<MemeGenerator/>}/>
          <Route path="/tenzies" element={<Tenzies/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
