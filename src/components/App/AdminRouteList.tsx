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
    route: 'rate',
    element: <Rates/>,
  },
  {
    route: 'rateType',
    element: <RateTypes/>,
  },
  {
    route: 'orderStatus',
    element: <OrderStatuses/>,
  },
];
