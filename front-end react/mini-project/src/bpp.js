import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profnav from "./components/profilenav";
import Profile from "./components/Profile";

function Bpp() {
    return (
    <div>
      <div>
       <BrowserRouter>
          <Profnav />
          <Routes>
            <Route path="/" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    );
  }
  
  export default Bpp;
  