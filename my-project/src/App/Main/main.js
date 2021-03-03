import React, { Component } from "react"
import { Route } from "react-router-dom"
import Meatourteam from "./meatourteam/meatourteam"
import Whatclientsay from "./whatclientsay/whatclientsay"
import Whatweare from "./whatweare/whatweare"
import Whatwedo from "./whatwedo/whatwedo"
import Whatpeople from "./whatwepeople/whatwepeople"
import {Link} from "react-router-dom"
import Whatpeopleproffesion from "./whatwepeople/whatpeopleproffesion"


class Main extends Component {
    render() {
        return (
            <>
            <main>
                <>
                    <Route path="/" exact render={() => <Whatpeople/>}/>
                    <Route path="/Profession" component={Whatpeopleproffesion}/>
                </>
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
