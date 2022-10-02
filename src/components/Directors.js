import React from "react";
import { directors } from "../data";

function Directors() {

  const directorDetails = directors.map( director => {

    const directedMovies = director.movies.map( movie => 
    <ul key={movie}> 
      <li>{movie}</li> 
    </ul>
    )

    return (
      <React.Fragment key={director.name}>
        <h2>{director.name}</h2>
        <section>Movies : {directedMovies}</section>
      </React.Fragment>
    )

  })

  return (
    <div> 
      <h1>Directors Page</h1>
      {directorDetails}
    </div>
  )
}

export default Directors;
