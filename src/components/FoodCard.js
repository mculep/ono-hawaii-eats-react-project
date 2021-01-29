import React from 'react'
import '../stylesheets/foodcard.css'


const FoodCard = ({ place }) => {
    return (
        <div className='wrap'>
            <div className='card'>
            <img className ="food-pics" src={place.image} alt=""/>
                <div>
                        <h1>{place.place}</h1>
                </div>
           </div>
        </div>
    )
}

export default FoodCard
