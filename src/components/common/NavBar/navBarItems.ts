import {
  BlogIcon,
  BlogPostsIcon,
  FormsIcon,
  OverviewIcon,
  PostIcon,
} from '../../../content/svg/Icons';
import AddIcon from '@mui/icons-material/Add';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

export const navItems = [
  {
    icon: BlogIcon,
    text: 'Карточка автомобиля',
    href: 'admin/car/new',
  },
  {
    icon: DirectionsCarFilledIcon,
    text: 'Список авто',
    href: 'admin/car',
  },
  {
    icon: PostIcon,
    text: 'Заказы',
    href: 'admin/order',
  },
  {
    icon: LocationCityIcon,
    text: 'Список городов',
    href: 'admin/city',
  },
  {
    icon: LocationOnIcon,
    text: 'Пункты выдачи',
    href: 'admin/point',
  },
  {
    icon: CurrencyRubleIcon,
    text: 'Тарифы',
    href: 'admin/rate',
  },
  {
    icon: FormsIcon,
    text: 'Типы тарифов',
    href: 'admin/rateType',
  },
  {
    icon: OverviewIcon,
    text: 'Список статусов',
    href: 'admin/orderStatus',
  },
  {
    icon: BlogPostsIcon,
    text: 'Категории авто',
    href: 'admin/category',
  },
  {
    icon: AddIcon,
    text: 'Создать сущность',
    href: 'admin/new',
  },
];
