import React from 'react';
import {
  Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography,
} from '@mui/material';
import {
  orderData, orderDataButtons, orderDataImage,
  orderDataInfo, orderDataOptions, orderDataPrice,
  orderDataText,
} from './OrderDataStyle';
import {Check} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import {formatDate} from '../../../../../utils/time';

interface IOrderDataProps {
  order: any,
}

function OrderData({order}: IOrderDataProps) {
  const {
    cityId, pointId, carId, dateFrom, dateTo,
    color, price, isFullTank, isNeedChildChair, isRightWheel,
  } = order;
  return (
    <Box sx={orderData}>
      <Box sx={orderDataInfo}>
        <Box sx={{...orderDataImage, backgroundImage: `url(${carId.thumbnail.path})`}}>
        </Box>
        <Typography component={'div'} variant={'body2'} sx={orderDataText}>
          <Typography variant={'body2'}>
            <Typography
              component={'span'}
              variant={'body2'}
              color={'grey.900'}
            >
              {carId.name.toUpperCase()}
            </Typography>
            &nbsp;в&nbsp;
            <Typography
              component={'span'}
              variant={'body2'}
              color={'grey.900'}
            >
              {cityId.name}
            </Typography>
            , {pointId.address}
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
          control={<Checkbox disabled={!isFullTank} defaultChecked={isFullTank} />}
          label="Полный бак"
        />
        <FormControlLabel
          control={<Checkbox disabled={!isNeedChildChair} defaultChecked={isNeedChildChair} />}
          label="Детское кресло"
        />
        <FormControlLabel
          control={<Checkbox disabled={!isRightWheel} defaultChecked={isRightWheel} />}
          label="Правый руль"
        />
      </FormGroup>
      <Typography sx={orderDataPrice}>
        {`${price.toLocaleString()} ₽`}
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
    </Box>
  );
}

export default OrderData;
