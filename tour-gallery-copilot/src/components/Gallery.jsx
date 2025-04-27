import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component

// Gallery component to display a list of tours
const Gallery = ({ tours, onRemove }) => {
  return (
    <div style={styles.gallery}>
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour (required for React lists)
          id={tour.id} // Pass the tour id to the TourCard
          name={tour.name} // Pass the tour name to the TourCard
          info={tour.info} // Pass the tour info to the TourCard
          image={tour.image} // Pass the tour image to the TourCard
          price={tour.price} // Pass the tour price to the TourCard
          onRemove={onRemove} // Pass the remove function to handle "Not Interested" button
        />
      ))}
    </div>
  );
};

// Inline styles for the gallery container
const styles = {
  gallery: {
    display: 'flex', // Use flexbox for layout
    flexWrap: 'wrap', // Allow wrapping of items to the next row
    gap: '16px', // Add spacing between items
    justifyContent: 'center', // Center items horizontally
    padding: '16px', // Add padding around the gallery
  },
};

export default Gallery;