import React, { useState } from "react";
import RatingReview from "./RatingReview";
function BikeCard({bike,userId,bikeId}) {
const [rating, setRating] = useState(0)
  // Displaying the details of the bikes to the DOM
  return (
    <div className="bike-card-container">
    <div className="bike-card">
    <img src={bike.image_url} alt={bike.name} className="bike-card-image" />
    <h3 className="bike-card-title">{bike.name}</h3> 
    <br />
    <b className="bike-card-description">Model: {bike.model}</b>
    <br/>
    <b className="bike-card-description">Terrain : {bike.type}</b>
    <br/>
    <b className="bike-card-description">Framesize: {bike.frameSize}</b>
    <br/>
        <b className="bike-card-description"> WheelSize: {bike.wheelSize}</b>
        <br /> 
        
    <a href="/payments" className="btn" >Rent Now</a>
    <RatingReview rating={rating} setRating={setRating} bikeId={bike.id} userId={userId}/>
  </div>
  
  </div>
);
};

export default BikeCard;
