import React from 'react';

// TourCard component to display a single tour's details
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} /> {/* Tour image */}
      <div style={styles.details}>
        <h2 style={styles.name}>{name}</h2> {/* Tour name */}
        <h4 style={styles.price}>${price}</h4> {/* Tour price */}
        <p style={styles.info}>{info}</p> {/* Tour info */}
      </div>
      <button style={styles.button} onClick={() => onRemove(id)}>
        Not Interested
      </button> {/* "Not Interested" button */}
    </div>
  );
};

// Inline styles for the component
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  details: {
    marginTop: '16px',
  },
  name: {
    margin: '0 0 8px',
  },
  price: {
    margin: '0 0 16px',
    color: '#2a9d8f',
  },
  info: {
    marginBottom: '16px',
    color: '#555',
  },
  button: {
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TourCard;