import React from 'react'
import FoodCard from './FoodCard'

const FoodPlace = ({ places }) => {
    return (
        <div className='food-info'>
            { places.map((place) => (
                <FoodCard key={place.place} 
                place={place} /> 
            ))}
        </div>
    )
}

export default FoodPlace
