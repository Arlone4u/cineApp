import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
         <div className="title">
               <h1 className='col2'>Searches</h1>
        </div>
        <div data-testid = "watchagain" className = "movie-list">
			{props.movies.map((movie, index) => (
				<div className= "poster">
					<img src={movie.Poster} alt='movie'></img>
				</div>
                
			))}
            </div>
		</>
	);
};

export default MovieList;