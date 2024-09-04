import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyComponent = () => {
  // State to store fetched data
  const [data, setData] = useState(null);
  // Function to fetch data
  const fetchData = async () => {
    try {
      // Make a GET request using the Fetch API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const result = await response.json();

      // Update the state with the fetched data
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  // Effect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      {data ? (
        data.map((item) => <h3>{item.title}</h3>)
      ) : (
        // Display a loading message or other UI while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
