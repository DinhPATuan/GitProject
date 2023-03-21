import { Link, Outlet } from "react-router-dom"
import React from "react";
const Layout = ()=>{
    return(
        <>
        <h1>Layout</h1>
        <ul>
            <li><Link to='/'>Go to Home</Link></li>
            <li><Link to='/layout/About'>layout About</Link></li>
            <li><Link to='/layout/Contact'>layout Contact</Link></li>
        </ul>

        <Outlet></Outlet>
        </>
    )
}

export default Layout;