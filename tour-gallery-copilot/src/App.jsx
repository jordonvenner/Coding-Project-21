import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; // Import the Gallery component
import './App.css'; // Import the CSS file

// Main App component
const App = () => {
  // State to store the list of tours fetched from the API
  const [tours, setTours] = useState([]);
  // State to track whether the data is still being fetched
  const [loading, setLoading] = useState(true);
  // State to store any error messages if the fetch fails
  const [error, setError] = useState(null);

  // Function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before starting the fetch
    try {
      const response = await fetch('https://www.course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the fetch fails
      }
      const data = await response.json();
      setTours(data); // Update the tours state with the fetched data
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message); // Set the error message
      setTours([]); // Clear the tours state in case of an error
    } finally {
      setLoading(false); // Set loading to false after the fetch completes
    }
  };

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    fetchTours(); // Call the fetchTours function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to remove a tour from the list
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given id
  };

  // Render a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>; // Display a loading message
  }

  // Render an error message if there was an issue fetching the data
  if (error) {
    return <h2>Error: {error}</h2>; // Display the error message
  }

  // Render a "Refresh" button if no tours are left
  if (tours.length === 0) {
    return (
      <div className="container">
        <h2>No Tours Left</h2> {/* Display a message when no tours are left */}
        <button onClick={fetchTours} className="refresh-button">
          Refresh {/* Button to refetch the tours */}
        </button>
      </div>
    );
  }

  // Render the Gallery component with the list of tours
  return (
    <div className="container">
      <h1>Tours</h1> {/* Main heading */}
      <Gallery tours={tours} onRemove={removeTour} /> {/* Use the Gallery component */}
    </div>
  );
};

export default App; // Export the App component as the default export