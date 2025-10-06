
import React from 'react';
import styles from './card.module.css';




const Card = ({ title, genre, year, rating, imageUrl,isWatchlist, onRemove }) => {


    const addWatchlist = () => {
    const movie = { title, genre, year, rating, imageUrl };

    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];

    // A duplicates
    const alreadyExists = existing.some((m) => m.title === movie.title);
    if (!alreadyExists) {
      existing.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(existing));
      alert(`${title} added to watchlist!`);
    } else {
      alert(`${title} is already in your watchlist.`);
    }}


  return (
    <div className={styles.movieCard}>
      
      <div className={styles.posterContainer}>
        <img 
          src={imageUrl} 
          alt={`${title} Movie Poster`} 
          className={styles.posterImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
            <p className={styles.details}>
          {year} | {genre} | ⭐ {rating}
        </p>
        
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
