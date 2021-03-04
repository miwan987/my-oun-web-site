import React, { Component } from "react"
import { Route } from "react-router-dom"
import Meatourteam from "./meatourteam/meatourteam"
import Whatclientsay from "./whatclientsay/whatclientsay"
import Whatweare from "./whatweare/whatweare"
import Whatwedo from "./whatwedo/whatwedo"
import Whatpeople from "./whatwepeople/whatwepeople"
import {Link} from "react-router-dom"
import Whatpeopleproffesiondeveloper from "./whatwepeople/filterpeopleproffesion/whatpeopleproffesiondeveloper"
import Whatpeopleproffesiondevops from "./whatwepeople/filterpeopleproffesion/whatpeopleproffesiondev-ops"
import Whatpeopleproffesionqa from "./whatwepeople/filterpeopleproffesion/whatpeopleproffesionqa"
import Whatpeopleproffesionseo from "./whatwepeople/filterpeopleproffesion/whatpeopleproffesionseo"
import Whatpeoplegenderfamale from "./whatwepeople/filtergender/whatwepeoplegenderfamale"
import Whatpeoplegendermale from "./whatwepeople/filtergender/whatwepeoplegendermale"




class Main extends Component {
    render() {
        return (
            <>
            <main>
                <>
                    <Route path="/" exact render={() => <Whatpeople/>}/>
                    <Route path="/developer" component={Whatpeopleproffesiondeveloper}/>
                    <Route path="/dev-ops" component={Whatpeopleproffesiondevops}/>
                    <Route path="/QA" component={Whatpeopleproffesionqa}/>
                    <Route path="/SEO" component={Whatpeopleproffesionseo}/>
                    <Route path="/famale" component={Whatpeoplegenderfamale}/>
                    <Route path="/male" component={Whatpeoplegendermale}/>
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
