// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopTraders from './TopTraders';
import KeyMetrics from './KeyMetrics';
import LeaderboardTable from './LeaderboardTable';
import Header from './Header';
import Filterbutton from './Filterbutton';

function Leaderboard() {
  const [data, setData] = useState({
    topThreeTraders: [],
    keyMetrics: {},
    leaderboard: [],
    segregatedData: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get('https://script.google.com/macros/s/AKfycbw4Stef0JDEBT6uRW_Hx3Udq2HCh6KRk4JtjK9Ms3xJGLahdHfC4KRONkIlRs2L69Ro/exec');
        setData(response.data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getFilteredTraders = () => {
    let traders = filter === "All" ? data.leaderboard : data.segregatedData[filter] || [];

    // Apply search filtering
    if (searchTerm) {
      traders = traders.filter(trader =>
        trader.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return traders;
  };

  const filteredTraders = getFilteredTraders();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='bg-gray-50'>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} /> {/* Pass searchTerm and handler */}
      <Filterbutton filter={filter} setFilter={setFilter} />
      <TopTraders traders={data.topThreeTraders} />
      <KeyMetrics keyMetrics={data.keyMetrics} />
      <LeaderboardTable traders={filteredTraders} />
    </div>
  );
}

export default Leaderboard;
