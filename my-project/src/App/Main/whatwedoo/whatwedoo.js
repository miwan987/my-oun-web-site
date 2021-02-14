import React from 'react'
import Peopleblock from './peopleblock'
import './whatwedoo.css'
import people from './people.js'


    const Whatwedoo = () => {
        return (
            <>
                <div className="what-we-doo">
                    <div className="text">
                        <h1>Choose Your Specialist</h1>
                        <p>He will help you solve any of your problems</p>
                    </div>
                    <div className="what-we-do-grid-people" >
                        
                    
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
                        </div>
                    
                </div>
            </>
        )
    }




    export default Whatwedoo;