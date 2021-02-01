import React from 'react'

const FoodCard = ({ place }) => {
   
    return (
        
        <div className='card'>
            <img className ="food-pics" src={place.image} alt={place.place}/>
            <h1>{place.place}</h1>
            <p>{place.description}</p>
            <a className ="link-to-place" href={place.web} target="_blank" rel="noreferrer">See more</a>
        </div>
        
    )
}

export default FoodCard
