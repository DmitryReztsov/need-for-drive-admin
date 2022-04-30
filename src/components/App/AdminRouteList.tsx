import Cars from '../pages/Admin/lists/Cars/Cars';
import Orders from '../pages/Admin/lists/Orders/Orders';
import Cities from '../pages/Admin/lists/Cities/Cities';
import Rates from '../pages/Admin/lists/Rates/Rates';
import RateTypes from '../pages/Admin/lists/RateTypes/RateTypes';
import OrderStatuses from '../pages/Admin/lists/OrderStatuses/OrderStatuses';
import Points from '../pages/Admin/lists/Points/Points';
import Car from '../pages/Admin/editors/Car/Car';
import Order from '../pages/Admin/editors/Order/Order';
import City from '../pages/Admin/editors/City/City';
import OrderStatus from '../pages/Admin/editors/OrderStatus/OrderStatus';
import Rate from '../pages/Admin/editors/Rate/Rate';
import Point from '../pages/Admin/editors/Point/Point';
import RateType from '../pages/Admin/editors/RateType/RateType';

export const adminRouteList = [
  {
    route: 'car',
    element: <Cars/>,
  },
  {
    route: 'car/:id',
    element: <Car/>,
  },

  {
    route: 'order',
    element: <Orders/>,
  },
  {
    route: 'order/:id',
    element: <Order/>,
  },
  {
    route: 'city',
    element: <Cities/>,
  },
  {
    route: 'city/:id',
    element: <City/>,
  },
  {
    route: 'point',
    element: <Points/>,
  },
  {
    route: 'point/:id',
    element: <Point/>,
  },
  {
    route: 'rate',
    element: <Rates/>,
  },
  {
    route: 'rate/:id',
    element: <Rate/>,
  },
  {
    route: 'rateType',
    element: <RateTypes/>,
  },
  {
    route: 'rateType/:id',
    element: <RateType/>,
  },
  {
    route: 'orderStatus',
    element: <OrderStatuses/>,
  },
  {
    route: 'orderStatus/:id',
    element: <OrderStatus/>,
  },
];
