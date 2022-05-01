import React from 'react';
import {Box, Typography} from '@mui/material';
import {
  carLeftInfo, carLeftInfoCategory, carLeftInfoFile, carLeftInfoImage, carLeftInfoName,
} from './CarLeftInfoStyle';
import noImage from '../../../../../../../content/png/no_image_available.png';
import {ICar} from '../../../../../../../models/ICar';
import FileInput from '../../../../../../common/inputs/FileInput/FileInput';

interface ICarLeftInfo {
  car: ICar,
}

function CarLeftInfo({car}: ICarLeftInfo) {
  const {
    name, categoryId, thumbnail,
  } = car;

  function changeFile(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result);
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
        />
      </Box>
    </Box>
  );
}

export default CarLeftInfo;
