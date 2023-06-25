import React, { useState, useEffect, useRef } from "react";
import GaugeChart from 'react-gauge-chart';

const Gauge = () => {
  const [gaugeValue, setGaugeValue] = useState(0.75);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const gaugeColor = ["#9C27B0"];

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
      if (!scrolling && isGaugeVisible) {
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
      <h1 className="text-white text-2xl flex mb-10 ml-[250px] mt-10">Machine 1</h1>
      <button onClick={handleClick}>Show Gauge</button>
        <div style={{ width: '400px', height: '500px' }}>
          <GaugeChart id="gauge-chart1" nrOfLevels={1} percent={gaugeValue} arcWidth={0.1} colors={gaugeColor} />
        </div>
    </div>
  );
}

export default Gauge;