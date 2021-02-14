    import React, { Component } from "react"
    import './menu.css'
    import './headerbar.css'

    const Headerbar = () => {
        return (
            
                <div className="main-header-bar">
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" for="menu__toggle">
                        <span></span>
                        </label>
                    <ul className="menu__box">
                      <li><a className="menu__item" href="#">Home</a></li>
                      <li><a className="menu__item" href="#">Product</a></li>
                      <li><a className="menu__item" href="#">Pricing</a></li>
                      <li><a className="menu__item" href="#">Contact</a></li>
                      <li><a className="menu__item" href="#">Seach</a></li>
                    </ul>
                  </div>   
            <div className="left">
                <ul className="left-ul">
                    <li className="left-li"><a href="#">Consultal</a></li>
                </ul>  
            </div>
            <div className="right-2">
                <ul className="right-ul">
                    <li className="right-li"><a href="#"><img src="img/btn.png" alt=""/></a></li>
                    <li className="right-li"><a href="#"><img src="img/btn2.png" alt=""/></a></li>
                </ul>
                </div>           
            <div className="right">
                <ul className="right-ul">
                    <li className="right-li"><a href="#">Home</a></li>
                    <li className="right-li"><a href="#">Product</a></li>
                    <li className="right-li"><a href="#">Pricing</a></li>
                    <li className="right-li"><a href="#">Contact</a></li>
                </ul>
            </div>
            </div>
            
        )

    }
    
    export default Headerbar;
