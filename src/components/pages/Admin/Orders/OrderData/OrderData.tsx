import React from 'react';
import {
  Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography,
} from '@mui/material';
import {
  orderData, orderDataButtons, orderDataImage,
  orderDataInfo, orderDataOptions, orderDataPrice, orderDataRow,
  orderDataText,
} from './OrderDataStyle';
import {Check} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import {formatDate} from '../../../../../utils/time';
import noImage from '../../../../../content/png/no_image_available.png';
import {IOrder} from '../../../../../models/IOrder';

interface IOrderDataProps {
  orders: IOrder[],
  activeIndex: number,
}

function OrderData({orders, activeIndex}: IOrderDataProps) {
  return (
    <Box sx={orderData}>
      {orders
        .filter((order, i) => (i >= 5 * (activeIndex - 1)) && (i < 5 * activeIndex))
        .map((order) => {
          const {
            id, cityId, pointId, carId, dateFrom, dateTo,
            color, price, isFullTank, isNeedChildChair, isRightWheel,
          } = order;
          return <Box sx={orderDataRow} key={id}>
            <Box sx={orderDataInfo}>
              <Box
                sx={
                  {
                    ...orderDataImage,
                    backgroundImage: `url(${carId ? carId.thumbnail.path : noImage})`,
                  }
                }
              >
              </Box>
              <Typography component={'div'} variant={'body2'} sx={orderDataText}>
                <Typography variant={'body2'}>
                  <Typography
                    component={'span'}
                    variant={'body2'}
                    color={'grey.900'}
                  >
                    {carId ? carId.name.toUpperCase() : 'Неизвестная машина'}
                  </Typography>
                &nbsp;в&nbsp;
                  <Typography
                    component={'span'}
                    variant={'body2'}
                    color={'grey.900'}
                  >
                    {cityId ? cityId.name : 'Неопределнный город'}
                  </Typography>
                , {pointId ? pointId.address : 'Неопределнный адрес'}
                  <br/>
                </Typography>
                <Typography variant={'body2'}>
                  {formatDate(dateFrom)} - {formatDate(dateTo)}
                </Typography>
                <Typography variant={'body2'}>
                Цвет:&nbsp;
                  <Typography
                    component={'span'}
                    variant={'body2'}
                    color={'grey.900'}
                  >
                    {color}
                  </Typography>
                </Typography>
              </Typography>
            </Box>
            <FormGroup sx={orderDataOptions}>
              <FormControlLabel
              // добавлен false чтобы закрыть предупреждение компилятора
                control={
                  <Checkbox
                    onClick={(e) => e.preventDefault()}
                    disabled={!isFullTank}
                    checked={isFullTank || false}
                  />
                }
                label="Полный бак"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={(e) => e.preventDefault()}
                    disabled={!isNeedChildChair}
                    checked={isNeedChildChair || false}
                  />
                }
                label="Детское кресло"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={(e) => e.preventDefault()}
                    disabled={!isRightWheel}
                    checked={isRightWheel || false}
                  />
                }
                label="Правый руль"
              />
            </FormGroup>
            <Typography sx={orderDataPrice}>
              {price ? `${price.toLocaleString()} ₽` : 'Не указана'}
            </Typography>
            <ButtonGroup variant="outlined" sx={orderDataButtons}>
              <Button
                startIcon={<Check color={'primary'} />}
                color={'secondary'}>
              Готово
              </Button>
              <Button
                startIcon={<ClearIcon color={'error'} />}
                color={'secondary'}>
              Отмена
              </Button>
              <Button
                startIcon={<MoreVertIcon />}
                color={'secondary'}>
              Изменить
              </Button>
            </ButtonGroup>
          </Box>;
        })}
    </Box>
  );
}

export default OrderData;
