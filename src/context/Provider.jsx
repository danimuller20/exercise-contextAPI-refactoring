import React, { useState } from 'react';
import CardContext from './CarContext';

const Provider = ({ children }) => {
  const [cars, movCars] = useState({
    redCar: false,
    blueCar: false,
    yellow: false,
  })

  const moveCar = (car, side) => {
    const newCar = {
        ...cars,
        [car]: side,
    };
    movCars(newCar)
  }

    return (
      <CardContext.Provider value={{cars, moveCar }}>
        { children }
      </CardContext.Provider>
    );
};

export default Provider;
