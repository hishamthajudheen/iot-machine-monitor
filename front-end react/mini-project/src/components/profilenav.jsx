import React from "react";
import { Link } from "react-scroll";
import logo4 from "../assets/logo4.png";

const Profnav = () =>{
    return(
        <div className='sticky top-0 z-50 flex items-center h-12 mx-auto px-4 text-[#fff] bg-black'>
            <div className="">
                <a href="/">
                    <img src={logo4} alt="/" className="w-[60px]"/>
                </a>
            </div>
          <ul className='hidden xl:flex bg-opacity-0 hover:cursor-pointer'>
            <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-[200px]'>
              <a href='/'>Home</a>
            </li>
            <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
            <Link to="about" smooth={true} duration={500}>
              Devices
            </Link>
            </li>
            <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
            <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
          <ul className='flex items-center fixed right-[130px] hover:cursor-pointer'>
            <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16" className="">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              <div className="ml-6 -mt-5">
              <a href="/register" classname="flex ml-10">Profile</a>
              </div>
            </li>
            <li className='pr-8 pl-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
                <a href="/">Sign Out</a>
            </li>
          </ul>
        </div>
        );
    }
    
export default Profnav;