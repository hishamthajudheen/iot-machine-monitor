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
        <h1 className="text-white mt-8 flex justify-center text-xl">Details</h1>
        <p className="text-white flex justify-center -ml-10 mt-10">E-mail : </p>
        <p className="text-white flex justify-center -ml-10 mt-1">Username : </p>
        <button className="uppercase text-white mt-10 ml-[680px] bg-gray-700 bg-opacity-20 px-12 py-2 text-xs border-2 hover:bg-opacity-100 hover:bg-purple-700 hover:font-semibold hover:text-black transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110">Go To Dashboard</button>
        <div style={{ width: '800px', height: '800px' }}>
          <GaugeChart id="gauge-chart1" nrOfLevels={1} percent={gaugeValue} arcWidth={0.1} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
