import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesData = () => {
  const [sales, setSales] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      try {
          let response = await fetch("http://localhost:5000/api/data");
          if (!response.ok) throw new Error("Network response was not OK");
          let data = await response.json();
          console.log(data);
      } catch (error) {
          console.error("Fetch error:", error.message);
      }
  }
  

    fetchData();
  }, []);

  // Prepare data for the graph (mapping API data to the format that Recharts expects)
  const chartData = sales.map((sale) => ({
    customer: sale.customer,
    amount: sale.amount,
  }));

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2>Sales Data Visualization</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="customer" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesData;







