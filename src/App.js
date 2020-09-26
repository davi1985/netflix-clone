import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

import './App.css';

import { random } from './utils';

import Header from './components/Header';
import Loading from './components/Loading';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Footer from './components/Footer/';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((movie) => movie.slug === 'originals');
      const randomMovie = random(originals);
      const movie = originals[0].items.results[randomMovie];
      const movieData = await Tmdb.getMovieInfo(movie.id, 'tv');
      setFeaturedData(movieData);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      return window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false);
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className='page'>
      {movieList.length <= 0 && <Loading />}
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie movie={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} movies={item.items} />
        ))}
      </section>

      <Footer />
    </div>
  );
};
