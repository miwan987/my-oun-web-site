import React from "react"
import Headermenu from "../Header/HeaderBar/headermenu/headermenu"
import Meatourteam from "../Main/meatourteam/meatourteam"
import './aboutus.css'
import Aboutustwo from "./aboutustwo"
import Reviews from "./reviews"


    

const Aboutus = () => {
    return (
        <>
        <div className="aboutus">
            <Headermenu/>
            <Aboutustwo/>     
        </div>
            <Meatourteam/>
            <Reviews/>
        </>
    )
    
    }



export default Aboutus