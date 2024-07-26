"use client"; 
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/goldandsilver.jsx');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching metal prices:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>hi it works</p>
      <div>
        <h1>Metal Prices</h1>
        {data ? (
          <pre>{JSON.stringify(data,null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
