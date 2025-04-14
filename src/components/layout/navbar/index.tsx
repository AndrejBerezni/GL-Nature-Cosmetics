import { NavigationMenu } from '@/components/ui/navigation-menu';

import NavbarActions from './navbar-actions';
import NavbarBrand from './navbar-brand';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <NavigationMenu
      className="flex items-center justify-between w-full
     max-w-[1440px] px-4 py-2"
    >
      <NavbarBrand />
      <NavbarLinks />
      <div className="min-w-1/5">
        <NavbarActions />
      </div>
    </NavigationMenu>
  );
}
