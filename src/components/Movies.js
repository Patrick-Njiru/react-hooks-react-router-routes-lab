import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map( movie => {

    const movieGenres = movie.genres.map( genre => 
    <ul key={genre}> 
      <li>{genre}</li> 
    </ul>
    )

    return (
      <React.Fragment key={movie.title}>
        <h2>{movie.title}</h2>
        <p> Time - {movie.time}</p>
        <section>Movies: {movieGenres}</section>
      </React.Fragment>
    )

  })
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movieDetails}</div>
    </div>
  )
}

export default Movies;
