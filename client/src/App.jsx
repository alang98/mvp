import React from 'react';
import reactDom from 'react-dom';
import Movie from './components/Movie.jsx';
import Food from './components/Food.jsx';
import Drink from './components/Drink.jsx';

var App = (props) => {
  return (
    <div>
      <Movie />
      <Food />
      <Drink />
    </div>
  );
};

reactDom.render(<App/>, document.getElementById('app'));