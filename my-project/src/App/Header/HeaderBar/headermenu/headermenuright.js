import React from "react"
import { Link } from "react-router-dom"


const Headermenuright = () => {
    return (
        <div className="right">
        <ul className="right-ul">
            <li className="right-li"><Link to="/">Home</Link></li>
            <li className="right-li"><Link to="/">Product</Link></li>
            <li className="right-li"><Link to="/">Pricing</Link></li>
            <li className="right-li"><Link to="/aboutus">Contact</Link></li>
            
        </ul>
    </div>
    )
    
    }



export default Headermenuright