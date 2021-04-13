import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, movCars] = useState({
    redCar: false,
    blueCar: false,
    yellow: false,
  });

  const [signal, changeSignals] = useState({ signalColor: 'red' });

  const moveCar = (car, side) => {
    const newCar = {
        ...cars,
        [car]: side,
    };
    movCars(newCar)
  }

  const changeSignal = (color) => {
    const load = {
      ...signal,
      signalColor: color,
    }
    changeSignals(load)
  }

    return (
      <CarsContext.Provider value={{cars, moveCar, signal, changeSignal }}>
        { children }
      </CarsContext.Provider>
    );
};

export default Provider;
