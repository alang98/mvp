import React from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import { IoIosSync } from "react-icons/io";
class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: {},
      show: false
    };
    this.moduleClick = this.moduleClick.bind(this);
    this.getRandomDrink = this.getRandomDrink.bind(this);
  }
  componentDidMount() {
    this.getRandomDrink();
  }
  getRandomDrink() {
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
  moduleClick() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }
  render() {
    return (
      <div id='temp' >
        <div id='redoSection'>
          <h1> The Drank </h1>
          <IoIosSync onClick={this.getRandomDrink} />
        </div>
        <Modal onClick={this.moduleClick} show={this.state.show} information={['food',
          this.state.drink.name,
          this.state.drink.Instructions,
          this.state.drink.ingredients
        ]} />
        <div id='imageContainer' onClick={this.moduleClick}><img src={this.state.drink.thumbnail} /></div>
      </div>
    );
  }
}

export default Drink;