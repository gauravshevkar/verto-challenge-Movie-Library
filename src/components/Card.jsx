// MovieCard.jsx

import React from 'react';
// Import the CSS module for scoped styles
import styles from './card.module.css';




const Card = ({ title, genre, year, rating, imageUrl,isWatchlist, onRemove }) => {


    const addWatchlist = () => {
    const movie = { title, genre, year, rating, imageUrl };

    // Get old watchlist
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];

    // Avoid duplicates
    const alreadyExists = existing.some((m) => m.title === movie.title);
    if (!alreadyExists) {
      existing.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(existing));
      alert(`${title} added to watchlist!`);
    } else {
      alert(`${title} is already in your watchlist.`);
    }}


  return (
    // The main container for the card, where the hover effect is applied
    <div className={styles.movieCard}>
      
      {/* Movie Poster Image */}
      <div className={styles.posterContainer}>
        {/* 'alt' text is crucial for accessibility */}
        <img 
          src={imageUrl} 
          alt={`${title} Movie Poster`} 
          className={styles.posterImage}
        />
      </div>

      {/* Card Content (Title, Details, Button) */}
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        
        {/* Movie Details */}
        <p className={styles.details}>
          {year} | {genre} | ⭐ {rating}
        </p>
        
        {/* Buy Tickets Button */}
 {isWatchlist ? (
          <button className={styles.cardBtn} onClick={onRemove}>
            Remove
          </button>
        ) : (
          <button className={styles.cardBtn} onClick={addWatchlist}>
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;