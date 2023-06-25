import React, { useState, useEffect, useRef } from "react";
import GaugeChart from 'react-gauge-chart';

const Profile = () => {
  const [gaugeValue, setGaugeValue] = useState(0.75);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolling(false);
      }, 200); // Set the timeout to 200ms after the scrolling stops
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      if (!scrolling) {
        const newValue = Math.random();
        setGaugeValue(newValue);
      }
    }, 800);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [scrolling]);

  return (
    <div>
      <h1 className="text-white text-4xl flex justify-center mt-10">Your Account</h1>
      <hr className="border-4 mt-6 w-[200px] ml-[670px] border-purple-500"></hr>
      <div>
        <div className="border-2 p-2  mr-[990px] ml-[400px] mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </div>
        <h1 className="text-white -mt-[150px] flex justify-center text-xl">Details</h1>
        <p className="text-white flex justify-center mt-10">E-mail : hishamthajudheen@gmail.com</p>
        <p className="text-white flex justify-center mt-1">Username : Hisham Thajudheen</p>
        <button className="uppercase text-white mt-10 ml-[680px] bg-gray-700 bg-opacity-20 px-12 py-2 text-xs border-2 hover:bg-opacity-100 hover:bg-purple-700 hover:font-semibold hover:text-black transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110"><a href="/dashboard">Go To Dashboard</a></button>
      </div>
    </div>
  );
}

export default Profile;
