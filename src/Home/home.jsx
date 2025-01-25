import React from "react";
import Welcome from "./Welcome.jsx";
import Partners from "./Partners.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";



const Home = () => {
return (
    <div>
        <Navbar />
        <Welcome />
        <Partners />
    
    </div>
    )
}

export default Home;
