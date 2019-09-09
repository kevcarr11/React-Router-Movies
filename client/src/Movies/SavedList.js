import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink exact to={`/movies/${movie.id}`} activeClassName="activeSavedMovie" key={movie.title} >
      <span className="saved-movie" key={movie.title}>{movie.title} </span>
      </NavLink>
    ))}
    <NavLink to='/movies' key={props.list} >
    <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
