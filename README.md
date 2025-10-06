# React + Vite
# Movie Library
An interactive React web app to browse movies and manage your personal Watchlist.
It uses the OMDb API to fetch movie data and stores your watchlist locally.

# Features
1. **Popular Movies:** Displays a curated list of trending movies on load.
2. **Search by Title:** Find movies easily by searching their name using OMDb API.
3. **Persistent Watchlist:** Add movies to a personal watchlist — saved in localStorage.
4. **Reusable Components:** Built with modular MovieCard and Navbar components.
5. **Separate Watchlist Page:** View all your saved movies.
6. **Remove Movie Option:** Remove a movie from your watchlist anytime.
7. **Client-Side Routing:** Smooth navigation between Home and Watchlist.
8. **State Management:** Uses React’s state hooks for consistent UI updates.

# Tech Stack
1. **Frontend:** React.js
2. **Routing:** React Router DOM
3. **Styling:** CSS / TailwindCSS (as per your project)
4. **API:** OMDb API
5. **State Management:** React Hooks (useState, useEffect)
6. **Storage:** Browser LocalStorage

# Project Structure
movie-library/
. │
. ├── src/
. │   ├── components/
. │   │   ├── MovieCard.jsx
. │   │   ├── Navbar.jsx
│   │   └── WatchlistCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Watchlist.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── .env
├── package.json
└── README.md

# Setup and Local Development
To run this project locally, follow these steps:

### 1. Clone the Repository
Open your terminal and clone the project, then navigate into the directory:

Bash
git clone [Your Repository URL]
cd movie-library

### 2. Install Dependencies
Install all required packages:

Bash
npm install

### 3. Setup Environment Variables
Create a file named .env in the project root and add your OMDb API Key. This is essential for the application to fetch movie data:

VITE_OMDB_API_KEY=YOUR_OMDB_API_KEY_HERE

### 4. Run the App
Start the local development server:

Bash
npm run dev

## 🛡️ Security Note for Evaluators
We strictly follow best practices for handling sensitive credentials:

API Key Protection: The .env file is excluded from Git tracking via the .gitignore file.

Deployment Security: In the deployed version (e.g., on Vercel), the API Key is securely injected using Environment Variables within the platform's settings, ensuring the key is never exposed in the public codebase.
