import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import { IoIosSync } from "react-icons/io";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      show: false
    };
    this.moduleClick = this.moduleClick.bind(this);
  }
  componentDidMount() {
    var tempBoolean = true;
    // while (tempBoolean) {
    let movieId = Math.floor(Math.random() * 865952);
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=84f04a5b2e35ab0d3ec8ceb006279721`)
      .then((res) => {
        tempBoolean = false;
        var movieObject = {
          name: res.data.title,
          overview: res.data.overview,
          tagline: res.data.tagline,
          image: 'https://image.tmdb.org/t/p/w500' + res.data.poster_path
        };
        this.setState({ movie: movieObject });
      })
      .catch(err => {
        console.log(err);
      });
    // }
  }
  moduleClick() {
    if (this.state.show) {
      this.setState({show: false});
    } else {
      this.setState({show:true});
    }
  }
  render() {
    return (
      <div id='temp' >
        <div id='redoSection'>
          <h1> The Movie </h1>
          <IoIosSync  />
        </div>
        <Modal onClick={this.moduleClick} show={this.state.show} information={[this.state.movie.name,
                                                  this.state.movie.tagline,
                                                  this.state.movie.overview
                                                  ]}/>
        <div id='imageContainer' onClick={this.moduleClick}><img src={this.state.movie.image} /> </div>
      </div>
    );
  }
}

export default Movie;