        import React, { Component } from "react"
        import './contactus.css'



        const Contactus = () => {
            return (
                <div className="contact-us">
            <div className="Appointment">
                <h4>Contact Us</h4>
                <h1>Make an Appointment</h1>
                <div className="form-1">
                    <form action="">
                        <input className="one-input" placeholder="Full Name" type="text"/>
                        <input type="email" placeholder="exapmle@gmail.com" name="" id=""/>
                    </form>
                </div>
                <div className="form-2">
                    <form action="">
                        <select name=""  id="">
                            <option value="">Please Select</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select Time</option>
                            <option value="">4 : 00</option>
                            <option value="">5 : 00</option>
                            <option value="">6 : 00</option>
                            <option value="">7 : 00</option>
                        </select>
                    </form>
                </div>
                <div className="form-3">
                    <form action="">
                        <textarea name="" id="" cols="" rows="" placeholder="Message"></textarea>
                    </form>
                </div>
                <div className="button-contact">
                    <button type="submit"> Book Appointment</button>
                </div>
            </div>
            <div className="us">
                <div className="us-text">
                    <h2>Consulting Agency For Your Bussines</h2>
                    <p>the quick fox jumps oves the dog</p>
                </div>
                <div className="button-us">
                    <button type="submit">Contact-Us</button>
                </div>
            </div>
        </div>
            )
        }


        export default Contactus