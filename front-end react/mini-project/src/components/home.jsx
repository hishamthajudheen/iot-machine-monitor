import React from "react";
import bgv1 from "../assets/bgv1.mp4";

const Home = () =>{
    return(
        <div>
            <video autoPlay loop muted className="h-screen w-full object-cover">
                <source src={bgv1} type="video/mp4" />
            </video>
            
            </div> 
    );
}

export default Home;