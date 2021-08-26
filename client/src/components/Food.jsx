import React from 'react';
import axios from 'axios';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {}
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div id='temp'>
        <div id="informationContainer">
          <p>{this.state.food.name}</p>
          {/* <p>{this.state.food.instructions}</p> */}
          <p>Ingredients</p>
          {this.state.food.ingredients ?
            this.state.food.ingredients.map((ingredient) => { return (<li key={ingredient}>{ingredient}</li>) })
            : null}
        </div>
        <div id='imageContainer'><img src={this.state.food.thumbnail} /></div>
      </div>
    );
  }
}
export default Food;