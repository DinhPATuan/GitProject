import React from "react";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import EmpDe from "./EmpDe";
import Emp from "./Employee";
import Home from "./Home";
// import Layout from "./Layout";
import Login from "./Login";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    // {
    //   path:'/layout',
    //   element:<Layout></Layout>,
    //   children: [
    //     {
    //       path:"About",
    //       element:<About></About>
    //     },
    //     {
    //       path:"Contact",
    //       element:<Contact></Contact>
    //     }
    //   ]
    // },
    {
        path:'/About',
        element:<About></About>
    },
    {
        path:'/Contact',
        element:<Contact></Contact>
    },
    {
      path:'/Login',
      element:<Login></Login>
    },
    {
        path:'/Employee',
        element:<Emp></Emp>
    },
    {
        path:'/EmpDe',
        element:<EmpDe></EmpDe>
    }
])

function App() {
    return(
        <>
        <RouterProvider router={router}/>
        {/* <Login></Login> */}
        </>
    )
}

export default App;