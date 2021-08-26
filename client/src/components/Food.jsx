import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import { IoIosSync } from "react-icons/io";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {},
      show: false
    };
    this.moduleClick = this.moduleClick.bind(this);
    this.getRandomFood = this.getRandomFood.bind(this);
  }
  componentDidMount() {
    this.getRandomFood();
  }
  getRandomFood() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => {
        var foodObject = {
          name: res.data.meals[0].strMeal,
          thumbnail: res.data.meals[0].strMealThumb,
          instructions: res.data.meals[0].strInstructions,
          ingredients: []
        };
        for (var index = 1; index <= 20; index++) {
          var strIngredient = 'strIngredient' + index;
          var strMeasure = 'strMeasure' + index;
          if (res.data.meals[0][strIngredient] !== '') {
            if (res.data.meals[0][strMeasure] === '' && res.data.meals[0][strIngredient] === '') {
              break;
            }
            if (res.data.meals[0][strMeasure] !== '') {
              foodObject.ingredients.push(res.data.meals[0][strMeasure] + ' ' + res.data.meals[0][strIngredient]);
            } else {
              foodObject.ingredients.push(res.data.meals[0][strIngredient]);
            }
          }
        }
        this.setState({ food: foodObject });
      })
      .catch(err => {
        console.log(err);
      });
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
          <h1> The Meal </h1>
          <IoIosSync  onClick={this.getRandomFood}/>
        </div>
        <Modal  onClick={this.moduleClick} show={this.state.show}  information={['food',
                                                    this.state.food.name,
                                                    this.state.food.instructions,
                                                    this.state.food.ingredients
                                                    ]}/>
        <div id='imageContainer' onClick={this.moduleClick}><img src={this.state.food.thumbnail} /></div>
      </div>
    );
  }
}
export default Food;