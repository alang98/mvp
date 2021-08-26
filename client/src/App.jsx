import React from 'react';
import reactDom from 'react-dom';
import Movie from './components/Movie.jsx';
import Food from './components/Food.jsx';
import Drink from './components/Drink.jsx';
import Navbar from './components/Navbar.jsx';

var App = (props) => {
  return (
    <div id='randomizedResults'>
      <Navbar />
      <Movie />
      <Food />
      <Drink />
    </div>
  );
};

reactDom.render(<App/>, document.getElementById('app'));