import React, { Component } from 'react'



    class Ourjobs extends Component {
        render() {
            const {
                image,
                h2,
                p,
                
            }=this.props;
            return (
                <div className="grid-blocks">
                <div className="grid-blocks-container">
                    <div className="ini">
                        <a href=""><img src={image} alt=""/></a>
                        <h2>{h2}</h2>
                    </div>
                    <p>{p}</p>
                    </div>
            </div>
            )
    }}
    export default Ourjobs