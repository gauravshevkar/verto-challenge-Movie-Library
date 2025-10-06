// src/api.js

const API_URL = "https://www.omdbapi.com/";

// getMovies function — keyword se movie list laata hai
export const getMovies = async (searchTerm) => {
  try {
    const res = await fetch(`${API_URL}?s=${searchTerm}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Response: "False", Error: "Something went wrong" };
  }
};
