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
import CheckBoxGroupInput from '../../../../../common/inputs/CheckBoxGroupInput/CheckBoxGroupInput';
import {useFirstRender} from '../../../../../../hooks/useFirstRender';

interface IOrderRight {
  order: IOrder,
}

function OrderRight({order}: IOrderRight) {
  const dispatch = useAppDispatch();
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

  const checkBoxLabels = ['Полный бак', 'Детское кресло', 'Правый руль'];
  const checkBoxIds = ['isFullTank', 'isNeedChildChair', 'isRightWheel'];
  const checkBoxValues = [isFullTank, isNeedChildChair, isRightWheel];
  const checkBoxItems = checkBoxValues.map((item, i) => {
    return {
      label: checkBoxLabels[i],
      id: checkBoxIds[i],
      value: item,
    };
  });
  function pointFilter() {
    return (points?.data || []).filter((point) => point.cityId?.id === cityId?.id);
  }

  function carFilter() {
    return (cars?.data || []).filter((car) => car.categoryId?.id === categoryId?.id);
  }

  function rateFilter() {
    return (rates?.data || []).filter((rate) => rate.rateTypeId?.id === rateTypeId?.id);
  }
  // нужны для предотвращения сброса данных заказа при первом рендере
  useFirstRender(cityId, setOrderField(['pointId', null]));
  useFirstRender(carId,
    setOrderField(['color', carId?.colors.length ? carId?.colors[0] : 'Любой']),
  );
  useFirstRender(categoryId, setOrderField(['carId', null]));
  useFirstRender(rateTypeId, setOrderField(['rateId', null]));

  useEffect(() => {
    if (dateFrom + 10 * MINUTE > dateTo) {
      dispatch(setOrderField(['dateTo', dateFrom + 10 * MINUTE]));
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (categoryId) return;
    carId && dispatch(setOrderField(['categoryId', carId?.categoryId]));
  }, [carId]);

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
          placeholder={'Введите название города...'}
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
          error={cityId && !pointFilter().length}
          placeholder={'Введите пункт выдачи...'}
          helperText={'В выбранном городе нет пунктов выдачи'}
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
          placeholder={'Выберите категорию авто...'}
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
          error={categoryId && !carFilter().length}
          placeholder={'Выберите автомобиль...'}
          helperText={'В данной категории нет доступных авто'}
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
          fullWidth
        />
        <CheckBoxGroupInput
          label={'Доп. опции'}
          items={carId ? checkBoxItems : []}
          toggleCheckbox={
            (e) => dispatch(setOrderField([e.target.id, e.target.checked]))
          }
          fullWidth
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
          placeholder={'Выберите тип тарифа...'}
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
          error={rateTypeId && !rateFilter().length}
          placeholder={'Выберите тариф...'}
          helperText={'В данной категории нет тарифов'}
        />
      </Box>
    </Box>
  );
}

export default OrderRight;
