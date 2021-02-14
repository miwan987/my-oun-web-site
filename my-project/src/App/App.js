    import React, { Component } from "react"
    import Footer from "./Footer/footer"
    import Header from "./Header/header"
    import Main from "./Main/main"
    import './app.css'



    class App extends Component {
        render() {
            return (
                <>
                <Header/>
                <Main/>
                <Footer/>
                </>
                )
        }
    }


export default App;
