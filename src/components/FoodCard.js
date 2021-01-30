import React from 'react'



const FoodCard = ({ place }) => {
    return (
        <div className='wrap'>
            <div className='card'>
            <img className ="food-pics" src={place.image} alt="pictures of food"/>

            
            <h1>{place.place}</h1>
            <h6>{place.web}</h6>
        
           </div>
        </div>
    )
}

export default FoodCard
