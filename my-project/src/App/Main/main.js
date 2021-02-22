import React, { Component } from "react"
import Meatourteam from "./meatourteam/meatourteam"
import Whatclientsay from "./whatclientsay/whatclientsay"
import Whatweare from "./whatweare/whatweare"
import Whatwedo from "./whatwedo/whatwedo"
import Whatpeople from "./whatwepeople/whatwepeople"



class Main extends Component {
    render() {
        return (
            <>
            <main>
            <Whatpeople/>
            <Whatwedo/>
            <Whatweare/>
            <Whatclientsay/>
            <Meatourteam/>
            </main>
            </>
            )
    }
}


export default Main;
