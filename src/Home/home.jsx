import React from "react";
import Welcome from "./Welcome.jsx";
import Partners from "./Partners.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Ladies from "./Ladies.jsx";
import Man from "./Man.jsx";



const Home = () => {
return (
    <div>
        <Navbar />
        <Welcome />
        <Partners />
        <Ladies />
        <Man />
    
    </div>
    )
}

export default Home;
