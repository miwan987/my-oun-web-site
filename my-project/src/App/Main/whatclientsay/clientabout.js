import React, {Component} from "react"


    class Client extends Component {
        render(){
            const {
                img,
                h3,
                h4,
                h5,
                img2,
                name,
                profession
            }=this.props
        return (
           
                <div className="grid-stars">
                <div className="grid-blocks-container-2">
                    <div className="ini-2">
                        <img src={img} alt=""/>
                    </div>
                    <h3>{h3}<br/>{h4}<br/>{h5}</h3>
                    <div className="ini-3">
                        <img src={img2} alt=""/>
                        <div className="name-text">
                            <p className="name">{name}</p>
                            <p className="profession">{profession}</p>
                        </div>
                    </div>
                </div>
                </div>
            
        )

    }}



    export default Client