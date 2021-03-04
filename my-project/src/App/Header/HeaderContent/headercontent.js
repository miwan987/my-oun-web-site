import React, { Component } from "react"
import { Link } from "react-router-dom";

import './headercontent.css'

const Headercontent = () => {
    return (
        <div className="header-content">
            <h1>Business Advisory<br/>Servise Provider</h1>
            <p>We know how large objects will act, but things on a<br/>small scale just do not act that way</p>
            <div className="button">
                <a href=""><button class="button-left">Get Quote Now</button></a>
                <Link to="/aboutus"><button class="button-right"> Learn More</button></Link>
            </div>
        </div>
    )
}



export default Headercontent;