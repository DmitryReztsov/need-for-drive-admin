import {ICity} from '../../../../../../models/ICity';
import {Box} from '@mui/material';

interface ICityProps {
  city: ICity,
}

function CityItem({city}: ICityProps) {
  const {id, name} = city;
  return (
    <Box key={id}>
      {name}
    </Box>
  );
}

export default CityItem;
