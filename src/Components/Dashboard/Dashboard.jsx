// YourComponent.jsx
import React, { useEffect, useState } from 'react';
import database from '../../firebase'; // Adjust the path based on your project structure
import { ref, onValue } from 'firebase/database';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(database, 'Lectures'); // Replace 'your_data_path' with the actual path
      onValue(dbRef, (snapshot) => {
        setData(snapshot.val());
      });
    };

    fetchData();

    // Clean up the event listener when the component unmounts
    return () => {
      // No need to use off() with onValue in Firebase v9
    };
  }, []);

  return (
    <div>
      <h1>Realtime Data: {JSON.stringify(data)}</h1>
    </div>
  );
};

export default Dashboard;