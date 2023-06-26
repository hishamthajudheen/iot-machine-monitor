import React from "react";
import { Link } from "react-scroll";
import logo4 from "../assets/logo4.png"

const Navbar = () =>{
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
        <Link to="About" smooth={true} duration={500}>
          About Us
        </Link>
        </li>
        <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
        <Link to="Contact" smooth={true} duration={500}>
          Contact Us
        </Link>
        </li>
      </ul>
      <ul className='flex items-center fixed right-[130px] hover:cursor-pointer'>
        <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded'>
          <a href="http://127.0.0.1:8000/members/register_user">Register</a>
        </li>
        <li className='pr-8 pl-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
            <a href="http://127.0.0.1:8000/members/login_user">Login</a>
        </li>
      </ul>
    </div>
    );
}

export default Navbar;