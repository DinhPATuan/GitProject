import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <>
        <p>Home</p>
        <ul>
            <li><Link to='/'>Go to Home</Link></li>
            <li><Link to='/About'>Go to About</Link></li>
            <li><Link to='/Contact'>Go to Contact</Link></li>
            <li><Link to='/Employee'>Go to Employee</Link></li>
            <li><Link to='/Login'>Go to Login</Link></li>
        </ul>
    </>
    )
}

export default Home;