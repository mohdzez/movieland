import { useEffect, useState } from "react";
import "./App.css";

import Movie from "./components/Movie.jsx";
const App = () => {
  const API_URL = "http://www.omdbapi.com/?apikey=1fb266cd";

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("superman");
  const searchMovies = async (title) => {
    const movies = await fetch(`${API_URL}&s=${title}`);
    const data = await movies.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  console.log(movies);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search"
          defaultValue="superman"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <img
          src="https://gist.githubusercontent.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search_icon"
          onClick={() => searchMovies(keyword)}
        />
      </div>

      <div className="container">
        {movies.length > 0 ? (
          <>
            {movies.map((m) => (
              <Movie Title={m.Title} Poster={m.Poster} Year={m.Year} />
            ))}
          </>
        ) : (
          <>
            <h1>No Movies Found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
