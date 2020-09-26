import React from 'react';

import './style.css';
import loading from './../../assets/loading.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={loading} alt='Carregando' />
    </div>
  );
};

export default Loading;
