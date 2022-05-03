import React, {useEffect, useRef} from 'react';
import {IOrder} from '../../../../../../models/IOrder';
import {Box} from '@mui/material';
import {orderRight} from './OrderRightStyle';
import AutocompleteInput from '../../../../../common/inputs/AutocompleteInput/AutocompleteInput';
import {setOrderField} from '../../../../../../store/slices/editSlices/order/orderSlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {cityApi} from '../../../../../../services/endpoints/city';
import {pointApi} from '../../../../../../services/endpoints/point';
import {carApi} from '../../../../../../services/endpoints/car';
import {rateApi} from '../../../../../../services/endpoints/rate';
import RadioGroupInput from '../../../../../common/inputs/RadioGroupInput/RadioGroupInput';
import DateInput from '../../../../../common/inputs/DateInput/DateInput';
import {MINUTE} from '../../../../../../utils/time';
import {orderStatusApi} from '../../../../../../services/endpoints/orderStatus';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {categoryApi} from '../../../../../../services/endpoints/category';
import {rateTypeApi} from '../../../../../../services/endpoints/rateType';

interface IOrderRight {
  order: IOrder,
}

function OrderRight({order}: IOrderRight) {
  const dispatch = useAppDispatch();
  const firstCityUpdate = useRef(true);
  const firstCarUpdate = useRef(true);
  const firstCategoryUpdate = useRef(true);
  const firstRateTypeUpdate = useRef(true);
  const {data: cities} = cityApi.useGetCitiesQuery({limit: 0});
  const {data: points} = pointApi.useGetPointsQuery({limit: 0});
  const {data: cars, isLoading: isCarLoading} = carApi.useGetCarsQuery({limit: 0});
  const {data: categories} = categoryApi.useGetCategoriesQuery({limit: 0});
  const {data: rates} = rateApi.useGetRatesQuery({limit: 0});
  const {data: rateTypes} = rateTypeApi.useGetRateTypesQuery({limit: 0});
  const {data: orderStatuses} = orderStatusApi.useGetOrderStatusesQuery({limit: 0});
  const {
    orderStatusId, cityId, pointId, carId, color, dateFrom, dateTo,
    rateId, price, isFullTank, isNeedChildChair, isRightWheel,
    categoryId, rateTypeId,
  } = order;

  function pointFilter() {
    return (points?.data || []).filter((point) => point.cityId?.id === cityId?.id);
  }

  function carFilter() {
    return (cars?.data || []).filter((car) => car.categoryId?.id === categoryId?.id);
  }

  function rateFilter() {
    return (rates?.data || []).filter((rate) => rate.rateTypeId?.id === rateTypeId?.id);
  }

  useEffect(() => {
    if (!cityId) return;
    if (firstCityUpdate.current) {
      firstCityUpdate.current = false;
      return;
    }
    dispatch(setOrderField(['pointId', null]));
  }, [cityId]);

  useEffect(() => {
    if (!carId) return;
    if (firstCarUpdate.current) {
      firstCarUpdate.current = false;
      return;
    }
    dispatch(setOrderField(['color', carId?.colors.length ? carId?.colors[0] : 'Любой']));
  }, [carId?.colors]);

  useEffect(() => {
    if (dateFrom + 10 * MINUTE > dateTo) {
      dispatch(setOrderField(['dateTo', dateFrom + 10 * MINUTE]));
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (!categoryId) return;
    if (firstCategoryUpdate.current) {
      firstCategoryUpdate.current = false;
      return;
    }
    dispatch(setOrderField(['carId', null]));
  }, [categoryId]);

  useEffect(() => {
    if (categoryId) return;
    carId && dispatch(setOrderField(['categoryId', carId?.categoryId]));
  }, [carId]);

  useEffect(() => {
    if (!rateTypeId) return;
    if (firstRateTypeUpdate.current) {
      firstRateTypeUpdate.current = false;
      return;
    }
    dispatch(setOrderField(['rateId', null]));
  }, [rateTypeId]);

  useEffect(() => {
    if (rateTypeId) return;
    rateId && dispatch(setOrderField(['rateTypeId', rateId?.rateTypeId]));
  }, [rateId]);
  return (
    <Box sx={orderRight}>
      <Box>
        <AutocompleteInput
          id="cityId"
          label={'Город*'}
          value={cityId}
          options={(cities?.data || [])}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
          autoFocus
        />
        <AutocompleteInput
          id="pointId"
          label={'Пункт выдачи*'}
          value={pointId}
          options={pointFilter()}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
          optionKey={'address'}
        />
      </Box>
      <Box>
        <DateInput
          id="dateFrom"
          label={'Начало поездки*'}
          value={dateFrom || 0}
          action={setOrderField}
          required
          fullWidth
        />
        <DateInput
          id="dateTo"
          label={'Конец поездки*'}
          value={dateTo || 0}
          action={setOrderField}
          required
          fullWidth
        />
      </Box>
      <Box>
        <AutocompleteInput
          id="categoryId"
          label={'Категория автомобиля*'}
          value={categoryId}
          options={(categories?.data || [])}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
        />
        <AutocompleteInput
          id="carId"
          label={'Машина*'}
          value={carId}
          options={carFilter()}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
          loading={isCarLoading}
        />
      </Box>
      <Box>
        <RadioGroupInput
          id="color"
          label={'Цвет машины*'}
          value={color}
          items={carId ? carId?.colors : []}
          toggleRadio={
            (e) => dispatch(setOrderField(['color', e.currentTarget.textContent]))
          }
        />
      </Box>
      <Box>
        <AutocompleteInput
          id="orderStatusId"
          label={'Статус заказа*'}
          value={orderStatusId}
          options={(orderStatuses?.data || [])}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
        />
        <TextInput
          id='price'
          label={'Цена заказа*'}
          value={price}
          change={(e) => dispatch(setOrderField(['price', +e.target.value]))}
          required
          placeholder={'Введите цену...'}
          fullWidth
        />
      </Box>
      <Box>
        <AutocompleteInput
          id="rateTypeId"
          label={'Тип тарифа*'}
          value={rateTypeId}
          options={(rateTypes?.data || [])}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
          optionKey={'name'}
        />
        <AutocompleteInput
          id="rateId"
          label={'Тарифный план (в ₽)*'}
          value={rateId}
          options={rateFilter()}
          action={setOrderField}
          required
          clearOnEscape
          fullWidth
          optionKey={'price'}
        />
      </Box>
    </Box>
  );
}

export default OrderRight;
