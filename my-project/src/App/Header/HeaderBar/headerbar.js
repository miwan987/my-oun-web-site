    import React from "react"
    import './menu.css'
    import './headerbar.css'
    import {Link} from 'react-router-dom'

import Headermenu from "./headermenu/headermenu"

    const Headerbar = () => {
        return (
            
                <div className="main-header-bar">
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" for="menu__toggle">
                        <span></span>
                        </label>
                        <ul className="menu__box">
                            <li><Link className="menu__item" to="/">Home</Link></li>
                            <li><a className="menu__item" href="#">Product</a></li>
                            <li><a className="menu__item" href="#">Pricing</a></li>
                            <li><Link className="menu__item" to="/aboutus">Contact</Link></li>
                            <li><a className="menu__item" href="#">Seach</a></li>
                        </ul>
                        
                    </div>   
                    <Headermenu/>
                </div>
            
        )

    }
    
    export default Headerbar;
