import React from "react";
import bgv1 from "../assets/bgv1.mp4";
import Bgfour from '../assets/Bgfour.jpg';

const Home = () =>{
    return(
        <div>
            <div name="Home" className="h-screen">
            <video autoPlay loop muted className="h-screen w-full object-cover relative ">
                <source src={bgv1} type="video/mp4" />
            </video>
            <div className="bg-black text-white font-semibold uppercase text-[45px] absolute top-[320px] left-[80px] text-center px-4 hover:cursor-pointer hover:scale -scale-y+1 hover:scale-110 hover:text-purple-800 duration-500">
                    <h1 className="">machine-monitoring <br></br>system</h1>
            </div>
            </div>

            <div name="About" className="">
                 <div className="pt-[80px] flex justify-center">
                    <h1 className="text-white font-semibold text-5xl ">About Us</h1>
                 </div>
                 <div className="flex justify-center">
                 <hr className=" flex justify-center w-[200px] mt-[40px] border-4 border-purple-500 cursor-pointer hover:border-purple-800 duration-500"></hr>
                 </div>
                 <div className="mt-[60px] xl:w-[600px] xl:ml-[475px] flex-shrink mb-10">
                 <p className="text-white text-center">IoT Machine Monitoring Systems Ltd. is a leading provider of advanced machine monitoring solutions for industrial and manufacturing environments. Our innovative solutions harness the power of IoT technology to collect, analyze, and visualize real-time data from machines, enabling businesses to optimize performance, increase productivity, and reduce downtime. With our customizable dashboards, intelligent analytics, and commitment to customer satisfaction, we empower our clients to make informed decisions and achieve operational excellence.</p>
                 </div>
            </div>
            
            <ul className="hidden lg:flex justify-center">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16" className="text-purple-500 mt-[95px] animate-bounce">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                </svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16" className="text-purple-500 ml-[285px] mt-[95px] animate-bounce">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
                </svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16" className="text-purple-500 ml-[285px] mt-[95px] animate-bounce">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                </svg>
                </li>
            </ul>

            <ul className="hidden lg:flex justify-center text-white">
                <li className="mb-[100px] text-lg font-semibold">
                    <h3>Operational Efficiency</h3>
                </li>
                <li className="ml-[249px] mb-[100px] text-lg font-semibold">
                    <h3>Real-Time Monitoring</h3>
                </li>
                <li className="ml-[249px] mb-[100px] text-lg font-semibold">
                    <h3>Improved Productivity</h3>
                </li>
            </ul>

            <div name="Contact" className="w-full h-screen relative -z-10 ">
                <img src={Bgfour} alt="/" className="h-screen object-cover w-full"/>
                <h1 className="text-3xl text-white font-thin absolute top-[120px] left-[75px] text-center uppercase">Contact Us</h1>
                <p className="absolute top-[170px] left-[75px] text-lg text-white font-thin">Email: adnokiia@gmail.com</p>
                <p className="absolute top-[200px] left-[75px] text-lg text-white font-thin">Phone: +91 3888888811</p>
                <button className="uppercase text-white absolute top-[250px] left-[80px] bg-gray-700 bg-opacity-20 px-12 py-2 text-xs border-2 hover:bg-opacity-100 transition ease-in-out delay-150 hover:-scale-y+1 hover:scale-110 ">Know more</button>
            </div>
        </div>
    );
}

export default Home;