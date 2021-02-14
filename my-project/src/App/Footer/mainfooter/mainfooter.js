        import React, { Component } from "react"
        import './mainfooter.css'



        const Mainfooter = () => {
            return (
                <div className="main-footer">
                <div className="top-footer">
                    <ul className="top-footer-right">
                        <a href=""><li>Consultal</li></a>
                    </ul>
                    <div className="right-ul-2">
                    <ul className="top-footer-left">
                        <a href="https://www.facebook.com"><li><img src="img/ant-design_facebook-filled11.png" alt=""/></li></a>
                        <a href="https://www.instagram.com"><li><img src="img/ant-design_instagram-outlined22.png" alt=""/></li></a>
                        <a href="https://twitter.com/"><li><img src="img/ant-design_twitter-outlined33.png" alt=""/></li></a>
                        <a href="https://www.youtube.com/"><li><img src="img/carbon_logo-youtube44.png" alt=""/></li></a>
                    </ul>
                    </div>
                </div>
                <hr/>
                <div className="middle-footer">
                    <div className="middle-div">
                    <ul className="middle-ul">
                        <a href=""><li className="top-li">Company Info</li></a>
                        <a href=""><li className="foot-li">About Us</li></a>
                        <a href=""><li className="foot-li">Carrier</li></a>
                        <a href=""><li className="foot-li">We are hiring</li></a>
                        <a href=""><li className="foot-li">Blog</li></a>
                    </ul>
                    </div>
                    <div className="middle-div">
                        <ul className="middle-ul">
                            <a href=""><li className="top-li">Legal</li></a>
                            <a href=""><li className="foot-li">About Us</li></a>
                            <a href=""><li className="foot-li">Carrier</li></a>
                            <a href=""><li className="foot-li">We are hiring</li></a>
                            <a href=""><li className="foot-li">Blog</li></a>
                        </ul>
                    </div>
                    <div className="middle-div">
                            <ul className="middle-ul">
                                <a href=""><li className="top-li">Features</li></a>
                                <a href=""><li className="foot-li">Bussiness Marketing</li></a>
                                <a href=""><li className="foot-li">User Analytic</li></a>
                                <a href=""><li className="foot-li">Live Chat</li></a>
                                <a href=""><li className="foot-li">Unlimited Support</li></a>
                            </ul>
                    </div>
                    <div className="middle-div">
                                <ul className="middle-ul">
                                    <a href=""><li className="top-li">Resources</li></a>
                                    <a href=""><li className="foot-li">IOS & Android</li></a>
                                    <a href=""><li className="foot-li">Watch & Demo</li></a>
                                    <a href=""><li className="foot-li">Customers</li></a>
                                    <a href=""><li className="foot-li">API</li></a>
                                </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <h1>Made With Love By Smyrnov Misha All Right Reserved</h1>
                </div>
            </div>
            )
        }


        export default Mainfooter