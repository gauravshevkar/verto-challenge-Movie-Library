import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMovies } from "../api/api";
import "./home.css";

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // If user clears search, fetch default movies
      const query = searchQuery && searchQuery.trim() !== "" ? searchQuery : "Avengers";
      const data = await getMovies(query);

      if (data.Search) {
        setMovies(
          data.Search.map((m) => ({
            ...m,
            rating: "N/A" // default since search API doesn't give rating
          }))
        );
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="main-section">
      <h2>Popular Movies</h2>
      <div className="grid">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.Title}
              genre={movie.Type}
              year={movie.Year}
              rating={movie.rating}
              imageUrl={movie.Poster}
            />
          ))
        ) : (
          <p style={{ color: "#ccc" }}>No movies found...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
