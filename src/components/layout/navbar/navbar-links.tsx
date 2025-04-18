import { useTranslations } from 'next-intl';

import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { INavigationLink } from '@/lib/types';

import NavbarLinksItem from './navbar-links-item';

export default function NavbarLinks() {
  const translate = useTranslations('layout');
  const navbarLinks: INavigationLink[] = [
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

  return (
    <NavigationMenuList className="hidden lg:flex">
      {navbarLinks.map((link) => (
        <NavbarLinksItem key={`${link.text}-navbar-link`} link={link} />
      ))}
    </NavigationMenuList>
  );
}
