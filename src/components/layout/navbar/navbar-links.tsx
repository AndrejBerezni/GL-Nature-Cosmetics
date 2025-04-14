import { useTranslations } from 'next-intl';

import { NavigationMenuList } from '@/components/ui/navigation-menu';

import NavbarLinksItem, { INavbarLinksItem } from './navbar-links-item';

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

  return (
    <NavigationMenuList>
      {navbarLinks.map((link) => (
        <NavbarLinksItem key={`${link.text}-navbar-link`} link={link} />
      ))}
    </NavigationMenuList>
  );
}
