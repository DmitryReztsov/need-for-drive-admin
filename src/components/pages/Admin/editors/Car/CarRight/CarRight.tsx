import React from 'react';
import {ICar} from '../../../../../../models/ICar';

interface ICarRight {
  car: ICar,
}

function CarRight({car}: ICarRight) {
  return (
    <div>CarRight</div>
  );
}

export default CarRight;
