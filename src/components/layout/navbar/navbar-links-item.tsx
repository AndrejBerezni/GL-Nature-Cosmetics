import Link from 'next/link';

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export interface INavbarLinksItem {
  href: string;
  text: string;
}

export default function NavbarLinksItem({ link }: { link: INavbarLinksItem }) {
  return (
    <NavigationMenuItem>
      <Link href={link.href} passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {link.text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
