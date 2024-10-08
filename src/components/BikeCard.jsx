import React from "react";
import { useNavigate } from "react-router-dom";


function BikeCard({bike}) {

  // Displaying the details of the bikes to the DOM 

  const navigate = useNavigate()
  console.log(bike)

  const handleClick = () => {
    navigate(`/bike/${bike.id}`, { state: { bike } });
  }
  return (
    <div className="bike-card-container" onClick={handleClick}>
    <div className="bike-card">
    <img src={bike.image_url} alt={bike.name} className="bike-card-image" />
    <p><strong>Model :</strong> {bike.model}</p>
    <p><strong>Terrain:</strong> {bike.type}</p>
    <h3 className="bike-card-title">{bike.name}</h3> 
    <br />
    <b className="bike-card-description"> $:{bike.price}</b>
    <br/>
    <button className="btn" onClick={handleClick}> View Details</button> 


  </div>
  
  </div>
);
};

export default BikeCard;
