import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import './watchlist.css'

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedList);
  }, []);

   const removeMovie = (title) => {
    const updated = watchlist.filter((movie) => movie.title !== title);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="main-section">
      <h2>Your Watchlist 🎬</h2>
      {watchlist.length === 0 ? (
        <p className="no_data">No movies in your watchlist yet.</p>
      ) : (
        <div className="grid">
          {watchlist.map((movie, index) => (
            <Card key={index} {...movie} isWatchlist={true}
              onRemove={() => removeMovie(movie.title)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
