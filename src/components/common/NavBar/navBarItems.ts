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
    text: 'Menu 4',
    href: '',
  },
  {
    icon: FormsIcon,
    text: 'Menu 5',
    href: '',
  },
  {
    icon: PersonIcon,
    text: 'Menu 6',
    href: '',
  },
  {
    icon: ErrorIcon,
    text: 'Menu 7',
    href: '',
  },
];
