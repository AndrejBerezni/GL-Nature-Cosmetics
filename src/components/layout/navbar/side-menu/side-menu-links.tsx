import { House, Info, PenTool, Store, UserRound } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import { INavigationLinkWithIcon } from '@/lib/types';

import SideMenuLinksItem from './side-menu-links-item';

export default function SideMenuLinks() {
  const translate = useTranslations('layout');
  const links: INavigationLinkWithIcon[] = [
    {
      href: '/',
      text: translate('home'),
      icon: <House />,
    },
    {
      href: '/shop',
      text: translate('shop'),
      icon: <Store />,
    },
    {
      href: '/blog',
      text: translate('blog'),
      icon: <PenTool />,
    },
    {
      href: '/about-us',
      text: translate('about'),
      icon: <Info />,
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col px-4 pb-4 gap-4">
        <Separator className="bg-accent" />
        {links.map((link) => (
          <SideMenuLinksItem key={`${link.href}-side-menu-link`} link={link} />
        ))}
        <Separator className="bg-accent" />
        <SideMenuLinksItem
          link={{
            href: '/user',
            text: translate('account'),
            icon: <UserRound />,
          }}
        />
      </ul>
    </nav>
  );
}
