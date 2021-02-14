import React, { Component } from "react"
import Contactus from "./contactus/contactus"
import Mainfooter from "./mainfooter/mainfooter"



class Footer extends Component {
    render() {
        return (
            <>
            <footer>
                <Contactus/>
                <Mainfooter/>
            </footer>
            </>
            )
    }
}


export default Footer;
