import React, { Component } from 'react'
import Peopleblock from './peopleblock'
import './whatwepeople.css'
import people from './people.js'
import Slider from 'infinite-react-carousel';





    class Whatpeople extends Component  {
        render () {
            this.state = {
                slidesPerRow:3
            }
            const onSlider = () => {
                 { if (window.screen.width < 1400) {
                    this.setState((prevState) => ({
                        slidesPerRow: prevState.slidesPerRow - 1
                    })
                  
                    
                )}
                }
                
                
            } 
            
 
                return (
                    
                <div className="what-we-people">
                    <div className="text">
                        <h1>Choose Your Specialist</h1>
                        <p>He will help you solve any of your problems</p>
                    </div>
                    <div  className="what-we-do-grid-people" >
                    
                    <Slider { ...this.state }>
                    {
                            
                        people.map(({
                            id,
                            gender,
                            profession,
                            experience,
                            age,
                            image
                        }
                        ) => (
                            
                            <>
                                     <Peopleblock
                                    gender={gender}
                                    profession={profession}
                                    experience={experience}
                                    age={age}
                                    image={image}
                                    
                                       
                                />
                                 
                            </>
                            
                        )) 
                        

                        }
                        
                        </Slider>
                        </div>
                    
                </div>)
            
        
    }}




    export default Whatpeople;