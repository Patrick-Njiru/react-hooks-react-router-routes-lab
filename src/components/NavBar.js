import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const styleLinks = {
    display: "inline-block",
    color : "white",
    background: "darkblue",
    width: "auto",
    margin: "10px",
    padding: '15px',
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "x-large"
  }
  return (
    <div className="navbar">
      <NavLink 
      exact to="/" 
      style={styleLinks} 
      activeStyle={{color: "yellow"}} 
      > 
        Home 
      </NavLink>
      <NavLink 
        to="/movies"
        style={styleLinks}
        activeStyle={{color: "yellow"}}
        >
        Movies 
      </NavLink>
      <NavLink 
        to="/directors" 
        style={styleLinks}
        activeStyle={{color: "yellow"}} 
        >
        Directors 
      </NavLink>
      <NavLink 
        to="/actors" 
        style={styleLinks} 
        activeStyle={{color: "yellow"}}
        >
        Actors
      </NavLink>
    </div>
      )
}

export default NavBar;
