import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profnav from "./components/profilenav";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function Bpp() {
    return (
    <div>
      <div>
       <BrowserRouter>
          <Profnav />
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    );
  }
  
  export default Bpp;
  