import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import CarContext from './CarContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }


  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side},
    });
  };

  render() {
    const carContext = {
      ...this.state,
      moveCar: this.moveCar,
    }
    return (
      <CarContext.Provider value={carContext}>
        <Cars />
      </CarContext.Provider>
    );
  }
}

export default App;
