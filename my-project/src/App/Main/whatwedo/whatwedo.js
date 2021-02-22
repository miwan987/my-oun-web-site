        import React, { Component } from "react"
        import './whatwedo.css'
        import jobs from "./jobs.js"
        import Ourjobs from "./ourjobs"

        class Whatwedo extends Component {
        render () {

        
        
        
        
        
        return (
                <div className="what-we-do">
                    <div className="text">
                        <h1>What We Do</h1>
                        <p>Problems trying to resolve the conflict between<br/>the two major realms of classNameical Newtonian mechanics</p>
                    </div>
            
                    <div className="what-we-do-grid">
                    {
                        jobs.map(({
                            image,
                            h2,
                            p, 
                        }) => (
                            <Ourjobs
                            image={image}
                            h2={h2}
                            p={p}
                            />
                        )   

                        
                        )
                        }
                        
                    
                </div>
        </div>
            )
        }}


        export default Whatwedo