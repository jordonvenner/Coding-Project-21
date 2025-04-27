import React from 'react';
import './TourCard.css'; // Import the CSS file for styles

// TourCard component to display a single tour's details
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-card-image" /> {/* Tour image */}
      <div className="tour-card-details">
        <h2 className="tour-card-name">{name}</h2> {/* Tour name */}
        <h4 className="tour-card-price">${price}</h4> {/* Tour price */}
        <p className="tour-card-info">{info}</p> {/* Tour info */}
      </div>
      <button className="not-interested-button" onClick={() => onRemove(id)}>
        Not Interested
      </button> {/* "Not Interested" button */}
    </div>
  );
};

export default TourCard;