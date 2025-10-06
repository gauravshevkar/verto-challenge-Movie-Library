
const API_URL = "https://www.omdbapi.com/";

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
