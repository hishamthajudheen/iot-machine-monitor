import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Profnav from "./components/profilenav";
import ExternalPage from "./components/Dashboard";

function App() {
  return (
  <div>
    <div>
     <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
