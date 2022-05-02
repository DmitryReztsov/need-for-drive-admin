import React from 'react';
import {Box, Typography} from '@mui/material';
import {
  carLeftInfo, carLeftInfoCategory, carLeftInfoFile, carLeftInfoImage, carLeftInfoName,
} from './CarLeftInfoStyle';
import noImage from '../../../../../../../content/png/no_image_available.png';
import {ICar} from '../../../../../../../models/ICar';
import FileInput from '../../../../../../common/inputs/FileInput/FileInput';
import {useAppDispatch} from '../../../../../../../hooks/reduxHooks';
import {setCarField} from '../../../../../../../store/slices/editSlices/car/carSlice';

interface ICarLeftInfo {
  car: ICar,
}

function CarLeftInfo({car}: ICarLeftInfo) {
  const dispatch = useAppDispatch();
  const {
    name, categoryId, thumbnail,
  } = car;

  function changeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      const newThumbnail = {
        path: reader.result,
        mimetype: file?.type,
        originalname: file?.name,
        size: file?.size,
      };
      dispatch(setCarField(['thumbnail', newThumbnail]));
    };
    reader.readAsDataURL(file!);
  }
  return (
    <Box sx={carLeftInfo}>
      <Box sx={
        {...carLeftInfoImage,
          backgroundImage: `url(${thumbnail ? thumbnail?.path : noImage})`,
        }}
      />
      <Typography sx={carLeftInfoName}>
        {name ? name.toUpperCase() : 'Неизвестная машина'}
      </Typography>
      <Typography sx={carLeftInfoCategory}>
        {categoryId ? categoryId?.name : 'Неизвестный тип'}
      </Typography>
      <Box sx={carLeftInfoFile}>
        <FileInput
          change={changeFile}
          accept={'.png, .jpg, .jpeg'}
        />
      </Box>
    </Box>
  );
}

export default CarLeftInfo;
