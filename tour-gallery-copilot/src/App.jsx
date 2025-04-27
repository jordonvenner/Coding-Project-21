import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track the loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  // useEffect to fetch tours data when the component mounts
  useEffect(() => {
    // Async function to fetch data from the API
    const fetchTours = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        // Fetch data from the API
        const response = await fetch('https://www.course-api.com/react-tours-project');
        // Check if the response is not OK (status code outside 200-299 range)
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Throw an error if the fetch fails
        }
        // Parse the JSON response
        const data = await response.json();
        setTours(data); // Update the tours state with the fetched data
        setError(null); // Clear any previous error
      } catch (err) {
        // Handle errors during the fetch
        setError(err.message); // Set the error message
        setTours([]); // Clear the tours state in case of an error
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchTours(); // Call the fetchTours function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Render the list of tours fetched
  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {/* Map over the tours array and render each tour as a list item */}
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li> // Use tour.id as the unique key for each list item
        ))}
      </ul>
    </div>
  );
};

export default App; // Export the App component as the default export
