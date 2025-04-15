import { NavigationMenu } from '@/components/ui/navigation-menu';
import { SearchMobile } from '@/features/search/components/search-mobile';

import BurgerMenu from './burger-menu';
import NavbarActions from './navbar-actions';
import NavbarBrand from './navbar-brand';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <NavigationMenu
      className="lg:flex grid grid-cols-3 items-center justify-between w-full
     max-w-[1440px] px-4 py-2 gap-2"
    >
      <NavbarBrand />
      <NavbarLinks />
      <div className="min-w-1/5 hidden lg:inline-block">
        <NavbarActions />
      </div>
      <BurgerMenu />
      <SearchMobile />
    </NavigationMenu>
  );
}
