import React, { Component } from 'react'


class Peopleblock extends Component {
    render() {
        const {
            gender,
            profession,
            experience,
            age,
            image
        } = this.props; 
        return (
            <div className="grid-blocks-people">
            <div className="grid-blocks-container-people">
                <div className="ini-people">
                    <a href=""><img src={image} alt=""/></a>
                    <h2>I can help you</h2>
                </div>
                <div className="gender"><a href="">Gender : {gender}</a></div>
                <div className="gender"><a href="">Profession : {profession}</a></div>
                <div className="gender"><a href="">Experience : {experience}  years</a></div>
                <div className="gender"><a href="">Age : {age}  years</a></div>
                <div className="help">
                <button className="help-now">Help Now</button>
                </div>
                </div>
        </div>
        )
    }
}

    export default Peopleblock;