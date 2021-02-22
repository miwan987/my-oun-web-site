        import React, { Component } from "react"
        import './whatclientsay.css'
        import people from './client'
        import Client from './clientabout.js'

        class Whatclientsay extends Component  {
            render() {
            return (
                <div className="what-client-say">
                <div className="text">
                    <h1>What Client Say</h1>
                    <p>Problems trying to resolve the conflict between<br/>the two major realms of classNameical Newtonian mechanics</p>
                </div>
                <div className="what-client-say-grid">
                        {
                            people.map(({
                                img,
                                h3,
                                h4,
                                h5,
                                img2,
                                name,
                                profession
                            }) => (
                                
                                <Client
                                    img={img}
                                    h3={h3}
                                    h4={h4}
                                    h5={h5}
                                    img2={img2}
                                    name={name}
                                    profession={profession}
                                />
                            )
                                
                            
                            )
                        }
                </div>
            </div>
            )
        }}


        export default Whatclientsay