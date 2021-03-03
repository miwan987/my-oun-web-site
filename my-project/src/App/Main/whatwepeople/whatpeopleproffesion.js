import React, { Component } from 'react'
import Peopleblock from './peopleblock'
import './whatwepeople.css'
import people from './people.js'
import Slider from "react-slick";
import './slick.css'
import './slick-theme.css'



    class Whatpeopleproffesion extends Component  {
        render () {


            const filterone = (person) => {
                return (person.profession === (Event.target))
            }

            var settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0,
                responsive: [
                  {
                    breakpoint: 1400,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              };
             
            
 
                return (
                    
                <div className="what-we-people">
                    <div className="text">
                        <h1>Choose Your Specialist</h1>
                        <p>He will help you solve any of your problems</p>
                    </div>
                    <div  className="what-we-do-grid-people" >
                    
                    <Slider {...settings}>
                    {
                            
                        people.filter((item=>item.profession==="SEO")).map(({
                            
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




    export default Whatpeopleproffesion;