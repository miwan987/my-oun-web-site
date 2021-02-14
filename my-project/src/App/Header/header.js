import React, { Component } from "react"
import HeaderBar from "./HeaderBar/headerbar"
import HeaderContent from "./HeaderContent/headercontent"
import './header.css'


    const Header = () => {
    
        return (
            <>
            <header>
            <div className="main-header">
           <HeaderBar/>
           <HeaderContent/>
           </div>
           </header>
            </>
            )
    }



export default Header;