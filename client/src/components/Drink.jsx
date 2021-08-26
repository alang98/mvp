import React from 'react';
import axios from 'axios';

class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: {}
    };
  }
  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => {
        var drinkObject = {
          name: res.data.drinks[0].strDrink,
          thumbnail: res.data.drinks[0].strDrinkThumb,
          Instructions: res.data.drinks[0].strInstructions,
          glass: res.data.drinks[0].strGlass,
          ingredients: []
        };
        for (var index = 1; index <= 15; index++) {
          var ingredientStr = 'strIngredient' + index;
          var measurementStr = 'strMeasure' + index;
          if (res.data.drinks[0][ingredientStr] !== null) {
            if (res.data.drinks[0][measurementStr] !== null) {
              drinkObject.ingredients.push(res.data.drinks[0][measurementStr]
                + ' ' + res.data.drinks[0][ingredientStr]);
            } else {
              drinkObject.ingredients.push(res.data.drinks[0][ingredientStr]);
            }
          }
          if (res.data.drinks[0][measurementStr] === null && res.data.drinks[0][ingredientStr] === null) {
            break;
          }
        }
        this.setState({ drink: drinkObject });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id='temp'>
        <div id='imageContainer'><img src={this.state.drink.thumbnail} /></div>
        <div id="informationContainer">
          <p>{this.state.drink.name}</p>
          <p>{this.state.drink.Instructions}</p>
          {this.state.drink.ingredients ?
            this.state.drink.ingredients.map((ingredient) => { return (<li key={ingredient}>{ingredient}</li>) })
            : null}
        </div>
      </div>
    );
  }
}

export default Drink;