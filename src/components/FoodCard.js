import React from 'react'

const FoodCard = ({ place }) => {
   
    return (
        <div className='card'>
            <div><img className="food-pics" src={place.image} alt={place.place}/>
                <div className="food-details">
                     <h1>{place.place}</h1>
                     <p>{place.description}</p>
                     <a 
                        href={place.web} 
                        target="_blank" 
                        rel="noreferrer">
                        <button className="detail-btn">More details</button>
                     </a>
                </div>
            </div>
        </div>     
    )
}

export default FoodCard
