import React from 'react';

import './style.css';

const FeaturedMovie = ({ movie }) => {
  const firstDate = new Date(movie.first_air_date);

  const genres = [];
  for (let i in movie.genres) {
    genres.push(movie.genres[i].name);
  }

  let description = movie.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <section
      className='featured'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured--name'>{movie.original_name}</div>
          <div className='featured--info'>
            <div className='featured--info-details'>
              <div className='featured--point'>{movie.vote_average} pontos</div>
              <div className='featured--year'>{firstDate.getFullYear()}</div>
              <div className='featured--seasons'>
                {movie.number_of_seasons} temporada
                {movie.number_of_seasons !== 1 ? 's' : ''}
              </div>
            </div>
            <div className='featured--description'>{description}</div>
            <div className='featured--button'>
              <a href={`/watch/${movie.id}`} className='featured--watchbutton'>
                &#9658; Assistir
              </a>
              <a href={`/list/add/${movie.id}`} className='featured--addbutton'>
                &#x271A; Minha Lista
              </a>
            </div>
            <div className='featured--genres'>
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
