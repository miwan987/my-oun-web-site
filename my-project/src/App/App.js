    import React, { Component } from "react"
    import Footer from "./Footer/footer"
    import Header from "./Header/header"
    import Main from "./Main/main"
    import './app.css'
    import { Route } from "react-router-dom"
    import Aboutus from "./aboutus/aboutus"


    class App extends Component {
        render() {
            return (
                <>
            
                <Route path="/" exact render={() => <Header/>}/>
                
                
                <Route path="/" exact render={() => <Main/>}/>
                
                
                <Route path="/" exact render={() =><Footer/>}/>
                <Route path="/aboutus" component={Aboutus}/>
                </>
                )
        }
    }


export default App;
