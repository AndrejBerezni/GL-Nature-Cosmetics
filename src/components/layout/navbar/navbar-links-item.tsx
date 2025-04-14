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
    <NavigationMenuItem asChild>
      <NavigationMenuLink
        href={link.href}
        className={navigationMenuTriggerStyle()}
      >
        {link.text}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
