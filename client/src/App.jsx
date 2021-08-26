import React from 'react';
import reactDom from 'react-dom';
import Movie from './components/Movie.jsx';
import Food from './components/Food.jsx';
import Drink from './components/Drink.jsx';
import Navbar from './components/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ roll: true });
  }
  render() {
    if (this.state.roll) {
      return (
        <div>
          <Navbar />
          <div id='randomizedResults'>
            <Movie />
            <Food />
            <Drink />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <div id='rolling' onClick={this.handleClick}>
          <h1>Ready to Rock AND Roll!!!</h1>
          <p> pst Click here! </p>
        </div>

      </div>
    )
  }
};
reactDom.render(<App />, document.getElementById('app'));