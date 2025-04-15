import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { INavigationLink } from '@/lib/types';

export default function NavbarLinksItem({ link }: { link: INavigationLink }) {
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
