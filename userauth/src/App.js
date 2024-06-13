import React, { useState, useEffect } from 'react';
import Authentication from './components/authentication';
// import Auth from './a'; // Assuming Auth.js is in the same directory

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/userData'); // Assuming your server endpoint to fetch user data is '/userData'
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <Authentication />
      <div>
        <h2>User Data:</h2>
        {userData ? (
          <ul>
            {userData.map((user, index) => (
              <li key={index}>
                Name: {user.name}, Roll: {user.roll}, Course: {user.course}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
