import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorDetails = actors.map( actor => {

    const actedMovies = actor.movies.map( movie => 
    <ul key={movie}> 
      <li>{movie}</li> 
    </ul>
    )
    return (
      <React.Fragment key={actor.name}>
        <h2>{actor.name}</h2>
        <section>Movies : {actedMovies}</section>
      </React.Fragment>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDetails}
    </div>
  )
}

export default Actors;
