import React, { useState, useCallback }from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-scroll";
import logo4 from "../assets/logo4.png"

const Navbar = () =>{
  const [nav, setNav] = useState(false);

  const handleNav = useCallback(() => {
    setNav((prevState) => !prevState);
  }, []);

  const closeNav = useCallback(() => {
    setNav(false);
  }, []);

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
      <ul className='hidden xl:flex items-center fixed right-[130px] hover:cursor-pointer'>
        <li className='px-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded'>
          <a href="http://127.0.0.1:8000/members/register_user">Register</a>
        </li>
        <li className='pr-8 pl-6 py-2.5 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 hover:text-purple-500  hover:decoration-[#C8A2C8] duration-300 rounded ml-12'>
            <a href="http://127.0.0.1:8000/members/login_user">Login</a>
        </li>
      </ul>
      <div onClick={handleNav} className='py-2.5 px-5 end-0 fixed right-1 transition ease-in-out delay-150 bg-gray-50 bg-opacity-5 hover:-scale-y+1 hover:scale-110 hover:bg-gray-300 hover:bg-opacity-20 duration-300 rounded flex xl:hidden'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={!nav ? 'fixed right-0 top-0 w-56 bg-[#525050] transform translate-x-full' : 'fixed right-0 top-12 w-[300px] bg-[#0000] transition ease-in-out delay-200 duration-300 shadow hover:shadow-lg '}
        onClick={closeNav}
      >
        <ul className='uppercase bg-opacity-70 bg-black hover:cursor-pointer'>
          <li className='px-12 py-2.5 border-gray-600 transition ease-in-out delay-150 bg-black bg-opacity-5 hover:-translate-y+1 hover:scale-105 hover:bg-black duration-200 rounded'><a href='/'>Home</a></li>
          <li className='px-12 py-2.5 border-gray-600 transition ease-in-out delay-150 bg-black bg-opacity-5 hover:-translate-y+1 hover:scale-105 hover:bg-black duration-200 rounded'>
            <Link to="About" smooth={true} duration={500}>
          About Us
        </Link></li>
          <li className='px-12 py-2.5 border-gray-600 transition ease-in-out delay-150 bg-black bg-opacity-5 hover:-translate-y+1 hover:scale-105 hover:bg-black duration-200 rounded'>
            <Link to="Contact" smooth={true} duration={500}>
          Contact Us
        </Link></li>
          <li className='px-12 py-2.5 border-gray-600 transition ease-in-out delay-150 bg-black bg-opacity-5 hover:-translate-y+1 hover:scale-105 hover:bg-black duration-200 rounded'><a href="http://127.0.0.1:8000/members/register_user">Register</a></li>
          <li className='px-12 py-2.5 border-gray-600 transition ease-in-out delay-150 bg-black bg-opacity-5 hover:-translate-y+1 hover:scale-105 hover:bg-black duration-200 rounded'><a href="http://127.0.0.1:8000/members/login_user">Login</a></li>
        </ul>
      </div>
    </div>
    );
}

export default Navbar;