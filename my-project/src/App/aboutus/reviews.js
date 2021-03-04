import React, {useState} from "react"



const Reviews = () => {
    const yourrevies = [
        {
            name: "Smyrnov Misha",
            text: "This is my site, you must like it and live comment"
        }
    ]
    const [reviews,setReviews] = useState(yourrevies)
    const [newReviews,setNewReviews] = useState({
        name:"",
        text:""
    }

    )

    const nameChange = (e) => {
        setNewReviews((value) => ({
            ...value,
            name:e.target.value
        })) 

    }
    const textChange = (e) => {
        setNewReviews((value) => ({
            ...value,
            text:e.target.value
        }))

    }
    const eSend = (e) => {
        e.preventDefault();
        setNewReviews({
            name:"",
            text:""
        })
        setReviews((value) => {
            return  [...value,newReviews]
        })
    }


        

    
    return (
        <>
            <div className="reviews">
                <h1>Write Here Your Reviews</h1>
                {
                    reviews.map((value,i) => (
                        <div 
                        className="reviews-one"
                        key={i}
                        >
                            <div className="reviews-two">Name:{value.name}</div>
                            <hr/>
                            <div className="reviews-three">I tell it to you:{value.text}</div>
                        </div>
                    ))

                    
                }
                <form className="reviews-form"
                onSubmit={eSend}
                >
                    <div className="reviews-input">
                        <input
                            placeholder="Name"
                            type="text"
                            value={newReviews.name}
                            onChange={nameChange}
                            
                        />
                    </div>
                    
                    <div className="reviews-textarea">
                        <textarea
                        value={newReviews.text}
                        placeholder="Right here about my site"
                        onChange={textChange}
                        >
                        </textarea>
                    </div>
                    <div className="reviews-button">
                    <button>Leave Your Coment Now</button>
                    </div>
                </form>
            </div>
        </>
    )
    
    }



export default Reviews