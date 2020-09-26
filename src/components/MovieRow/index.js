import React, { useState } from 'react';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

import './style.css';

const MovieRow = ({ title, movies }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w300';
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let width = movies.results.length * 150;
    if (window.innerWidth - width > x) {
      x = window.innerWidth - width - 60;
    }
    setScrollX(x);
  };

  return (
    <div className='moviesRow'>
      <h2>{title}</h2>

      <div className='movieRow-left' onClick={handleLeftArrow}>
        <NavigateBeforeOutlinedIcon style={{ fontSize: 50 }} />
      </div>

      <div className='movieRow--right' onClick={handleRightArrow}>
        <NavigateNextOutlinedIcon style={{ fontSize: 50 }} />
      </div>

      <div className='movieRow--listarea'>
        <div
          className='movieRow--list'
          style={{
            marginLeft: scrollX,
            width: movies.results.length * 150,
          }}
        >
          {movies.results.length > 0 &&
            movies.results.map((movie, key) => (
              <div className='movieRow--item' key={key}>
                <img
                  src={`${baseUrl}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
