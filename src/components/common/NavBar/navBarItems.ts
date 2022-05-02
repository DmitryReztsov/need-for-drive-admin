import {
  BlogIcon,
  BlogPostsIcon,
  ErrorIcon,
  FormsIcon,
  OverviewIcon,
  PersonIcon,
  PostIcon,
} from '../../../content/svg/Icons';

export const navItems = [
  {
    icon: BlogIcon,
    text: 'Карточка автомобиля',
    href: 'admin/car/1',
  },
  {
    icon: BlogPostsIcon,
    text: 'Список авто',
    href: 'admin/car',
  },
  {
    icon: PostIcon,
    text: 'Заказы',
    href: 'admin/order',
  },
  {
    icon: OverviewIcon,
    text: 'Список городов',
    href: 'admin/city',
  },
  {
    icon: FormsIcon,
    text: 'Пункты выдачи',
    href: 'admin/point',
  },
  {
    icon: PersonIcon,
    text: 'Тарифы',
    href: 'admin/rate',
  },
  {
    icon: ErrorIcon,
    text: 'Типы тарифов',
    href: 'admin/rateType',
  },
  {
    icon: ErrorIcon,
    text: 'Список статусов',
    href: 'admin/orderStatus',
  },
  {
    icon: ErrorIcon,
    text: 'Категории авто',
    href: 'admin/category',
  },
  {
    icon: ErrorIcon,
    text: 'Создать сущность',
    href: 'admin/new',
  },
];
