import React from 'react';

const Movies = (props) => {
	return (
	  <div className="movies">
	  	<img src={props.img} alt="" />
	  	<p>{props.title}</p>	 
	  	<p>Year: {props.year}</p> 
	  	<p>{props.runtime}</p> 
	  </div>
	)
}

export default Movies;