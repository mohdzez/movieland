import React from "react";

const Movie = ({ Year, Poster, Title }) => (
  <div className="movie">
    <div>
      <p>{Year}</p>
    </div>
    <div>
      <img src={Poster} alt={Title} />
    </div>
  </div>
);

export default Movie;
