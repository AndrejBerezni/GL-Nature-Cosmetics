import { useTranslations } from 'next-intl';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import { INavbarLinksItem } from './navbar-links-item';

export default function NavbarLinks() {
  const translate = useTranslations('navbar');
  const navbarLinks: INavbarLinksItem[] = [
    {
      href: '/',
      text: translate('home'),
    },
    {
      href: '/shop',
      text: translate('shop'),
    },
    {
      href: '/blog',
      text: translate('blog'),
    },
    {
      href: '/about-us',
      text: translate('about'),
    },
  ];

  return <NavigationMenuList>{}</NavigationMenuList>;
}
