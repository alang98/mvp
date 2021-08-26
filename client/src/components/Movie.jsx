import React from 'react';
import axios from 'axios';
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=84f04a5b2e35ab0d3ec8ceb006279721')
      .then((res) => {
        var movieObject = {
          name: res.data.title,
          overview: res.data.overview,
          tagline: res.data.tagline,
          image: 'https://image.tmdb.org/t/p/w500' + res.data.poster_path
        };
        console.log(movieObject);
        this.setState({ movie: movieObject });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id='temp'>
        <div id='imageContainer'><img src={this.state.image} /> </div>
        <div id="informationContainer">
          <p>{this.state.movie.name}</p>
          <p>{this.state.movie.tagline}</p>
          <p>{this.state.movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default Movie;